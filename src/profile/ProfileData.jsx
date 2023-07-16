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
        <p>cholahkuboko@gmail.com</p>
        <p>0979054417</p>
        <p>9 miles, Lusaka</p>
      </div>
    </div>
  )
}

export default ProfileData