// src/pages/Profile.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      {currentUser ? (
        <p>Email: {currentUser.email}</p>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default Profile;