import React from 'react'
import './profileData.css';
import admin from './admin.jpg';

const ProfileData = () => {
  return (
    <div className='container'>
      <div className='image'>
        <img src={admin}/>
        <h1>Chola Kuboko</h1>
        <p>Admin</p>
      </div>
    </div>
  )
}

export default ProfileData