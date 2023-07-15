import React from 'react';
import ProfileButton from './ProfileButton';

const App = () => {
  const profileData = {
    name: 'John Doe',
    bio: 'Software Developer',
  };

  return (
    <div>
      <h1>My App</h1>
      <ProfileButton profileData={profileData} />
    </div>
  );
};

export default App;
