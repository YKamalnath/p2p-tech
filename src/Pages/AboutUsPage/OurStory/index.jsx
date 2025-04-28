import React from 'react';
import { FaLightbulb, FaUsers, FaChartLine, FaCode, FaGlobe } from 'react-icons/fa';
import { FiTarget, FiClock, FiAward } from 'react-icons/fi';
import "./OurStory.css";
import { useNavigate } from 'react-router-dom';

function OurStory() {

    const navigate = useNavigate();
    
  return (
    <div className="our-story">
      {/* Hero Section */}
      <section className="story-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p className="hero-subtitle">From vision to reality - our journey of innovation</p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="origin-story">
        <div className="container">
          <div className="section-header">
            <h2>How We Started</h2>
            <div className="divider"></div>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaLightbulb />
              </div>
              <div className="timeline-content">
                <h3>The Spark</h3>
                <p className="year">2015</p>
                <p>
                  Founded in a small coworking space, our founders recognized a growing gap between 
                  business needs and available tech solutions. The vision was simple - build 
                  technology that works for people, not the other way around.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaUsers />
              </div>
              <div className="timeline-content">
                <h3>First Clients</h3>
                <p className="year">2016</p>
                <p>
                  Our first breakthrough came when we helped a local business automate their 
                  operations, saving them 30+ hours per week. Word spread quickly about our 
                  human-centered approach to technology.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaChartLine />
              </div>
              <div className="timeline-content">
                <h3>Rapid Growth</h3>
                <p className="year">2018</p>
                <p>
                  As demand grew, we expanded our team with top talent who shared our passion for 
                  solving real problems. We moved to our first proper office and established our 
                  core development practices.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaGlobe />
              </div>
              <div className="timeline-content">
                <h3>Global Reach</h3>
                <p className="year">2020-Present</p>
                <p>
                  Today we serve clients across 3 continents, with a team of 50+ innovators. 
                  While we've grown, we've maintained our startup spirit and commitment to 
                  building technology that makes a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="problem-section">
        <div className="container">
          <div className="section-header">
            <h2>The Problem We're Solving</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              In a world of rapid digital transformation, businesses struggle to keep up with 
              technology that evolves faster than they can adapt.
            </p>
          </div>
          
          <div className="problem-cards">
            <div className="problem-card">
              <div className="card-icon">
                <FiClock />
              </div>
              <h3>Time-Consuming Processes</h3>
              <p>
                Companies waste countless hours on manual workflows and outdated systems that 
                could be automated with modern solutions.
              </p>
            </div>
            
            <div className="problem-card">
              <div className="card-icon">
                <FaCode />
              </div>
              <h3>Technical Debt</h3>
              <p>
                Legacy systems become increasingly fragile and expensive to maintain, limiting 
                growth and innovation.
              </p>
            </div>
            
            <div className="problem-card">
              <div className="card-icon">
                <FiTarget />
              </div>
              <h3>Misaligned Solutions</h3>
              <p>
                Off-the-shelf software often fails to address specific business needs, requiring 
                costly workarounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="solution-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Approach</h2>
            <div className="divider"></div>
          </div>
          
          <div className="solution-features">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h3>Understanding First</h3>
              <p>
                We begin by deeply understanding your business, challenges, and goals before 
                writing a single line of code.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-number">02</div>
              <h3>Tailored Technology</h3>
              <p>
                We build custom solutions designed specifically for your workflows and 
                requirements.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-number">03</div>
              <h3>Future-Proof Design</h3>
              <p>
                Our architectures are built to evolve with your business, avoiding the 
                pitfalls of technical debt.
              </p>
            </div>
            
            <div className="feature-item">
              <div className="feature-number">04</div>
              <h3>Ongoing Partnership</h3>
              <p>
                We don't just deliver projects - we form lasting relationships to support your 
                continued growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="milestones-section">
        <div className="container">
          <div className="section-header">
            <h2>Key Milestones</h2>
            <div className="divider"></div>
          </div>
          
          <div className="milestones-grid">
            <div className="milestone-item">
              <FiAward className="milestone-icon" />
              <h3>50+</h3>
              <p>Satisfied Clients</p>
            </div>
            
            <div className="milestone-item">
              <FaUsers className="milestone-icon" />
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
            
            <div className="milestone-item">
              <FaGlobe className="milestone-icon" />
              <h3>12+</h3>
              <p>Countries Served</p>
            </div>
            
            <div className="milestone-item">
              <FaCode className="milestone-icon" />
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="story-cta">
        <div className="container">
          <h2>Want to be part of our story?</h2>
          <p>Let's build something great together.</p>
          <button 
          className="cta-button"
          onClick={() => navigate('/')}
          >Get Started</button>
        </div>
      </section>
    </div>
  );
}

export default OurStory;
