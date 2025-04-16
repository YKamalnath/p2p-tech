
import React, { useState } from "react";
import "./Footer.css";
import footerLogo from "../../../assets/p2p-02-removebg-preview.png";
import facebookIcon from "../../../assets/Images/facebookIcon.svg";
import linkdinIcon from "../../../assets/Images/linkdinIcon.svg";
import instaIcon from "../../../assets/Images/instaIcon.svg";
import youtubeIcon from "../../../assets/Images/youtubeIcon.svg";
import twiterIcon from "../../../assets/Images/twiterIcon.svg";


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
          <img className="company-icon" src={footerLogo} alt="company-icon" />
          <p>
          Empowering businesses through innovative technology solutions and expert IT consulting tailored to drive digital transformation and growth.
          </p>
          <div className="contact-social-container">
            <section class="footer-social">
              <h6>Follow Us</h6>
              <ul className="contact-social-media-container">
                <a href="" target="_blank">
                  <img className="contact-social-media" src={facebookIcon} />
                </a>
                <a href="" target="_blank">
                  <img className="contact-social-media" src={linkdinIcon} />
                </a>
                <a href="" target="_blank">
                  <img className="contact-social-media" src={instaIcon} />
                </a>
                <a target="_blank">
                  <img className="contact-social-media" src={youtubeIcon} />
                </a>
                <a target="_blank">
                  <img className="contact-social-media" src={twiterIcon} />
                </a>
              </ul>
            </section>
          </div>
        </section>
        <section class="footer-links">
          <h6>P2P Tech</h6>
          <ul>
            <li>
              <a href="/ourServices">Our Services</a>
            </li>
            <li>
              <a href="/ourServices">Solutions</a>
            </li>
            <li>
              <a href="/ourServices">About Us</a>
            </li>
            <li>
              <a href="/aboutus">Careers</a>
            </li>
            <li>
              <a href="/questions">Support</a>
            </li>
          </ul>
        </section>

        <section class="footer-links">
          <h6>Our Services</h6>
          <ul>
            <li>
              <a href="/ourServices">Software Development</a>
            </li>
            <li>
              <a href="/ourServices">Cloud Computing</a>
            </li>
            <li><a href="/services">Cybersecurity</a></li>
            
            <li>
              <a href="/ourServices">
              Resources
              </a>
            </li>
            
          </ul>
        </section>

        {/* <section class="footer-links learnig-hub-footer-column">
          <h6>Services</h6>
          <ul>
            <li>
              <a href="/ourServices">Tech Blog</a>
            </li>
            <li>
              <a href="/ourServices">Case Studies</a>
            </li>
            <li>
              <a href="/ourServices">E-books</a>
            </li>
          </ul>
        </section> */}

        <section class="footer-links">
          <h6>Help</h6>
          <ul>
            <li>
              <a href="/questions">FAQs</a>
            </li>
            <li>
              <a href="/contactForm">Contact Form</a>
            </li>
            <li>
              <a href="/provideFeedback">Feedback</a>
            </li>
          </ul>
        </section>
      </div>
      <hr class="centered-hr"></hr>
      <div class="footer-bottom">
        <div>P2P Tech Solutions © 2025. All Rights Reserved.</div>
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