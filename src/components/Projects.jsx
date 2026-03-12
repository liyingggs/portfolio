import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Football Club Management Web App',
      description: 'Comprehensive full-stack web application for managing football club operations including account management, store, payments, admin controls, events, schedules, and news management.',
      technologies: ['Node.js', 'Express.js', 'JavaScript', 'CSS', 'Database'],
      type: 'Final Year Project',
      github: 'https://github.com/liying23025305/FYP---Football-Club-Management'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
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
                <a href={project.github} className="project-link github-only">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="more-projects">More projects coming soon!</p>
      </div>
    </section>
  );
};

export default Projects;
