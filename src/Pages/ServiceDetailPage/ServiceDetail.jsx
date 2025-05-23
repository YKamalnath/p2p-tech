import React from "react";
import { motion } from "framer-motion";
import { 
  FiCode, 
  FiCloud, 
  FiServer, 
  FiLayers,
  FiSmartphone,
  FiLayout,
  FiCpu,
  FiShield,
  FiBarChart2,
  FiSettings,
  FiHelpCircle
} from "react-icons/fi";
import { 
  FaRobot,
  FaNetworkWired,
  FaUserShield
} from "react-icons/fa";
import "./ServiceDetail.css";

const serviceDetails = [
  {
    icon: <FiCode size={48} />,
    heading: "Custom Software Development",
    description:
      "From concept to code, we design scalable, secure, and robust custom software tailored to your exact needs. Whether it's a startup MVP or a full-scale enterprise system, we bring your vision to life with modern technologies and agile practices.",
    features: [
      "Web and Mobile App Development",
      "UI/UX Design and Prototyping",
      "API Development & Integration",
      "Enterprise-grade Software Architecture",
    ],
    iconComponents: [<FiLayout key="web" />, <FiSmartphone key="mobile" />, <FiCpu key="api" />, <FiLayers key="arch" />]
  },
  {
    icon: <FiCloud size={48} />,
    heading: "Cloud Solutions",
    description:
      "Leverage the power of the cloud to boost efficiency, scalability, and resilience. We offer end-to-end cloud services from migration to maintenance, ensuring you're future-ready.",
    features: [
      "Cloud Migration & Optimization",
      "AWS, Azure & GCP Expertise",
      "DevOps & CI/CD Implementation",
      "Cloud Security & Compliance",
    ],
    iconComponents: [<FiServer key="migrate" />, <FaNetworkWired key="expert" />, <FiSettings key="devops" />, <FiShield key="security" />]
  },
  {
    icon: <FaRobot size={48} />,
    heading: "IT Consulting & Support",
    description:
      "Bridge the gap between technology and business with our expert IT consulting. We assess, plan, and support IT strategies that align with your goals—while offering 24/7 support to keep operations smooth.",
    features: [
      "Technology Strategy & Roadmapping",
      "Infrastructure Audits",
      "Cybersecurity Consulting",
      "Ongoing IT Support Services",
    ],
    iconComponents: [<FiBarChart2 key="strategy" />, <FiHelpCircle key="audit" />, <FaUserShield key="cyber" />, <FiSettings key="support" />]
  },
];

const ServiceDetail = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="service-detail-container">
      <motion.h1 
        className="service-detail-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Core Services
      </motion.h1>
      <motion.p 
        className="service-detail-subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Explore our range of services designed to elevate your business through cutting-edge technology.
      </motion.p>
      
      <motion.div 
        className="services-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {serviceDetails.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-card-02"
            variants={item}
            whileHover={{ y: -10 }}
          >
            <div className="service-icon-container">
              {service.icon}
            </div>
            <h2 className="service-title-02">{service.heading}</h2>
            <p className="service-description-02">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>
                  <span className="feature-icon">{service.iconComponents[i]}</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceDetail;