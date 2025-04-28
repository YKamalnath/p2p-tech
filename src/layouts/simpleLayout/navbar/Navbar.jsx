import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import Logo from "../../../assets/Images/logo-p2p.png";
import ArrowDownIcon from "../../../assets/arrow-down-sign-to-navigate.png";
// Importing icons from react-icons
import { 
  FaQuestionCircle, 
  FaLightbulb, 
  FaBook, 
  FaTools,
  FaInfoCircle,
  FaNewspaper,
  FaUserFriends,
  FaBalanceScale,
  FaRocket,
  FaChartLine
} from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="main-nav">
        <div className="main-nav-container">
          <h1 className="main-nav-brand">
            <Link to="/">
              <img className='nav-logo' src={Logo} alt="Company Logo" />
            </Link>
          </h1>
          
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            ☰
          </button>
          
          <div className={`main-nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/our_Service">Our Services</Link>
            
            <div className="dropdown-container">
              <button 
                className="dropdown-toggle" 
                onClick={toggleResources}
                aria-expanded={isResourcesOpen}
              >
                Resources
                {/* <span className={`dropdown-arrow ${isResourcesOpen ? 'open' : ''}`}>▼</span> */}
                <img 
                src={ArrowDownIcon} 
                alt="Dropdown arrow" 
                className={`dropdown-arrow ${isResourcesOpen ? 'open' : ''}`} 
              />

              </button>
              
            </div>
            
            <Link to="/About_US">About US</Link>
            {/* <Link to="/FAQ">FAQ</Link> */}
          </div>
        </div>
      </nav>

      {/* Only show secondary nav when not in mobile view */}
      {!isMobileMenuOpen && (
        <nav className={`secondary-nav ${isResourcesOpen ? 'open' : ''}`}>
          <div className="secondary-nav-sections">
            <div className="secondary-nav-section">
              <h2 className="section-title">References</h2>
              <ul className="section-links">
                <li><Link to="/FAQ">
                <FaQuestionCircle className="link-icon" />
                FAQ
                </Link>
                <span>The latest industry news, updates, interesting articles and info.</span></li>
                <li><Link to="/#what-we-do">
                <FaLightbulb className="link-icon" />
                what we do</Link><span>Learn how our customers are making big changes to their tech stack.</span></li>
                <li><Link to="/#why-choose-us">
                <FaBook className="link-icon" />
                why choose us</Link><span>Get up and running on new features and techniques with our tutorials.</span></li>
                <li><Link to="/our_Service">
                <FaTools className="link-icon" /> 
                Services</Link><span>All the boring stuff that you (hopefully won't) need, written by our team.</span></li>
              </ul>
            </div>

            <div className="secondary-nav-section">
              <h2 className="section-title">Summary</h2>
              <ul className="section-links">
                <li><Link to="/About_Us">
                <FaInfoCircle className="link-icon" />
                About us</Link><span>Learn about our story, our mission statement, and our roadmap.</span></li>
                <li><Link to="/">
                <FaUserFriends className="link-icon" /> 
                join community</Link><span>News and writings, press releases, and press resources.</span></li>
                <li><Link to="/our_Service">
                <FaRocket className="link-icon" /> 
                Careers (We're hiring)</Link><span>We're always looking for talented people. Join our team!</span></li>
                <li><Link to="/About_Us">
                <FaBalanceScale className="link-icon" />
                Legal</Link><span>All the boring stuff that Dan from legal made us add to the site.</span></li>
              </ul>
            </div>

            <div className="secondary-nav-notice">
              <p>We've just released an update!</p>
              <Link to="/About_Us">Learn about our new analytics dashboard.</Link>
            </div>

            <div className="secondary-nav-version">
              Version 8.2
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;