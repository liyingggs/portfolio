import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AWS FSx File Server Solution for The Capitol Kempinski Hotel Singapore',
      description: 'Designed an AWS FSx file server to back up the hotel’s domain controller and shared drives during my IT internship at The Capitol Kempinski Hotel Singapore; partially implemented due to time and cross-region corporate coordination.',
      technologies: ['AWS S3', 'EC2', 'Active Directory','Python','VPN','VPC','Security Groups'],
      type: 'IT Internship Project',
    },
    {
      title: 'Football Club Management Web App',
      description: 'Comprehensive full-stack web application for managing football club operations including account management, store, payments, admin controls, events, schedules, and news management.',
      technologies: ['Node.js', 'Express.js', 'JavaScript', 'CSS', 'SQL','XAMPP'],
      type: 'Final Year Project',
      github: 'https://github.com/liying23025305/FYP---Football-Club-Management'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects-title"><strong>Featured Projects</strong></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github ? (
                  <a href={project.github} className="project-link github-only">
                    <FaGithub /> GitHub
                  </a>
                ) : null}
              </div>
              {project.notes && (
                <p className="project-notes">{project.notes}</p>
              )}
            </div>
          ))}
        </div>
        <p className="more-projects">More projects coming soon!</p>
      </div>
    </section>
  );
};

export default Projects;
