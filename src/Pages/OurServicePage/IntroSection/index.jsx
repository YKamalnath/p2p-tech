// import React from 'react';
// import { FiLayers, FiUsers, FiTarget, FiCheckCircle } from 'react-icons/fi';
// import { FaLightbulb, FaChartLine, FaHandshake } from 'react-icons/fa';
// import "./IntroSection.css";

// function IntroSection() {
//   return (
//     <div className="intro-section">
//       {/* Hero Section */}
//       <section className="services-hero">
//         <div className="container">
//           <div className="hero-content">
//             <h1>Our Services</h1>
//             <p className="hero-subtitle">Tailored technology solutions to drive your business forward</p>
//           </div>
//         </div>
//       </section>

//       {/* What We Offer */}
//       <section className="offer-section">
//         <div className="container">
//           <div className="section-header">
//             <h2>What We Offer</h2>
//             <div className="divider"></div>
//             <p className="section-subtitle">
//               Comprehensive digital solutions designed to solve your most pressing challenges
//             </p>
//           </div>

//           <div className="services-grid-in">
//             <div className="service-card-in">
//               <div className="card-icon">
//                 <FiLayers />
//               </div>
//               <h3>Custom Software Development</h3>
//               <p>
//                 Bespoke applications built to your exact specifications, scaling with your business needs.
//               </p>
//               <ul className="service-features">
//                 <li><FiCheckCircle /> Web & mobile applications</li>
//                 <li><FiCheckCircle /> API development & integration</li>
//                 <li><FiCheckCircle /> Cloud-native solutions</li>
//               </ul>
//             </div>

//             <div className="service-card-in">
//               <div className="card-icon">
//                 <FaLightbulb />
//               </div>
//               <h3>Digital Transformation</h3>
//               <p>
//                 Modernize your operations with strategic technology implementation.
//               </p>
//               <ul className="service-features">
//                 <li><FiCheckCircle /> Process automation</li>
//                 <li><FiCheckCircle /> Legacy system modernization</li>
//                 <li><FiCheckCircle /> Digital workflow optimization</li>
//               </ul>
//             </div>

//             <div className="service-card-in">
//               <div className="card-icon">
//                 <FaChartLine />
//               </div>
//               <h3>Data Solutions</h3>
//               <p>
//                 Turn your data into actionable insights and competitive advantage.
//               </p>
//               <ul className="service-features">
//                 <li><FiCheckCircle /> Business intelligence</li>
//                 <li><FiCheckCircle /> Data warehousing</li>
//                 <li><FiCheckCircle /> Predictive analytics</li>
//               </ul>
//             </div>

//             <div className="service-card-in">
//               <div className="card-icon">
//                 <FaHandshake />
//               </div>
//               <h3>IT Consulting</h3>
//               <p>
//                 Expert guidance to align your technology with business objectives.
//               </p>
//               <ul className="service-features">
//                 <li><FiCheckCircle /> Technology roadmap</li>
//                 <li><FiCheckCircle /> Vendor selection</li>
//                 <li><FiCheckCircle /> Implementation strategy</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Who We Help */}
//       <section className="clients-section">
//         <div className="container">
//           <div className="section-header">
//             <h2>Who We Help</h2>
//             <div className="divider"></div>
//             <p className="section-subtitle">
//               We partner with forward-thinking organizations across industries
//             </p>
//           </div>

//           <div className="client-types">
//             <div className="client-card">
//               <div className="client-icon">
//                 <FiUsers />
//               </div>
//               <h3>Startups</h3>
//               <p>
//                 Helping founders build MVPs and scalable tech foundations to attract investors and customers.
//               </p>
//             </div>

//             <div className="client-card">
//               <div className="client-icon">
//                 <FiTarget />
//               </div>
//               <h3>Mid-Sized Businesses</h3>
//               <p>
//                 Enabling growth through operational efficiency and digital capabilities.
//               </p>
//             </div>

//             <div className="client-card">
//               <div className="client-icon">
//                 <FaChartLine />
//               </div>
//               <h3>Enterprise</h3>
//               <p>
//                 Transforming large organizations with innovative technology strategies.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="services-cta">
//         <div className="container">
//           <h2>Ready to discuss your project?</h2>
//           <p>Our team is ready to understand your needs and propose the right solution.</p>
//           <button className="cta-button">Get in Touch</button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default IntroSection;


