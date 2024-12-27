// Profile.js
import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    title: "Full Stack Developer",
    bio: "Experienced developer with 5+ years in web and mobile development",
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "Python"],
    hourlyRate: 45,
    location: "New York, USA",
    languages: ["English", "Spanish"],
    availability: "Full-time"
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add API call to save profile
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {profile.name.charAt(0)}
        </div>
        <div className="profile-title">
          {isEditing ? (
            <input 
              type="text" 
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              className="edit-input"
            />
          ) : (
            <h1>{profile.name}</h1>
          )}
          <h2>{profile.title}</h2>
        </div>
        <button 
          className="edit-button"
          onClick={isEditing ? handleSave : handleEdit}
        >
          {isEditing ? 'Save Profile' : 'Edit Profile'}
        </button>
      </div>

      <div className="profile-grid">
        <div className="profile-section">
          <h3>About Me</h3>
          {isEditing ? (
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile({...profile, bio: e.target.value})}
              className="edit-input"
            />
          ) : (
            <p>{profile.bio}</p>
          )}
        </div>

        <div className="profile-section">
          <h3>Skills</h3>
          <div className="skills-container">
            {profile.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h3>Details</h3>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Hourly Rate:</span>
              <span className="detail-value">${profile.hourlyRate}/hr</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">{profile.location}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Languages:</span>
              <span className="detail-value">{profile.languages.join(', ')}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Availability:</span>
              <span className="detail-value">{profile.availability}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;