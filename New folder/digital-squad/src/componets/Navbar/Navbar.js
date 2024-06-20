import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Program</li>
        <li className="navbar-item">About Us</li>
        <li className="navbar-item">Campus</li>
        <li className="navbar-item">Testimonials</li>
        <li className="navbar-item">Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
