
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'index' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">

        {/* Personal branding */}
        <button
          className="navbar-brand"
          onClick={() => scrollToSection('index')}
          aria-label="Back to home"
        >
          <span className="brand-name">
            LI YING<span className="brand-dot">.</span>
          </span>
          <span className="brand-subtitle">
            DATA & BUSINESS ANALYTICS
          </span>
        </button>

        {/* Navigation links */}
        <ul
          id="main-navigation"
          className={`nav-menu ${isOpen ? 'active' : ''}`}
        >
          {navItems.map((item) => (
            <li className="nav-item" key={item.id}>
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleDarkMode}
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {darkMode ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
            </svg>
          )}
        </button>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
