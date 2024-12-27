import React, { useState } from 'react';
import Navbar from './Navbar';

function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    hourlyRate: '',
    experience: ''
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Your Profile</h2>
        <form onSubmit={handleProfileUpdate}>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Hourly Rate"
            value={profile.hourlyRate}
            onChange={(e) => setProfile({ ...profile, hourlyRate: e.target.value })}
          />
          <textarea
            className="form-control mt-2"
            placeholder="Experience"
            value={profile.experience}
            onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
          />
          <button type="submit" className="btn btn-primary mt-2">Update Profile</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;