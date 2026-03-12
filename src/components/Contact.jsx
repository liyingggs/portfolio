import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Let's Connect</h2>
        <p className="contact-subtitle">I'm actively looking for opportunities to grow and contribute to innovative projects. Whether you're interested in collaboration, have an opportunity, or just want to chat about technology—I'd love to hear from you!</p>
        
        <div className="cta-message">
          <p>I'm open to:</p>
          <div className="cta-items">
            <span className="cta-badge">Internships</span>
            <span className="cta-badge">Full-time Roles</span>
            <span className="cta-badge">Freelance Projects</span>
            <span className="cta-badge">Collaborations</span>
          </div>
        </div>
        
        <div className="contact-content">
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <div>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/liyingongg/" target="_blank" rel="noopener noreferrer">
                Ong Li Ying
              </a>
            </div>
          </div>
          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <div>
              <h3>GitHub</h3>
              <a href="https://github.com/liyingggs" target="_blank" rel="noopener noreferrer">
                liyingggs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
