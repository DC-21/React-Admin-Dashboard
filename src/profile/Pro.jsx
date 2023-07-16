import React, { useState } from "react";
import "./Pros.css";
import ProfileData from "./ProfileData";

const Pro = () => {
  const [showProfileData, setShowProfileData] = useState(false);

  const handleMouseEnter = () => {
    setShowProfileData(true);
  };

  const handleMouseLeave = () => {
    setShowProfileData(false);
  };

  return (
    <div className="main">
      <div
        className="profile-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="2em"
          width="2em"
          className="profile-icon"
        >
          <path d="M12 2A10.13 10.13 0 002 12a10 10 0 004 7.92V20h.1a9.7 9.7 0 0011.8 0h.1v-.08A10 10 0 0022 12 10.13 10.13 0 0012 2zM8.07 18.93A3 3 0 0111 16.57h2a3 3 0 012.93 2.36 7.75 7.75 0 01-7.86 0zm9.54-1.29A5 5 0 0013 14.57h-2a5 5 0 00-4.61 3.07A8 8 0 014 12a8.1 8.1 0 018-8 8.1 8.1 0 018 8 8 8 0 01-2.39 5.64z" />
          <path d="M12 6a3.91 3.91 0 00-4 4 3.91 3.91 0 004 4 3.91 3.91 0 004-4 3.91 3.91 0 00-4-4zm0 6a1.91 1.91 0 01-2-2 1.91 1.91 0 012-2 1.91 1.91 0 012 2 1.91 1.91 0 01-2 2z" />
        </svg>
        {showProfileData && <ProfileData />}
      </div>
    </div>
  );
};

export default Pro;
