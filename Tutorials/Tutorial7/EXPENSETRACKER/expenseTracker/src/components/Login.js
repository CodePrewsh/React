// src/components/Login.js
import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";

function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={handleLogin} style={buttonStyle}>
        Login with Google
      </button>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  background: '#4285F4',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Login;
