// import React, { useState } from 'react';
// import './ourService.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css/navigation';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// import img01 from "../../assets/OurService/image-12.jpg";
// import img02 from "../../assets/OurService/image-13.jpg";
// import img03 from "../../assets/OurService/image-14.jpg";
// import img04 from "../../assets/OurService/image-16.jpg";
// import img05 from "../../assets/OurService/image-17.jpg";

// function OurService() {
//   const [showForm, setShowForm] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     if (params.get("openBooking") === "true") {
//       openForm();
//     }
//   }, [location.search]);

//   const services = [
//     {
//       id: 1,
//       title: 'Web Development',
//       description: 'Professional websites and apps tailored to your business needs.',
//       benefits: ['Responsive design', 'SEO optimized', 'Scalable architecture'],
//       // icon: '🌐',
//       image: img01,
//     },
//     {
//       id: 2,
//       title: 'Cloud Solutions',
//       description: 'Deploy, scale, and manage your apps with our cloud expertise.',
//       benefits: ['AWS, Azure, GCP support', 'Cost-effective', 'Secure deployments'],
//       // icon: '☁️',
//       image: img02,
//     },
//     {
//       id: 3,
//       title: 'Cybersecurity',
//       description: 'Protect your data and infrastructure with robust security measures.',
//       benefits: ['Vulnerability testing', 'Real-time monitoring', 'Data encryption'],
//       // icon: '🛡️',
//       image: img03,
//     },
//     {
//       id: 4,
//       title: 'AI & Automation',
//       description: 'Automate tasks, analyze data, and build intelligent solutions.',
//       benefits: ['Chatbots', 'Data analysis', 'Custom ML models'],
//       // icon: '🤖',
//       image: img04,
//     },
//     {
//       id: 5,
//       title: 'IT Consulting',
//       description: 'Get expert advice to improve your digital strategy and tech stack.',
//       benefits: ['Tailored plans', 'Hands-on guidance', 'Ongoing support'],
//       // icon: '📊',
//       image: img05,
//     },
//   ];

//   const openForm = () => {
//     setIsSubmitted(false);
//     setShowForm(true);
//     document.body.style.overflow = 'hidden';
//     setTimeout(() => {
//       const el = document.getElementById("booking-form");
//       if (el) el.scrollIntoView({ behavior: "smooth" });
//     }, 300);
//   };

//   const closeForm = () => {
//     setIsClosing(true);
//     document.body.style.overflow = 'auto';
//     setTimeout(() => {
//       setShowForm(false);
//       setIsClosing(false);
//     }, 300);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, message, date, time } = e.target.elements;

//     try {
//       const response = await fetch('http://localhost:5000/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: name.value,
//           email: email.value,
//           message: message.value,
//           date: date.value,
//           time: time.value,
//         }),
//       });

//       const data = await response.json();
//       if (response.status === 200) {
//         setIsSubmitted(true);
//         setTimeout(() => {
//           closeForm();
//         }, 2000);
//       } else {
//         alert('Error sending request. Please try again later.');
//       }
//     } catch (error) {
//       alert('Error sending request. Please try again later.');
//     }
//   };

//   return (
//     <div className="services-container-2">
//       <div className='title-intro'>
//         <h1 className="title">Our IT Services</h1>
//         <p className="intro">Explore the digital solutions we offer to grow your business.</p>
//       </div>

//       <div className="carousel-wrapper">
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           navigation={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           breakpoints={{
//             768: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             }
//           }}
//           modules={[Pagination, Navigation, Autoplay]}
//         >
//           {services.map((service) => (
//             <SwiperSlide key={service.id}>
//               <div className="service-card-ou" style={{
//                 backgroundImage: `url(${service.image})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}>
//                 <div className="overlay">
//                   <div className="icon">{service.icon}</div>
//                   <h2 className="service-title">{service.title}</h2>
//                   <p className="service-description">{service.description}</p>
//                   <ul className="benefits-list">
//                     {service.benefits.map((benefit, index) => (
//                       <li key={index}>{benefit}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <button className="book-meeting-btn" onClick={openForm}>
//       Book a Free Consultation
//       </button>

//       {showForm && (
//         <div className={`modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
//           <div className={`modal-content ${isClosing ? 'slide-down' : 'slide-up'}`}>
//             <button className="close-btn" onClick={closeForm}>×</button>
            
//             {isSubmitted ? (
//               <div className="success-message">
//                 <div className="success-icon">✓</div>
//                 <h3>Thank You!</h3>
//                 <p>Your consultation request has been submitted successfully.</p>
//                 <p>We'll contact you shortly to confirm your appointment.</p>
//               </div>
//             ) : (
//               <>
//                 <h2>Schedule Your Free Consultation</h2>
//                 <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
                
//                 <form id="booking-form" className="meeting-form" onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <input type="text" name="name" placeholder="Your Name" required />
//                   </div>
//                   <div className="form-group">
//                     <input type="email" name="email" placeholder="Your Email" required />
//                   </div>
//                   <div className="form-row">
//                     <div className="form-group">
//                       <label>Preferred Date</label>
//                       <input type="date" name="date" required />
//                     </div>
//                     <div className="form-group">
//                       <label>Preferred Time</label>
//                       <input type="time" name="time" required />
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <textarea name="message" placeholder="Tell us about your project needs..." required></textarea>
//                   </div>
//                   <button type="submit" className="submit-btn">
//                     Schedule Consultation
//                   </button>
//                 </form>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default OurService;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 1500);
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