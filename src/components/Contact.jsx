import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-heading-row">
          <h2>Let's Connect</h2>
          <div className="contact-heading-icons">
            <a
              href="https://www.linkedin.com/in/liyingongg/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-btn"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="contact-icon" />
            </a>
            <a
              href="https://github.com/liyingggs"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-btn"
              aria-label="GitHub"
            >
              <FaGithub className="contact-icon" />
            </a>
          </div>
        </div>
        <p className="contact-subtitle">I'm actively looking for opportunities to grow as a software engineer, and connect with like-minded individuals. Feel free to reach out! </p>
        <div className="cta-message">
          <p>I'm open to:</p>
          <div className="cta-items">
            <span className="cta-badge">Internships</span>
            <span className="cta-badge">Freelance Projects</span>
            <span className="cta-badge">Collaborations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
