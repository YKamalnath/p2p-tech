
import React, { useState } from "react";
import "./Footer.css";
import footerLogo from "../../../assets/p2p-02-removebg-preview.png";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube, 
  FaTwitter 
} from "react-icons/fa"


const Footer = () => {
  const scrollToSection = (id) => {
    
    const element = document.getElementById(id);
    if (element) {
      
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer>
      <div class="footer-container">
        <section class="footer-about">
        <a href="/" className="logo-link">
          <img  className="company-icon" src={footerLogo} alt="company-icon"  />
          </a>
          <p>
          Empowering businesses through innovative technology solutions and expert IT consulting tailored to drive digital transformation and growth.
          </p>
          <div className="contact-social-container">
            <section class="footer-social">
              <h6>Follow Us</h6>
               <ul className="contact-social-media-container">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="contact-social-media" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="contact-social-media" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="contact-social-media" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="contact-social-media" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="contact-social-media" />
                </a>
              </ul>
            </section>
          </div>
        </section>
        <section class="footer-links">
          <h6>P2P Tech</h6>
          <ul>
            <li>
              <a href="/">| Home</a>
            </li>
            
          </ul>
        </section>

        <section class="footer-links">
          <h6>How it Works</h6>
          <ul>
            <li>
            <a href="/our_Service">| Our Services</a>
            </li>
            
            
          </ul>
        </section>

        

        <section class="footer-links">
          <h6>Our Mission</h6>
          <ul>
            <li>
            
            <a href="/About_Us">| About Us</a>
            </li>
            
          </ul>
        </section>
      </div>
      <hr class="centered-hr"></hr>
      <div class="footer-bottom">
        <div>P2P Tech © 2025. All Rights Reserved.</div>
        <div>
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
          <div>Terms & Conditions</div>
          <div>Accessibility Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;