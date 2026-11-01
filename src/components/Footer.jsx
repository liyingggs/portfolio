
import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa6';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <a href="#index" className="footer-brand">
            li ying<span>.</span>
          </a>

          <p className="footer-message">
            Thanks for stopping by. Here's to staying curious. ✳
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/liyingggs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/liyingongg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a href="#index" aria-label="Back to top">
              <FaArrowUp />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Ong Li Ying. All rights reserved.</p>

          <p>
            Built with React · Deployed on{' '}
            <a
              href="https://github.com/liyingggs/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Pages
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
