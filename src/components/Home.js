// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <h1>Find Your Next Opportunity</h1>
        <p>Connect with clients and showcase your skills on our freelance platform</p>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search projects..."
            className="search-input"
          />
          <select className="search-select">
            <option value="">All Categories</option>
            <option value="web">Web Development</option>
            <option value="design">Design</option>
            <option value="mobile">Mobile Development</option>
          </select>
          <button className="search-btn">Search</button>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-footer">
                <span className="project-price">${project.price}</span>
                <Link to={`/project/${project.id}`} className="view-details">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: 'E-commerce Website Development',
    category: 'web',
    description: 'Looking for an experienced developer to build a full-featured e-commerce website.',
    price: '3000-5000',
    technologies: ['ReactNode.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Mobile App UI/UX Design',
    category: 'design',
    description: 'Need a creative designer for a fitness tracking mobile app interface.',
    price: '1500-2500',
    technologies: ['Figma', 'UI/UX', 'Mobile Design']
  }
];

export default Home;