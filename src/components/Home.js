import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'design', name: 'Design' },
    { id: 'writing', name: 'Content Writing' },
    { id: 'marketing', name: 'Digital Marketing' }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'E-commerce Website Development',
      category: 'web',
      budget: '$3000-$5000',
      description: 'Looking for an experienced developer to build a full-featured e-commerce website.',
      skills: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Mobile App UI/UX Design',
      category: 'design',
      budget: '$1500-$2500',
      description: 'Need a creative designer for a fitness tracking mobile app interface.',
      skills: ['Figma', 'UI/UX', 'Mobile Design']
    }
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4">Find Your Next Opportunity</h1>
              <p className="lead">Connect with clients and showcase your skills on our freelance platform</p>
              <Link to="/dashboard" className="btn btn-light btn-lg me-3">Get Started</Link>
              <Link to="/profile" className="btn btn-outline-light btn-lg">Create Profile</Link>
            </div>
            <div className="col-md-6">
              <img src="/api/placeholder/600/400" alt="Hero" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <select
                    className="form-select form-select-lg"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <button className="btn btn-primary btn-lg" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="container mt-5">
        <h2 className="mb-4">Featured Projects</h2>
        <div className="row">
          {featuredProjects.map(project => (
            <div key={project.id} className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h5">{project.title}</h3>
                  <span className="badge bg-primary mb-2">{project.category}</span>
                  <p className="card-text">{project.description}</p>
                  <p className="text-primary fw-bold">{project.budget}</p>
                  <div className="mb-3">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="badge bg-secondary me-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link to={`/project/${project.id}`} className="btn btn-outline-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mt-5 mb-5">
        <h2 className="mb-4">Browse Categories</h2>
        <div className="row">
          {categories.filter(cat => cat.id !== 'all').map(category => (
            <div key={category.id} className="col-md-4 mb-4">
              <div className="card text-center h-100">
                <div className="card-body">
                  <h3 className="card-title h5">{category.name}</h3>
                  <Link 
                    to={`/projects/${category.id}`}
                    className="btn btn-outline-primary mt-2"
                  >
                    Browse Projects
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;