import React, { useState } from 'react';
import './ProfileButton.css';

const ProfileButton = ({ profileData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="profile-button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="profile-icon">
        <i className="fas fa-user"></i>
      </div>
      {isHovered && (
        <div className="profile-popup">
          <h3>{profileData.name}</h3>
          <p>{profileData.bio}</p>
          {/* Add more profile information */}
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
