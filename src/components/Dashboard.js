// Dashboard.js
import React, { useState } from 'react';
import { Chart, DollarSign, Users, Briefcase } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeProjects, setActiveProjects] = useState([
    {
      id: 1,
      title: "E-commerce Website",
      progress: 70,
      deadline: "2024-01-15",
      earned: 2500,
      status: "in-progress"
    },
    {
      id: 2,
      title: "Mobile App Design",
      progress: 30,
      deadline: "2024-02-01",
      earned: 1000,
      status: "in-progress"
    }
  ]);

  const stats = {
    totalEarnings: 3500,
    activeProjects: 2,
    completedProjects: 5,
    clientRating: 4.8
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="stats-grid">
        <div className="stat-card">
          <DollarSign className="stat-icon" />
          <div className="stat-info">
            <h3>Total Earnings</h3>
            <p>${stats.totalEarnings}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <Briefcase className="stat-icon" />
          <div className="stat-info">
            <h3>Active Projects</h3>
            <p>{stats.activeProjects}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <Chart className="stat-icon" />
          <div className="stat-info">
            <h3>Completed</h3>
            <p>{stats.completedProjects}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <Users className="stat-icon" />
          <div className="stat-info">
            <h3>Client Rating</h3>
            <p>{stats.clientRating}/5</p>
          </div>
        </div>
      </div>

      {/* Active Projects */}
      <section className="active-projects">
        <h2>Active Projects</h2>
        <div className="projects-list">
          {activeProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`status-badge ${project.status}`}>
                  {project.status}
                </span>
              </div>
              
              <div className="progress-section">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <span>{project.progress}%</span>
              </div>
              
              <div className="project-footer">
                <div className="deadline">
                  Deadline: {new Date(project.deadline).toLocaleDateString()}
                </div>
                <div className="earning">
                  Earned: ${project.earned}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;