import React from 'react';
import Pro from './profile/Pro';
import './App.css';

const App = () => {
  const profileData = {
    name: 'John Doe',
    bio: 'Software Developer',
  };

  return (
    <div className='main'>
      <h1>My App</h1>
      <Pro profileData={profileData} />
    </div>
  );
};

export default App;
