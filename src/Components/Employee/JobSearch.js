import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the jobs!', error);
      });
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>{job.title} at {job.companyName}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobSearch;