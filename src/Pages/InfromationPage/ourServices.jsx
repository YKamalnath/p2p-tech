import React, { useEffect } from 'react';
import "./ourServicesPage.css";
import { useNavigate } from 'react-router-dom';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaShoppingCart, 
  FaSearchDollar, 
  FaChartLine, 
  FaPalette,
  FaArrowRight
} from 'react-icons/fa';

function OurServices() {
  const navigate = useNavigate();

  useEffect(() => {
    // Add animation triggers when component mounts
    const animateElements = () => {
      const elements = document.querySelectorAll('.service-card-r, .services-header');
      elements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    };

    // Small timeout to ensure CSS is loaded
    setTimeout(animateElements, 100);
  }, []);

  const services = [
    {
      icon: <FaLaptopCode className="service-icon-w" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      highlight: "From $999"
    },
    {
      icon: <FaMobileAlt className="service-icon-w" />,
      title: "Mobile App Development",
      description: "iOS and Android applications designed to help your business reach customers on their preferred devices.",
      highlight: "From $1,499"
    },
    {
      icon: <FaShoppingCart className="service-icon-w" />,
      title: "E-Commerce Solutions",
      description: "Complete online store setups with payment processing, inventory management, and marketing tools.",
      highlight: "From $1,299"
    },
    {
      icon: <FaSearchDollar className="service-icon-w" />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more organic traffic to your website with our proven strategies.",
      highlight: "From $499/mo"
    },
    {
      icon: <FaChartLine className="service-icon-w" />,
      title: "Digital Marketing",
      description: "Comprehensive marketing campaigns including social media, email, and content marketing to grow your audience.",
      highlight: "From $799/mo"
    },
    {
      icon: <FaPalette className="service-icon-w" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to enhance user engagement and improve conversion rates.",
      highlight: "From $899"
    }
  ];

  return (
    <div className="services-container-w">
      <div className="services-header animate-header">
        <h1>What We Do</h1>
        <p className="services-subtitle">Comprehensive digital solutions to grow your business</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            className="service-card-r animate-card" 
            key={index}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="service-icon-container">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-highlight">{service.highlight}</div>
          </div>
        ))}
      </div>
      
      <button className="see-all-btn animate-btn" onClick={() => navigate('/our_Service')}>
        See All Services <FaArrowRight className="btn-icon" />
      </button>
    </div>
  );
}

export default OurServices;