import React, { useState } from 'react';
import './addProfile.css';

function AddProfile() {
  const [profile, setProfile] = useState({
    name: '',
    experience: '',
    packages: '',
    works: ''
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3002/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    });

    if (response.ok) {
      alert('Profile added successfully!');
      setProfile({ name: '', experience: '', packages: '', works: '' });
    } else {
      alert('Failed to add profile');
    }
  };

  return (
    <div className='add-profile'>
      
      <form onSubmit={handleSubmit}>
      <h1>Add Beautician Profile</h1>
        <label>
          Name:<br/>
          <input type="text" name="name" value={profile.name} onChange={handleChange} required />
        </label>
        <label>
          Experience:<br/>
          <input type="text" name="experience" value={profile.experience} onChange={handleChange} required />
        </label>
        <label>
          Packages:<br />
          <select name="packages" value={profile.packages} onChange={handleChange} required>
            <option value="Hair Cutting">Hair Cutting</option>
            <option value="Nail Art">Nail Art</option>
            <option value="Manicure">Manicure</option>
            <option value="Facial">Facial</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Eyebrow Shape">Eyebrow Shape</option>
            <option value="Hair Coloring">Hair Coloring</option>
            <option value="Normal Makeup">Normal Makeup</option>
            <option value="Bridal Makeup">Bridal Makeup</option>
            <option value="Hair Style">Hair Style</option>
            <option value="Saree Draping">Saree Draping</option>
            <option value="Nail Exhancements">Nail Exhancements</option>
          </select>
        </label>
     
        <label>
          Works:<br/>
          <input type="text" name="works" value={profile.works} onChange={handleChange} required />
        </label>
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
}

export default AddProfile;
