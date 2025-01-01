import React, { useState } from 'react';
import axios from 'axios';

function JobSearch() {
  const [formData, setFormData] = useState({
    skills: '',
    preferred_rate: '',
    job_type: '',
    experience_level: '',
    description: '',
  });

  const [jobMatches, setJobMatches] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/match-jobs', {
        ...formData,
        skills: formData.skills.split(','), // Split skills into an array
      });
      setJobMatches(response.data.matches);
    } catch (err) {
      setError('Failed to fetch job matches. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Job Search</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Skills (comma-separated):</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Preferred Rate ($/hour):</label>
          <input
            type="number"
            name="preferred_rate"
            value={formData.preferred_rate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Job Type:</label>
          <input
            type="text"
            name="job_type"
            value={formData.job_type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Experience Level:</label>
          <input
            type="text"
            name="experience_level"
            value={formData.experience_level}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Find Jobs</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div>
        <h2>Job Matches</h2>
        {jobMatches.length > 0 ? (
          <ul>
            {jobMatches.map((job, index) => (
              <li key={index}>{job.job_title}</li>
            ))}
          </ul>
        ) : (
          <p>No matches found</p>
        )}
      </div>
    </div>
  );
}

export default JobSearch;