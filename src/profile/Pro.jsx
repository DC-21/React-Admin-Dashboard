import { useState } from 'react';
import './Pros.css';

const Pro = ({ profileData }) => {
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
      <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="2em"
      width="2em"
    >
      <path d="M399 384.2c-22.1-38.4-63.6-64.2-111-64.2h-64c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zm-256 16c39.8 0 72-32.2 72-72s-32.2-72-72-72-72 32.2-72 72 32.2 72 72 72z" />
    </svg>
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

export default Pro;
