// src/components/Employer/EmployerProfile.js
import React, { useState } from 'react';
import axios from 'axios';

const EmployerProfile = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/employers', {
        companyName,
        companyDescription,
      });
      console.log('Employer profile created:', response.data);
    } catch (error) {
      console.error('There was an error creating the employer profile!', error);
    }
  };

  return (
    <div>
      <h2>Employer Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Company Name:</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label>Company Description:</label>
        <textarea
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EmployerProfile;