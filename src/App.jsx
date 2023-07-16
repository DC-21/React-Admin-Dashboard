import React from 'react';
import Pro from './profile/Pro';
import './App.css';

const App = () => {
  const profileData = {
    name: 'John DoE',
    bio: 'Software Developer',
    profilePic: '/home/dice/Desktop/Tok/src/profile/admin.jpg',
  };

  return (
    <div className="main">
      <Pro profileData={profileData} />
    </div>
  );
};

export default App;
