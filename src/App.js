import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>KaamKar</h1>
            </header>
            <div className="hero">
                <h2>Find Your Next Opportunity</h2>
                <p>Connect with clients and showcase your skills on our freelance platform</p>
                <button className="button">Get Started</button>
            </div>
            <section className="featured-projects">
                <h3>Featured Projects</h3>
                <div className="project">
                    <h4>E-commerce Website Development</h4>
                    <p>Looking for an experienced developer to build a full-featured e-commerce website.</p>
                    <p>Budget: $3000-$5000</p>
                </div>
                <div className="project">
                    <h4>Mobile App UI/UX Design</h4>
                    <p>Need a creative designer for a fitness tracking mobile app interface.</p>
                    <p>Budget: $1500-$2500</p>
                </div>
            </section>
        </div>
    );
}

export default App;