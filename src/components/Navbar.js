import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import "./Navbar.css";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Code Singularity AI" />
          <span className="logo-text">Code Singularity AI Pvt. Ltd</span>
        </div>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Solutions</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </div>

        <div className="auth-buttons">
          <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>
          <button className="signup-btn" onClick={() => setShowSignup(true)}>Sign Up</button>
        </div>
      </nav>

      {showLogin && <LoginModal closeModal={() => setShowLogin(false)} />}
      {showSignup && <SignupModal closeModal={() => setShowSignup(false)} />}
    </>
  );
}

export default Navbar;
