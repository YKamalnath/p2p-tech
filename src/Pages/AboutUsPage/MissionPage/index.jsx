import React from 'react';
import { FiTarget, FiGlobe, FiUsers, FiCode, FiTrendingUp } from 'react-icons/fi';
import { FaLightbulb, FaHandshake, FaRobot } from 'react-icons/fa';
import "./MissionPage.css";
import { useNavigate } from 'react-router-dom';

function MissionPage() {
  const navigate = useNavigate();
  return (
    <div className="mission-page">
      {/* Hero Section */}
      <section className="mission-hero">
        <div className="hero-content">
          <h1>Our Mission & Vision</h1>
          <p className="hero-subtitle">Driving digital transformation through innovation</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-statement">
        <div className="container">
          <div className="statement-card">
            <FiTarget className="mission-icon" />
            <h2>Our Mission</h2>
            <p>
              To empower businesses with cutting-edge technology solutions that drive growth, 
              enhance efficiency, and create meaningful digital experiences. We bridge the gap 
              between innovative ideas and technological execution.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <div className="grid-cards">
            <div className="feature-card">
              <FiUsers className="feature-icon-e" />
              <h3>Tech Visionaries</h3>
              <p>A team of passionate engineers, designers, and strategists committed to pushing technological boundaries.</p>
            </div>
            
            <div className="feature-card">
              <FaLightbulb className="feature-icon-e" />
              <h3>Innovation Driven</h3>
              <p>We thrive on solving complex problems with elegant, future-proof solutions.</p>
            </div>
            
            <div className="feature-card">
              <FiGlobe className="feature-icon-e" />
              <h3>Global Perspective</h3>
              <p>With clients across continents, we bring diverse insights to every project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="driving-forces">
        <div className="container">
          <h2 className="section-title">What Drives Us</h2>
          <div className="drivers-grid">
            <div className="driver-item">
              <div className="driver-icon-container">
                <FiCode className="driver-icon" />
              </div>
              <h3>Technical Excellence</h3>
              <p>We maintain the highest standards in code quality, architecture, and performance.</p>
            </div>
            
            <div className="driver-item">
              <div className="driver-icon-container">
                <FaHandshake className="driver-icon" />
              </div>
              <h3>Client Success</h3>
              <p>Your growth is our success. We measure our performance by your business outcomes.</p>
            </div>
            
            <div className="driver-item">
              <div className="driver-icon-container">
                <FaRobot className="driver-icon" />
              </div>
              <h3>Future Focus</h3>
              <p>We stay ahead of the curve with AI, machine learning, and emerging technologies.</p>
            </div>
            
            <div className="driver-item">
              <div className="driver-icon-container">
                <FiTrendingUp className="driver-icon" />
              </div>
              <h3>Sustainable Growth</h3>
              <p>We build solutions that scale with your business and adapt to changing needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mission-cta">
        <div className="container">
          <h2>Ready to transform your business with technology?</h2>
          <button 
          className="cta-button"
          onClick={() => navigate('/')}
          >Get in Touch</button>
        </div>
      </section>
    </div>
  );
}

export default MissionPage;
