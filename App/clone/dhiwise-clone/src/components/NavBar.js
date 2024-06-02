// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/">DhiWise</Link>
      </div>
      <ul>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/resources-support">Resources & Support</Link></li>
        <li><Link to="/wisegpt">WiseGPT</Link></li>
        <li><Link to="/community">Join our community</Link></li>
        <li><Link to="/sign-in">Sign in</Link></li>
        <li><Link to="/sign-up" className="btn">Sign up for free</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
