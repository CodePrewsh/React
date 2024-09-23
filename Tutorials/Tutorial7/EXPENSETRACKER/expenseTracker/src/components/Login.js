
import React from 'react';
import { auth, provider } from '../firebase'; // Import Firebase auth and provider
import { signInWithPopup } from "firebase/auth"; // Import signInWithPopup function from Firebase auth

function Login() {
  // Handler function to sign in with Google using a popup
  const handleLogin = async () => {
    try {
      // Use signInWithPopup to open a Google login popup
      await signInWithPopup(auth, provider);
    } catch (error) {
      // Log any errors that occur during sign-in
      console.error("Error logging in:", error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Button to trigger Google login */}
      <button onClick={handleLogin} style={buttonStyle}>
        Login with Google
      </button>
    </div>
  );
}

// Inline style for the login button
const buttonStyle = {
  padding: '10px 20px', // Button padding
  background: '#4285F4', // Google blue color
  color: 'white', // Button text color
  border: 'none', // Remove default border
  borderRadius: '4px', // Rounded corners
  cursor: 'pointer', // Pointer cursor on hover
  fontSize: '16px', // Font size for button text
};

export default Login;
