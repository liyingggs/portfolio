import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Diploma in Enterprise Cloud Computing & Management',
      organization: 'Republic Polytechnic',
      duration: 'Graduation in 2026',
      highlights: [
        'Comprehensive training in cloud architecture and enterprise solutions',
        'Hands-on experience with Python, JavaScript, and cloud technologies',
        'Focus on modern development practices and DevOps',
        'Strong foundation in networking and IT infrastructure'
      ]
    },
    {
      title: 'Technical Training & Projects',
      organization: 'Self Development',
      duration: 'Ongoing',
      highlights: [
        'Developed multiple full-stack web applications using Node.js, Express.js, and React during school years',
        'Built cloud-native solutions using AWS services, such as an attempt of a backup cloud server with FSx',
        'Participated in agile methodologies in group projects, including a football club management system',
      ]
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience & Training</h2>
        <p className="experience-intro">My educational journey and professional development</p>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className="experience-org">{exp.organization}</span>
              </div>
              <div className="experience-duration">{exp.duration}</div>
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
