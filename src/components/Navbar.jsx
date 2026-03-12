import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
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
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
