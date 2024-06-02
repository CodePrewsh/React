// src/App.js
import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/SignUp';
import SignIn from './pages/SignIn';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
