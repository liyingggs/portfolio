import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Ong Li Ying. All rights reserved.</p>
        <p className="footer-tagline">
          Built with React • Deployed on GitHub Pages • <a href="https://github.com/liyingggs/portfolio" target="_blank" rel="noopener noreferrer">View Source</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
