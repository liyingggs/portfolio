import React from 'react';
import { FaLinkedin, FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import '../styles/Contact.css';

const Contact = () => {
  const opportunities = [
    'Internships',
    'Freelance Projects',
    'Collaborations',
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-card">
          <span className="contact-eyebrow">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>Let's Connect<span>.</span></h2>

          <p className="contact-subtitle">
            I'm always open to new opportunities, meaningful collaborations,
            and connecting with people who enjoy turning ideas into reality.
            Feel free to reach out!
          </p>

          <div className="contact-opportunities">
            <p className="contact-label">I'm open to</p>

            <div className="cta-items">
              {opportunities.map((item) => (
                <span className="cta-badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="contact-divider" />

          <div className="contact-footer">
            <div className="contact-footer-text">
              <span className="contact-footer-title">
                Let's start a conversation.
              </span>
              <span className="contact-footer-subtitle">
                Find me on my professional and project profiles.
              </span>
            </div>

            <div className="contact-socials">
              <a
                href="https://www.linkedin.com/in/liyingongg/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-btn"
                aria-label="Visit my LinkedIn profile"
                title="LinkedIn"
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
                title="GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
                <FaArrowUpRightFromSquare className="contact-external-icon" />
              </a>
            </div>
          </div>
        </div>

        <p className="contact-bottom-note">
          Thanks for stopping by — let's build something meaningful.
        </p>
      </div>
    </section>
  );
};

export default Contact;