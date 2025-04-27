import React from 'react';
import "./WhyChooseUs.css";
import { 
  FaAward, 
  FaUsers, 
  FaLightbulb, 
  FaClock, 
  FaHandshake, 
  FaChartBar,
  FaArrowRight
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function WhyChooseUs() {
  const navigate = useNavigate();

  const reasons = [
    {
      icon: <FaAward className="reason-icon" />,
      title: "Award-Winning Quality",
      description: "Recognized industry leader with multiple awards for excellence in digital solutions and customer satisfaction."
    },
    {
      icon: <FaUsers className="reason-icon" />,
      title: "Client-Centric Approach",
      description: "We put your needs first, with customized solutions and dedicated support throughout our partnership."
    },
    {
      icon: <FaLightbulb className="reason-icon" />,
      title: "Innovative Solutions",
      description: "Cutting-edge technologies and creative problem-solving to give you a competitive advantage."
    },
    {
      icon: <FaClock className="reason-icon" />,
      title: "On-Time Delivery",
      description: "We respect your time with 95% of projects delivered on or before deadline."
    },
    {
      icon: <FaHandshake className="reason-icon" />,
      title: "Trusted Partnership",
      description: "Long-term relationships with 80% of clients returning for additional services."
    },
    {
      icon: <FaChartBar className="reason-icon" />,
      title: "Proven Results",
      description: "Data-driven strategies that deliver measurable improvements to your business metrics."
    }
  ];

  return (
    <div className="choose-us-container">
      <div className="choose-us-header">
        <h1>Why Choose Us</h1>
        <p className="choose-us-subtitle">The trusted partner for businesses looking to thrive in the digital world</p>
      </div>
      
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div className="reason-card" key={index}>
            <div className="reason-icon-container">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
      
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-number">10+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">500+</div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">98%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
      </div>
      
      {/* <button className="contact-us-btn" onClick={() => navigate('/contact')}>
        Get In Touch <FaArrowRight className="btn-icon" />
      </button> */}
    </div>
  );
}

export default WhyChooseUs;
