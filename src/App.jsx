import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Pro from './profile/Pro';
import ProfileData from './profile/ProfileData';
import './App.css';

const App = () => {
  return (
    <>
          <Pro/>
      <div className="main">
        <Routes>
          <Route path="/profile/:id" element={<ProfileData />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
