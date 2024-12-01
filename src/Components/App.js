import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployerProfile from './components/Employer/EmployerProfile';
import EmployeeProfile from './components/Employee/EmployeeProfile';
import JobSearch from './components/Employee/JobSearch';
import JobPosting from './components/Employer/JobPosting';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Job Platform</h1>
        <Switch>
          <Route path="/employer-profile" component={EmployerProfile} />
          <Route path="/employee-profile" component={EmployeeProfile} />
          <Route path="/job-search" component={JobSearch} />
          <Route path="/job-posting" component={JobPosting} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;