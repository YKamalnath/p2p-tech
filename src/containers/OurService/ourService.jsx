
import React, { useState } from 'react';
import './ourService.css';
import img01 from "../../assets/OurService/image-12.jpg";
import img02 from "../../assets/OurService/image-13.jpg";
import img03 from "../../assets/OurService/image-14.jpg";
import img04 from "../../assets/OurService/image-16.jpg";
import img05 from "../../assets/OurService/image-17.jpg";
import Cover from "../../assets/OurService/image-123.jpg";

function OurService() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Professional websites and apps tailored to your business needs.',
      benefits: ['Responsive design', 'SEO optimized', 'Scalable architecture'],
      icon: '🌐',
      image: img01,
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      description: 'Deploy, scale, and manage your apps with our cloud expertise.',
      benefits: ['AWS, Azure, GCP support', 'Cost-effective', 'Secure deployments'],
      icon: '☁️',
      image: img02,
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Protect your data and infrastructure with robust security measures.',
      benefits: ['Vulnerability testing', 'Real-time monitoring', 'Data encryption'],
      icon: '🛡️',
      image: img03,
    },
    {
      id: 4,
      title: 'AI & Automation',
      description: 'Automate tasks, analyze data, and build intelligent solutions.',
      benefits: ['Chatbots', 'Data analysis', 'Custom ML models'],
      icon: '🤖',
      image: img04,
    },
    {
      id: 5,
      title: 'IT Consulting',
      description: 'Get expert advice to improve your digital strategy and tech stack.',
      benefits: ['Tailored plans', 'Hands-on guidance', 'Ongoing support'],
      icon: '📊',
      image: img05,
    },
  ];

  
  

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
  
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });
  
      const data = await response.json();
      if (response.status === 200) {
        alert('Request sent successfully!');
      } else {
        alert('Error sending request. Please try again later.');
      }
    } catch (error) {
      alert('Error sending request. Please try again later.');
    }
  
    setShowForm(false);
  };
  

  return (
    <div className="services-container-2">
      <div className='title-intro'>
      <h1 className="title">Our IT Services</h1>
      <p className="intro">Explore the digital solutions we offer to grow your business.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card" style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="overlay">
              <div className="icon">{service.icon}</div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <ul className="benefits-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <button className="book-meeting-btn" onClick={() => setShowForm(true)}>
        📅 Book a Free Consultation
      </button>

      {showForm && (
        <form className="meeting-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Tell us what you need..." required></textarea>
          <button type="submit">Send Request</button>
        </form>
      )}
    </div>
  );
}

export default OurService;
