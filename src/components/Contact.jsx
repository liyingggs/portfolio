
import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-decoration contact-decoration-one" />
          <div className="contact-decoration contact-decoration-two" />

          <div className="contact-content">
            <p className="contact-eyebrow">
              HAVE SOMETHING IN MIND? <span>✳</span>
            </p>

            <h2 className="contact-title">
              Let's make<br />
              <span>something happen.</span>
            </h2>

            <p className="contact-subtitle">
              Whether it's an opportunity, a collaboration, or simply
              a conversation, I'd love to connect and hear from you.
            </p>

            <div className="contact-opportunities">
              <span>Open to</span>
              <div className="cta-items">
                <span className="cta-badge">Internships</span>
                <span className="cta-badge">Collaborations</span>
                <span className="cta-badge">New opportunities</span>
              </div>
            </div>

            <div className="contact-divider" />

            <div className="contact-footer">
              <div className="contact-footer-text">
                <span className="contact-footer-title">
                  Find me around the web
                </span>
                <span className="contact-footer-subtitle">
                  Let's connect and keep in touch.
                </span>
              </div>

              <div className="contact-socials">
                <a
                  href="https://www.linkedin.com/in/liyingongg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon-btn"
                  aria-label="Visit my LinkedIn profile"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                  <FaArrowUpRightFromSquare className="contact-external-icon" />
                </a>

                <a
                  href="https://github.com/liyingggs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon-btn"
                  aria-label="Visit my GitHub profile"
                >
                  <FaGithub />
                  <span>GitHub</span>
                  <FaArrowUpRightFromSquare className="contact-external-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="contact-bottom-note">
          Made with curiosity and a little bit of creativity. ✳
        </p>
      </div>
    </section>
  );
};

export default Contact;
