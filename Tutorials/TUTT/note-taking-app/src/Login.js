import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle, signInWithEmail, signUpWithEmail } from './authService';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/notes');
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUpWithEmail(email, password);
      } else {
        await signInWithEmail(email, password);
      }
      navigate('/notes');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">{isSignUp ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email"
          className="note-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="note-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="button">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <button className="button" onClick={handleGoogleLogin}>
        Login with Google
      </button>
      <button className="button" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
      </button>
    </div>
  );
};

export default Login;
