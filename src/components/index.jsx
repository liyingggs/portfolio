import React from 'react';
import { FaGithub, FaLinkedin, FaArrowDown, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import '../styles/Hero.css';

const Index = () => {
  return (
    <section id="index" className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-eyebrow">
            DATA SCIENCE & BUSINESS ANALYTICS
          </p>

          <h1>
            Hi, I'm <span>Li Ying.</span>
          </h1>

          <h2 className="hero-heading">
            Turning data into <span>meaningful insights.</span>
          </h2>

          <p className="hero-description">
            First-year SIM-UOL undergraduate with an IT background,
            interested in data analytics, business analysis, and
            technology-driven solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn hero-btn-primary">
              Explore My Work <FaArrowUpRightFromSquare />
            </a>

            <a href="#contact" className="hero-btn hero-btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/liyingggs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/liyingongg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-top">
              <span className="hero-status-dot"></span>
              <span>MY BACKGROUND</span>
            </div>

            <div className="hero-initials">LY<span>.</span></div>

            <p className="hero-card-caption">
              Connecting technology, data, and business.
            </p>

            <div className="hero-card-divider"></div>

            <div className="hero-interests">
              <span>01</span>
              <p>Data Analytics</p>
            </div>

            <div className="hero-interests">
              <span>02</span>
              <p>Business Analysis</p>
            </div>

            <div className="hero-interests">
              <span>03</span>
              <p>Technology</p>
            </div>
          </div>

          <div className="hero-decoration hero-decoration-one"></div>
          <div className="hero-decoration hero-decoration-two"></div>
        </div>

      </div>

      <a href="#about" className="hero-scroll">
        <FaArrowDown />
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
};

export default Index;