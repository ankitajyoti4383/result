
import { useState } from "react";
import { Link } from 'react-router-dom';

import logo from "../assets/logo.png"; // Path to your logo image

import admin from "../assets/admin.png"; // Path to admin logo or profile icon

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <nav className="navbar">
      {/* Main Logo and Title */}
      <div className="navbar__logo">
        <img src={logo}  style={{ marginLeft: '20px' }} alt="Logo" className="navbar__logo-image" />
        <Link to="/" className="navbar__title" style={{ padding: '0px' }}>Result Management</Link>
      </div>

      {/* Navigation Links */}
      <ul className="navbar__links">
        <li><Link to="/">Darshboard</Link></li>
        
        <li><Link to="/AboutUs">AboutUs</Link></li>
        
        <li><Link to="/ContactUs">ContactUs</Link></li>
      </ul>

      {/* Admin Profile Icon */}
      <div className="navbar__admin" onClick={toggleDropdown}>
        <img src={admin} alt="Admin Logo" className="navbar__admin-logo" />
        {dropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/" className="dropdown-item">Profile</Link>
            <Link to="/" className="dropdown-item">Settings</Link>
            <Link to="/" className="dropdown-item">Logout</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;