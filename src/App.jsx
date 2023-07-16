import React from 'react';
import Pro from './profile/Pro';
const App = () => {
  const profileData = {
    name: 'John Doe',
    bio: 'Software Developer',
  };

  return (
    <div className='main'>
      <Pro profileData={profileData} />
    </div>
  );
};

export default App;
