import React from 'react';
import './AboutUsPage.css';
import logo from "../../assets/p2p-02-removebg-preview.png"
import logo2 from "../../assets/Images/logo-p2p.png"

function AboutUsPage() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About P2P Tech</h1>
        <p>Innovating the future, one line of code at a time.</p>
      </header>

      <section className="about-section">
        <div className="about-image">
          <img src={logo} alt="Team working at P2P Tech" />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            P2P Tech is a cutting-edge IT company focused on delivering innovative digital solutions.
            From startups to enterprises, we help businesses grow through powerful software development,
            cloud services, and custom tech strategies.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            To empower businesses with technology that transforms. We blend creativity, technical expertise,
            and a user-first approach to build scalable, impactful solutions that make a difference.
          </p>
        </div>
        <div className="mission-image">
          <img src={logo2} alt="P2P Tech mission" />
        </div>
      </section>

      <footer className="about-footer">
        <p>© {new Date().getFullYear()} P2P Tech. Trusted IT Solutions for Modern Businesses.</p>
      </footer>
    </div>
  );
}

export default AboutUsPage;

