import React, { useState } from 'react';

function Profile() {
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    interests: '',
    bio: ''
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile data:', profileData);
    // Add code for backend profile API call
  };

  return (
    <div className="profile">
      <h2>Create/Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <input type="text" name="interests" placeholder="Interests" onChange={handleChange} required />
        <textarea name="bio" placeholder="Bio" onChange={handleChange} required />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default Profile;
