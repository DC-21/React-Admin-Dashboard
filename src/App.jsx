import React from 'react';
import Pro from './profile/Pro';

const App = () => {
  const profileData = {
    name: 'John Doe',
    bio: 'Software Developer',
  };

  return (
    <div>
      <h1>My App</h1>
      <Pro profileData={profileData} />
    </div>
  );
};

export default App;
