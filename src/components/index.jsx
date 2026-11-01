
import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaArrowUpRightFromSquare,
  FaArrowDown
} from 'react-icons/fa6';

import '../styles/Hero.css';

const Index = () => {
  return (
    <section id="index" className="intro-hero">
      <div className="intro-hero-inner">

        <div className="intro-copy">
          <p className="intro-kicker">
            <span></span>
            HELLO, I'M LI YING
          </p>

          <h1>
            Turning data
            <br />
            into <span>perspective.</span>
          </h1>

          <p className="intro-description">
            I'm a Data Science & Business Analytics undergraduate
            with a background in Information Technology. I enjoy
            exploring data, uncovering patterns, and understanding
            how insights can support better decisions.
          </p>

          <div className="intro-actions">
            <a href="#projects" className="intro-button intro-button-primary">
              Explore my work
              <FaArrowUpRightFromSquare />
            </a>

            <a href="#contact" className="intro-button intro-button-secondary">
              Get in touch
            </a>
          </div>

          <div className="intro-socials">
            <a href="https://github.com/liyingggs" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>

            <a href="https://www.linkedin.com/in/liyingongg/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <div className="intro-profile-card">
          <div className="profile-card-heading">
            <span> A LITTLE ABOUT ME </span>
            <span>01 — 2026</span>
          </div>

          <div className="profile-card-monogram">
            LY<span>.</span>
          </div>

          <div className="profile-card-info">
            <p className="profile-card-name">Li Ying</p>
            <p className="profile-card-degree">
              BSc Data Science & Business Analytics
            </p>
            <p className="profile-card-school">SIM — University of London</p>
          </div>

          <div className="profile-card-divider"></div>

          <div className="profile-card-interests">
            <span>INTERESTED IN</span>
            <div>
              <p>Data Analytics</p>
              <p>Business Insights</p>
              <p>Technology</p>
            </div>
          </div>
        </div>

      </div>

      <a href="#about" className="intro-scroll">
        SCROLL TO EXPLORE <FaArrowDown />
      </a>
    </section>
  );
};

export default Index;
