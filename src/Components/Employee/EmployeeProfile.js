import React, { useState } from 'react';
import axios from 'axios';

const EmployeeProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/employees', {
        name,
        email,
        skills: skills.split(','),
        experience,
      });
      console.log('Employee profile created:', response.data);
    } catch (error) {
      console.error('There was an error creating the employee profile!', error);
    }
  };

  return (
    <div>
      <h2>Employee Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Skills (comma separated):</label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <label>Experience:</label>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EmployeeProfile;