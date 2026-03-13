import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button onClick={() => scrollToSection('index')}>Home</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('skills')}>Skills</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('experience')}>Experience</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* theme toggle button using inline SVG icons */}
        <button className="theme-toggle" onClick={toggleDarkMode} aria-label="toggle theme">
          {darkMode ? (
            /* crescent moon when dark mode is active */
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 17a7.003 7.003 0 009-4.21z"/>
            </svg>
          ) : (
            /* sun icon for light mode */
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M6.76 4.84l-1.8-1.79-1.42 1.41 1.79 1.8a7.007 7.007 0 0 0 1.43-1.42zM1 13h3v-2H1v2zm10-9h-2v3h2V4zm7.66 2.05l1.79-1.8-1.41-1.41-1.8 1.79c.55.56 1.03 1.2 1.42 1.42zM20 11v2h3v-2h-3zm-9 9h2v-3h-2v3zm4.24-1.76l1.8 1.79 1.41-1.41-1.79-1.8a7.007 7.007 0 0 0-1.42 1.42zM12 6a6 6 0 0 1 0 12 6 6 0 0 1 0-12z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
