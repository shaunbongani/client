import React, { useState } from 'react';
import axios from 'axios';

const JobPosting = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [requirements, setRequirements] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/jobs', {
        title,
        description,
        location,
        salary,
        requirements: requirements.split(','),
      });
      console.log('Job posted:', response.data);
    } catch (error) {
      console.error('There was an error posting the job!', error);
    }
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Job Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Job Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Salary:</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label>Requirements (comma separated):</label>
        <input
          type="text"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobPosting;