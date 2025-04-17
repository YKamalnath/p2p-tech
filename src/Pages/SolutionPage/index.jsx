import React from 'react';
import './Solution.css';

function Solution() {
  return (
    <div className="solution-container">
      <header className="solution-header">
        <h1>Our Solutions</h1>
        <p>Smart. Scalable. Tailored for your business.</p>
      </header>

      <section className="solution-section">
        <div className="solution-card">
          <h2>Custom Software Development</h2>
          <p>
            From web platforms to enterprise systems, we create tailored solutions that fit your unique business workflows and scale with your growth.
          </p>
        </div>
        <div className="solution-card">
          <h2>Cloud & DevOps Services</h2>
          <p>
            We help you migrate, deploy, and manage your applications in the cloud with security, automation, and performance optimization at the core.
          </p>
        </div>
        <div className="solution-card">
          <h2>AI & Data Analytics</h2>
          <p>
            Transform your data into insights with AI-driven analytics. We build intelligent solutions for smarter business decisions.
          </p>
        </div>
        <div className="solution-card">
          <h2>UI/UX & Front-End Engineering</h2>
          <p>
            We design engaging interfaces and deliver seamless user experiences across web and mobile platforms.
          </p>
        </div>
      </section>

      <section className="tech-stack-section">
        <h2>Our Tech Stack</h2>
        <div className="stack-grid">
          <span>React</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>AWS</span>
          <span>Docker</span>
          <span>MongoDB</span>
          <span>PostgreSQL</span>
          <span>Next.js</span>
        </div>
      </section>

      <footer className="solution-footer">
        <p>© {new Date().getFullYear()} P2P Tech – Delivering Intelligent IT Solutions.</p>
      </footer>
    </div>
  );
}

export default Solution;

