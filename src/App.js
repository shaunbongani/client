import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployerProfile from '.\\components\Employer\EmployerProfile';
import EmployeeProfile from '.\\components\Employee\EmployeeProfile';
import JobSearch from '.\\components\Employee\JobSearch';
import JobPosting from '.\\components\Employer\JobPosting';
import '.\\styles\\styles.css'; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <div>
        <h1>Job Platform</h1>
        <Routes>
          <Route path="\employer-profile" element={<EmployerProfile />} />
          <Route path="\employee-profile" element={<EmployeeProfile />} />
          <Route path="\job-search" element={<JobSearch />} />
          <Route path="\job-posting" element={<JobPosting />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;