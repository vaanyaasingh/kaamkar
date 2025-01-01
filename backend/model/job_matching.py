import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from datetime import datetime
import json
from typing import Dict, List, Optional
import openai
from dotenv import load_dotenv
import os

class JobMatchingModel:
    def __init__(self):
        load_dotenv()
        self.openai = openai
        self.openai.api_key = os.getenv("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")
        self.vectorizer = TfidfVectorizer(stop_words='english')
        self.job_embeddings = None
        self.df = None

    def load_data(self, data_path: str = "backend/data/upwork_jobs.csv"):
        """Load and preprocess the Upwork dataset"""
        self.df = pd.read_csv(data_path)
        
        # Convert hourly rates and budget to INR
        usd_to_inr = 83  # Current approximate rate
        for col in ['hourly_low', 'hourly_high', 'budget']:
            self.df[col] = self.df[col].fillna(0) * usd_to_inr

        # Create combined text field for matching
        self.df['combined_text'] = self.df['title'] + ' ' + self.df['description']
        
        # Calculate embeddings for all jobs
        self.job_embeddings = self.vectorizer.fit_transform(self.df['combined_text'])

    async def get_embedding(self, text: str) -> list:
        """Get OpenAI embedding for text"""
        response = await self.openai.Embedding.acreate(
            model="text-embedding-ada-002",
            input=text
        )
        return response['data'][0]['embedding']

    async def extract_skills(self, text: str) -> List[str]:
        """Extract skills from text using GPT-3.5"""
        response = await self.openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Extract technical skills from the following text. Return only a comma-separated list of skills."},
                {"role": "user", "content": text}
            ]
        )
        return [skill.strip() for skill in response.choices[0].message['content'].split(',')]

    def calculate_budget_match(self, user_rate: float, job_row: pd.Series) -> float:
        """Calculate how well the budget/rate matches user expectations"""
        if job_row['is_hourly']:
            job_avg_rate = (job_row['hourly_low'] + job_row['hourly_high']) / 2
            rate_diff = abs(user_rate - job_avg_rate) / job_avg_rate
            return max(0, 1 - rate_diff)
        else:
            if job_row['budget'] == 0:  # No budget specified
                return 0.5
            estimated_hours = job_row['budget'] / user_rate
            if estimated_hours < 1 or estimated_hours > 160:  # More than a month of work
                return 0
            return max(0, 1 - (abs(40 - estimated_hours) / 40))

    async def find_matches(self, user_input: Dict) -> List[Dict]:
        """
        Find matching jobs based on user input
        
        Expected user_input format:
        {
            "skills": List[str],            # List of user's skills
            "preferred_rate": float,        # Hourly rate in INR
            "job_type": str,               # "hourly" or "fixed"
            "experience_level": str,        # "entry", "intermediate", "expert"
            "preferred_location": str,      # Optional: preferred country
            "description": str             # Free text job description
        }
        """
        
        # Create user profile text
        user_text = f"{' '.join(user_input['skills'])} {user_input['description']}"
        user_vector = self.vectorizer.transform([user_text])

        # Calculate similarity scores
        similarity_scores = cosine_similarity(user_vector, self.job_embeddings).flatten()

        # Calculate budget/rate matches
        budget_scores = self.df.apply(
            lambda row: self.calculate_budget_match(user_input['preferred_rate'], row),
            axis=1
        )

        # Calculate type preference score (hourly vs fixed)
        type_scores = self.df['is_hourly'].apply(
            lambda x: 1.0 if (x and user_input['job_type'] == 'hourly') or
                          (not x and user_input['job_type'] == 'fixed')
            else 0.5
        )

        # Calculate location preference score if provided
        if user_input.get('preferred_location'):
            location_scores = self.df['country'].apply(
                lambda x: 1.0 if x.lower() == user_input['preferred_location'].lower()
                else 0.5
            )
        else:
            location_scores = pd.Series([1.0] * len(self.df))

        # Combine scores with weights
        final_scores = (
            similarity_scores * 0.4 +    # Skills and description match
            budget_scores * 0.3 +        # Budget/rate match
            type_scores * 0.2 +          # Job type match
            location_scores * 0.1        # Location preference
        )

        # Get top matches
        top_indices = final_scores.argsort()[-20:][::-1]
        
        matches = []
        for idx in top_indices:
            job = self.df.iloc[idx]
            match_score = final_scores[idx] * 100
            
            matches.append({
                "job_id": idx,
                "title": job['title'],
                "description": job['description'],
                "match_score": round(match_score, 1),
                "hourly_range": f"₹{int(job['hourly_low'])}-₹{int(job['hourly_high'])}" if job['is_hourly'] else None,
                "budget": f"₹{int(job['budget'])}" if not job['is_hourly'] and job['budget'] > 0 else None,
                "country": job['country'],
                "published_date": job['published_date'],
                "similarity_score": round(similarity_scores[idx] * 100, 1),
                "budget_match": round(budget_scores[idx] * 100, 1),
                "type_match": round(type_scores[idx] * 100, 1),
                "is_hourly": job['is_hourly']
            })

        return matches

    def get_job_details(self, job_id: int) -> Dict:
        """Get detailed information about a specific job"""
        job = self.df.iloc[job_id]
        return {
            "title": job['title'],
            "description": job['description'],
            "hourly_range": f"₹{int(job['hourly_low'])}-₹{int(job['hourly_high'])}" if job['is_hourly'] else None,
            "budget": f"₹{int(job['budget'])}" if not job['is_hourly'] and job['budget'] > 0 else None,
            "country": job['country'],
            "published_date": job['published_date'],
            "is_hourly": job['is_hourly']
        }