import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiUsers, FiTarget, FiCheckCircle } from 'react-icons/fi';
import { FaLightbulb, FaChartLine, FaHandshake } from 'react-icons/fa';
import "./IntroSection.css";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hover: {
    y: -10,
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const iconVariants = {
  hover: {
    rotate: 10,
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
};

function IntroSection() {
  return (
    <div className="intro-section">
      {/* Hero Section */}
      <motion.section 
        className="services-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1>Our Services</h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Tailored technology solutions to drive your business forward
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* What We Offer */}
      <section className="offer-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants}>What We Offer</motion.h2>
            <motion.div className="divider" variants={itemVariants} />
            <motion.p className="section-subtitle" variants={itemVariants}>
              Comprehensive digital solutions designed to solve your most pressing challenges
            </motion.p>
          </motion.div>

          <motion.div 
            className="services-grid-in"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div 
              className="service-card-in"
              variants={itemVariants}
              whileHover="hover"
              // variants={cardVariants}
            >
              <motion.div 
                className="card-icon"
                variants={iconVariants}
                whileHover="hover"
              >
                <FiLayers />
              </motion.div>
              <h3>Custom Software Development</h3>
              <p>
                Bespoke applications built to your exact specifications, scaling with your business needs.
              </p>
              <ul className="service-features">
                <li><FiCheckCircle /> Web & mobile applications</li>
                <li><FiCheckCircle /> API development & integration</li>
                <li><FiCheckCircle /> Cloud-native solutions</li>
              </ul>
            </motion.div>

            <motion.div 
              className="service-card-in"
              variants={itemVariants}
              whileHover="hover"
              // variants={cardVariants}
            >
              <motion.div 
                className="card-icon"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaLightbulb />
              </motion.div>
              <h3>Digital Transformation</h3>
              <p>
                Modernize your operations with strategic technology implementation.
              </p>
              <ul className="service-features">
                <li><FiCheckCircle /> Process automation</li>
                <li><FiCheckCircle /> Legacy system modernization</li>
                <li><FiCheckCircle /> Digital workflow optimization</li>
              </ul>
            </motion.div>

            <motion.div 
              className="service-card-in"
              variants={itemVariants}
              whileHover="hover"
              // variants={cardVariants}
            >
              <motion.div 
                className="card-icon"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaChartLine />
              </motion.div>
              <h3>Data Solutions</h3>
              <p>
                Turn your data into actionable insights and competitive advantage.
              </p>
              <ul className="service-features">
                <li><FiCheckCircle /> Business intelligence</li>
                <li><FiCheckCircle /> Data warehousing</li>
                <li><FiCheckCircle /> Predictive analytics</li>
              </ul>
            </motion.div>

            <motion.div 
              className="service-card-in"
              variants={itemVariants}
              whileHover="hover"
              // variants={cardVariants}
            >
              <motion.div 
                className="card-icon"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaHandshake />
              </motion.div>
              <h3>IT Consulting</h3>
              <p>
                Expert guidance to align your technology with business objectives.
              </p>
              <ul className="service-features">
                <li><FiCheckCircle /> Technology roadmap</li>
                <li><FiCheckCircle /> Vendor selection</li>
                <li><FiCheckCircle /> Implementation strategy</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="clients-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants}>Who We Help</motion.h2>
            <motion.div className="divider" variants={itemVariants} />
            <motion.p className="section-subtitle" variants={itemVariants}>
              We partner with forward-thinking organizations across industries
            </motion.p>
          </motion.div>

          <motion.div 
            className="client-types"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div 
              className="client-card"
              variants={itemVariants}
              whileHover={{ 
                backgroundColor: "#2563eb",
                color: "white",
                y: -10
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="client-icon"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white"
                }}
              >
                <FiUsers />
              </motion.div>
              <h3>Startups</h3>
              <p>
                Helping founders build MVPs and scalable tech foundations to attract investors and customers.
              </p>
            </motion.div>

            <motion.div 
              className="client-card"
              variants={itemVariants}
              whileHover={{ 
                backgroundColor: "#2563eb",
                color: "white",
                y: -10
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="client-icon"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white"
                }}
              >
                <FiTarget />
              </motion.div>
              <h3>Mid-Sized Businesses</h3>
              <p>
                Enabling growth through operational efficiency and digital capabilities.
              </p>
            </motion.div>

            <motion.div 
              className="client-card"
              variants={itemVariants}
              whileHover={{ 
                backgroundColor: "#2563eb",
                color: "white",
                y: -10
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="client-icon"
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white"
                }}
              >
                <FaChartLine />
              </motion.div>
              <h3>Enterprise</h3>
              <p>
                Transforming large organizations with innovative technology strategies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="services-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to discuss your project?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Our team is ready to understand your needs and propose the right solution.
          </motion.p>
          <motion.button 
            className="cta-button"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ 
              y: -3,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

export default IntroSection;