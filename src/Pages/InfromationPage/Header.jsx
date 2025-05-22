import "./Header.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaMobileAlt, FaServer, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Landing = () => { 
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { icon: <FaCode size={32} />, name: "Web Development" },
    { icon: <FaMobileAlt size={32} />, name: "Mobile Apps" },
    { icon: <FaServer size={32} />, name: "Backend Solutions" },
    { icon: <FaCloud size={32} />, name: "Cloud Services" }
  ];

  return (
    <div className="modern-background">
      <div className="main-containerh">
        <div className="content-container">
          <motion.h1 
            className="main-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            High Quality Software <span className="highlight">Development</span>
          </motion.h1>

          <motion.div
            className="button-group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <button 
              className="explore-btn" 
              onClick={() => navigate('/our_Service')}
            >
              Explore Our Services <FiArrowRight className="btn-icon" />
            </button>
            <button 
              className="meet-the-team-btn" 
              onClick={() => navigate('/About_Us')}
            >
              Meet the Team <FiArrowRight className="btn-icon" />
            </button>
          </motion.div>

          <motion.div 
            className="text-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="description">
              Welcome to our software development company, where we turn ideas into powerful digital solutions. 
              Our expert team builds modern web and mobile applications tailored to your business needs. 
              Whether you're a startup or an enterprise, we deliver scalable, efficient, and secure tech that drives success.
            </p>
          </motion.div>
          
          <motion.div 
            className="services0-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service0-card ${hoveredService === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.name}</h3>
                <motion.div
                  className="underline"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredService === index ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;