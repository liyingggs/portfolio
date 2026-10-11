import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      number: '01',
      title: 'AWS FSx File Server Solution',
      subtitle: 'The Capitol Kempinski Hotel Singapore',
      description:
        'Explored an AWS-based file server solution to support shared-drive backup and improve infrastructure resilience during my IT internship. The project involved cloud architecture planning and partial implementation, with progress constrained by cross-region coordination and project timelines.',
      technologies: [
        'AWS FSx',
        'Amazon EC2',
        'Amazon S3',
        'Active Directory',
        'VPC',
        'VPN',
        'Security Groups',
      ],
      type: 'IT Internship',
    },
    {
      number: '02',
      title: 'Football Club Management Web App',
      subtitle: 'Full-Stack Web Development',
      description:
        'Built a full-stack web application for managing football club operations, bringing together user accounts, merchandise, payment workflows, membership benefits, events, match schedules, and administrative controls.',
      technologies: [
        'Node.js',
        'Express.js',
        'JavaScript',
        'SQL',
        'EJS',
        'CSS',
        'XAMPP',
      ],
      type: 'Final Year Project',
      github:
        'https://github.com/liying23025305/FYP---Football-Club-Management',
    },
    {
      number: '03',
      title: 'Tenant Collaboration Portal',
      subtitle: 'City Developments Limited',
      description:
        'Worked on a portal prototype to help prospective and existing tenants access fit-out guidelines, manuals, and essential tenancy information. The project focused on making important resources easier to find and improving the tenant information experience.',
      technologies: ['Node.js', 'JavaScript', 'CSS'],
      type: 'Business & IT',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-heading">
          <p className="projects-eyebrow">SELECTED WORK</p>

          <h2 className="projects-title">
            Projects & <span>Experience.</span>
          </h2>

          <p className="projects-intro">
            A selection of projects where I explore software development,
            cloud infrastructure, and practical business technology.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-header">
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech-section">
                <p className="project-tech-label">TECHNOLOGIES</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                {project.github ? (
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub aria-hidden="true" />
                    View on GitHub
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="project-status">
                    <span className="project-status-dot" />
                    Project experience
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="more-projects">
          More projects and explorations coming soon.
        </p>
      </div>
    </section>
  );
};

export default Projects;
