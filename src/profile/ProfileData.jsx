import React from "react";
import "./profileData.css";
import admin from "./admin.jpg";

const ProfileData = () => {
  return (
    <div className="container">
      <div className="image">
        <img src={admin} />
        <div className="name">
          <p>Name:</p>
          <h1>Chola Kuboko</h1>
        </div>
        <div className="name">
          <p>Role:</p>
          <h1>Admin</h1>
        </div>
        <div className="name">
          <p>Email:</p>
          <h1>cholahkuboko@gmail.com</h1>
        </div>
        <div className="name">
          <p>Number:</p>
          <h1>0979054417</h1>
        </div>
        <div className="name">
          <p>Address:</p>
          <h1>9 miles, Lusaka</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
