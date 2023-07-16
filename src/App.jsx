import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Pro from './profile/Pro';
import ProfileData from './profile/ProfileData';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="main">
        <Route path="/" element={<Pro profileData={ProfileData} />} />
        <Routes>
          <Route path="/profile/:id" element={<ProfileData />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
