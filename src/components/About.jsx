import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about-title"><strong>About Me</strong></h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I hold a Diploma in Enterprise Cloud Computing & Management from Republic Polytechnic, with three years of practical experience and an IT internship at The Capitol Kempinski Hotel Singapore.
            </p>
            <p>
              I have a strong foundation in Python, Linux, networking, and cloud technologies, along with hands-on experience in enterprise IT operations and Opera Cloud PMS.
            </p>
            <p>
              A motivated team player with a strong willingness to learn, I aim to deepen my knowledge in computer science and software development while contributing to reliable and effective technology solutions.
            </p>
            <div className="about-highlight">
              <p><strong>Education:</strong> Diploma in Enterprise Cloud Computing & Management (Republic Polytechnic)</p>
              <p><strong>Experience:</strong> 3 years practical experience + IT Internship (The Capitol Kempinski Hotel Singapore)</p>
              <p><strong>Focus:</strong> Full-stack development, Cloud computing, Enterprise IT, Software Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
