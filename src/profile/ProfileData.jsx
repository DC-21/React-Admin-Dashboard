import React from "react";
import "./profileData.css";
import admin from "./admin.jpg";

const ProfileData = () => {
  return (
    <div className="container">
      <div className="image">
        <img src={admin} />
        <div className="name">
          <p>Name</p>
          <p>Chola Kuboko</p>
        </div>
        <p>
          <span></span>Admin
        </p>
        <p>
          <span></span>cholahkuboko@gmail.com
        </p>
        <p>
          <span></span>0979054417
        </p>
        <p>
          <span></span>9 miles, Lusaka
        </p>
      </div>
    </div>
  );
};

export default ProfileData;
