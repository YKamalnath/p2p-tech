import React from 'react';
import "./AboutUShome.css";
import { FaRocket, FaUsers, FaChartLine, FaCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import teamPhoto from "../../assets/team-photo.jpeg"

function AboutUShome() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaRocket className="feature-icon" />,
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technologies to deliver future-proof digital solutions."
    },
    {
      icon: <FaUsers className="feature-icon" />,
      title: "Expert Team",
      description: "150+ certified professionals with diverse technical expertise."
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Proven Results",
      description: "Consistent track record of delivering measurable business impact."
    },
    {
      icon: <FaCode className="feature-icon" />,
      title: "Quality Code",
      description: "Clean, maintainable code following industry best practices."
    }
  ];

  return (
    <section className="about-home-section">
      <div className="about-home-container">
        <div className="about-home-content">
          <h2 className="section-subtitle">Who We Are</h2>
          <h1 className="section-title">Driving Digital Transformation</h1>
          <p className="about-text">
            We're a leading IT solutions provider helping businesses navigate the digital landscape since 2010. 
            Our team combines technical expertise with business acumen to deliver solutions that drive real results.
          </p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon-container">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          
          <button 
            className="learn-more-btn"
            onClick={() => navigate('/about')}
          >
            Learn More About Us
          </button>
        </div>
        
        <div className="about-image-container">
          <div className="image-placeholder">
            <img className='team-Photo' src={teamPhoto}></img>
            <div className="stats-overlay">
              <div className="stat-item-t">
                <span className="stat-number">13+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item-t">
                <span className="stat-number">500+</span>
                <span className="stat-label">Clients Worldwide</span>
              </div>
              <div className="stat-item-t">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Retention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUShome;
