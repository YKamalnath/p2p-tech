import React, { useState, useEffect } from 'react';
import { FiServer, FiCode, FiCloud, FiDatabase, FiShield, FiSmartphone, FiArrowRight, FiArrowLeft, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './ourService.css';

const ITExplorePage = () => {
  const [activeService, setActiveService] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: '',
    time: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    {
      icon: <FiServer className="it-service-icon" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions tailored to your business needs with 99.9% uptime guarantee.",
      color: "var(--it-blue)"
    },
    {
      icon: <FiCode className="it-service-icon" />,
      title: "Custom Software",
      description: "Bespoke software development to streamline your operations and boost productivity.",
      color: "var(--it-purple)"
    },
    {
      icon: <FiDatabase className="it-service-icon" />,
      title: "Data Solutions",
      description: "Advanced data management, analytics, and business intelligence services.",
      color: "var(--it-green)"
    },
    {
      icon: <FiShield className="it-service-icon" />,
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      color: "var(--it-red)"
    },
    {
      icon: <FiSmartphone className="it-service-icon" />,
      title: "Mobile Solutions",
      description: "Cross-platform mobile applications with elegant UI and robust functionality.",
      color: "var(--it-orange)"
    },
    {
      icon: <FiCloud className="it-service-icon" />,
      title: "DevOps Services",
      description: "Continuous integration and delivery pipelines for faster, reliable deployments.",
      color: "var(--it-teal)"
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveService((prev) => (prev + 1) % services.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleBookingClick = () => {
    setShowBookingModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowBookingModal(false);
    document.body.style.overflow = 'auto';
    if (submitSuccess) {
      setFormData({
        name: '',
        email: '',
        message: '',
        date: '',
        time: ''
      });
      setSubmitSuccess(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (!formData.date) errors.date = 'Date is required';
    if (!formData.time) errors.time = 'Time is required';
    return errors;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const errors = validateForm();
  //   setFormErrors(errors);
    
  //   if (Object.keys(errors).length === 0) {
  //     setIsSubmitting(true);
  //     // Simulate API call
  //     setTimeout(() => {
  //       setIsSubmitting(false);
  //       setSubmitSuccess(true);
  //     }, 1500);
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const errors = validateForm();
  setFormErrors(errors);
  
  if (Object.keys(errors).length === 0) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 200) {
        setSubmitSuccess(true);
      } else {
        alert('Error sending request. Please try again later.');
      }
    } catch (error) {
      alert('Error sending request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }
};

  return (
    <div className="it-explore-container">
      <div className="it-explore-header">
        <motion.h2 
          className="it-section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our IT Services
        </motion.h2>
        <motion.p 
          className="it-section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Cutting-edge solutions to power your digital transformation
        </motion.p>
      </div>

      <div className="it-service-carousel-wrapper">
        <button className="it-carousel-nav it-carousel-prev" onClick={prevService}>
          <FiArrowLeft />
        </button>
        
        <div className="it-service-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              className="it-service-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundColor: services[activeService].color }}
            >
              <div className="it-service-icon-wrapper">
                {services[activeService].icon}
              </div>
              <h3 className="it-service-title">{services[activeService].title}</h3>
              <p className="it-service-desc">{services[activeService].description}</p>
              <motion.button 
                className="it-service-learn-more"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="it-carousel-nav it-carousel-next" onClick={nextService}>
          <FiArrowRight />
        </button>
      </div>

      <div className="it-service-indicators">
        {services.map((_, index) => (
          <button
            key={index}
            className={`it-service-indicator ${index === activeService ? 'active' : ''}`}
            onClick={() => {
              setActiveService(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
          />
        ))}
      </div>

      <motion.div 
        className="it-booking-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="it-cta-title">Ready to Transform Your IT Infrastructure?</h3>
        <motion.button 
          className="it-booking-button"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBookingClick}
        >
          Book a Consultation
        </motion.button>
      </motion.div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div 
            className="it-booking-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <motion.div 
              className="it-booking-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button className="it-modal-close" onClick={closeModal}>
                <FiX />
              </button>
              
              {!submitSuccess ? (
                <>
                  <h3 className="it-modal-title">Schedule a Consultation</h3>
                  <p className="it-modal-subtitle">Fill out the form and we'll get back to you shortly</p>
                  
                  <form onSubmit={handleSubmit} className="it-booking-form">
                    <div className="it-form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={formErrors.name ? 'error' : ''}
                      />
                      {formErrors.name && <span className="it-error-message">{formErrors.name}</span>}
                    </div>
                    
                    <div className="it-form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={formErrors.email ? 'error' : ''}
                      />
                      {formErrors.email && <span className="it-error-message">{formErrors.email}</span>}
                    </div>
                    
                    <div className="it-form-group">
                      <label htmlFor="message">How can we help you?</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className={formErrors.message ? 'error' : ''}
                      />
                      {formErrors.message && <span className="it-error-message">{formErrors.message}</span>}
                    </div>
                    
                    <div className="it-form-row">
                      <div className="it-form-group">
                        <label htmlFor="date">Preferred Date</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className={formErrors.date ? 'error' : ''}
                          min={new Date().toISOString().split('T')[0]}
                        />
                        {formErrors.date && <span className="it-error-message">{formErrors.date}</span>}
                      </div>
                      
                      <div className="it-form-group">
                        <label htmlFor="time">Preferred Time</label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className={formErrors.time ? 'error' : ''}
                        />
                        {formErrors.time && <span className="it-error-message">{formErrors.time}</span>}
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="it-form-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="it-success-message">
                  <div className="it-success-icon">✓</div>
                  <h3 className="it-success-title">Thank You!</h3>
                  <p className="it-success-text">Your consultation request has been submitted successfully.</p>
                  <p className="it-success-text">We'll contact you shortly to confirm your appointment.</p>
                  <button 
                    className="it-success-button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ITExplorePage;