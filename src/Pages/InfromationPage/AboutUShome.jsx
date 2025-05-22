import React, { useEffect } from 'react';
import "./AboutUShome.css";
import { FaRocket, FaUsers, FaChartLine, FaCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function AboutUShome() {
  const navigate = useNavigate();

  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-element');
      elements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    };

    setTimeout(animateElements, 100);
  }, []);

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
          <h2 className="section-subtitle animate-element" style={{ transitionDelay: '0.1s' }}>Who We Are</h2>
          <h1 className="section-title animate-element" style={{ transitionDelay: '0.2s' }}>Driving Digital Transformation</h1>
          <p className="about-text animate-element" style={{ transitionDelay: '0.3s' }}>
            We're a leading IT solutions provider helping businesses navigate the digital landscape since 2010. 
            Our team combines technical expertise with business acumen to deliver solutions that drive real results.
          </p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                className="feature0-card animate-element" 
                key={index}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="feature-icon-container">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          
          <button 
            className="learn-more-btn animate-element"
           onClick={() => navigate('/About_US')}
            style={{ transitionDelay: '0.8s' }}
          >
            Learn More About Us
          </button>
        </div>
        
        <div className="stats-container animate-element" style={{ transitionDelay: '0.9s' }}>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">13+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Clients Worldwide</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUShome;