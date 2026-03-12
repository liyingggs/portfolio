import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Hero.css';

const Index = () => {
  return (
    <section id="index" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span>Ong Li Ying</span></h1>
        <p className="hero-subtitle">Full Stack Developer | Cloud Enthusiast | Tech Student</p>
        <p className="hero-description">
          Diploma in Enterprise Cloud Computing & Management with expertise in Python, JavaScript, and Cloud Technologies
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/liyingggs" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/liyingongg/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Index;
