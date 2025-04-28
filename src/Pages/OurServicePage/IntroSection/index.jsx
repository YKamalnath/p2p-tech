import React from 'react';
import { FiLayers, FiUsers, FiTarget, FiCheckCircle } from 'react-icons/fi';
import { FaLightbulb, FaChartLine, FaHandshake } from 'react-icons/fa';
import "./IntroSection.css";

function IntroSection() {
  return (
    <div className="intro-section">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p className="hero-subtitle">Tailored technology solutions to drive your business forward</p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="offer-section">
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              Comprehensive digital solutions designed to solve your most pressing challenges
            </p>
          </div>

          <div className="services-grid-in">
            <div className="service-card-in">
              <div className="card-icon">
                <FiLayers />
              </div>
              <h3>Custom Software Development</h3>
              <p>
                Bespoke applications built to your exact specifications, scaling with your business needs.
              </p>
              <ul className="service-features">
                <li><FiCheckCircle /> Web & mobile applications</li>
                <li><FiCheckCircle /> API development & integration</li>
                <li><FiCheckCircle /> Cloud-native solutions</li>
              </ul>
            </div>

            <div className="service-card-in">
              <div className="card-icon">
                <FaLightbulb />
              </div>
              <h3>Digital Transformation</h3>
              <p>
                Modernize your operations with strategic technology implementation.
              </p>
              <ul className="service-features">
                <li><FiCheckCircle /> Process automation</li>
                <li><FiCheckCircle /> Legacy system modernization</li>
                <li><FiCheckCircle /> Digital workflow optimization</li>
              </ul>
            </div>

            <div className="service-card-in">
              <div className="card-icon">
                <FaChartLine />
              </div>
              <h3>Data Solutions</h3>
              <p>
                Turn your data into actionable insights and competitive advantage.
              </p>
              <ul className="service-features">
                <li><FiCheckCircle /> Business intelligence</li>
                <li><FiCheckCircle /> Data warehousing</li>
                <li><FiCheckCircle /> Predictive analytics</li>
              </ul>
            </div>

            <div className="service-card-in">
              <div className="card-icon">
                <FaHandshake />
              </div>
              <h3>IT Consulting</h3>
              <p>
                Expert guidance to align your technology with business objectives.
              </p>
              <ul className="service-features">
                <li><FiCheckCircle /> Technology roadmap</li>
                <li><FiCheckCircle /> Vendor selection</li>
                <li><FiCheckCircle /> Implementation strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="clients-section">
        <div className="container">
          <div className="section-header">
            <h2>Who We Help</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              We partner with forward-thinking organizations across industries
            </p>
          </div>

          <div className="client-types">
            <div className="client-card">
              <div className="client-icon">
                <FiUsers />
              </div>
              <h3>Startups</h3>
              <p>
                Helping founders build MVPs and scalable tech foundations to attract investors and customers.
              </p>
            </div>

            <div className="client-card">
              <div className="client-icon">
                <FiTarget />
              </div>
              <h3>Mid-Sized Businesses</h3>
              <p>
                Enabling growth through operational efficiency and digital capabilities.
              </p>
            </div>

            <div className="client-card">
              <div className="client-icon">
                <FaChartLine />
              </div>
              <h3>Enterprise</h3>
              <p>
                Transforming large organizations with innovative technology strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to discuss your project?</h2>
          <p>Our team is ready to understand your needs and propose the right solution.</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>
    </div>
  );
}

export default IntroSection;
