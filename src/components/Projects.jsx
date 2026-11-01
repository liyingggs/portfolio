
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const projects = [
  {
    number: '01',
    type: 'DATA ANALYTICS',
    featured: true,
    tone: 'lilac',
    title: 'Kaggle Developer Survey 2022 EDA',
    subtitle: 'Personal Project · 2026',
    description:
      'Explored developer survey data using Python and Pandas to uncover patterns in developer demographics, programming language preferences, and technology adoption.',
    findings: [
      'Examined developer demographics and programming language trends.',
      'Compared the adoption of cloud platforms, with AWS emerging as the most commonly used platform.',
      'Created visualisations to communicate key findings and trends.',
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
    github: null,
  },
  {
    number: '02',
    type: 'BUSINESS & TECHNOLOGY',
    tone: 'sage',
    title: 'Tenant Collaboration Portal',
    subtitle: 'City Developments Limited',
    description:
      'Contributed to a portal prototype designed to make tenancy resources and essential information more accessible to prospective and existing tenants.',
    findings: [
      'Worked on organising fit-out guidelines, manuals, and supporting resources.',
      'Explored ways to improve information accessibility and the tenant experience.',
    ],
    technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
    github: null,
  },
  {
    number: '03',
    type: 'WEB DEVELOPMENT',
    tone: 'blue',
    title: 'Football Club Management Web App',
    subtitle: 'Final Year Project · Republic Polytechnic',
    description:
      'Developed a full-stack web application to support football club operations, combining administrative tools with user-facing features.',
    findings: [
      'Implemented merchandise management, shopping cart, orders, and payment workflows.',
      'Developed membership benefits, event management, and match scheduling features.',
      'Integrated database operations and user account functionality.',
    ],
    technologies: ['Node.js', 'Express.js', 'JavaScript', 'EJS', 'SQL', 'CSS'],
    github: 'https://github.com/liying23025305/FYP---Football-Club-Management',
  },
  {
    number: '04',
    type: 'CLOUD & INFRASTRUCTURE',
    tone: 'peach',
    title: 'AWS FSx File Server Solution',
    subtitle: 'IT Internship · The Capitol Kempinski Hotel Singapore',
    description:
      'Explored an AWS-based file server solution to support shared-drive storage and backup as part of an infrastructure improvement initiative.',
    findings: [
      'Worked with AWS FSx, EC2, and S3 as part of the proposed architecture.',
      'Explored integration with Active Directory, VPC, VPN, and security groups.',
      'Contributed to a proof of concept that was partially implemented.',
    ],
    technologies: ['AWS FSx', 'Amazon EC2', 'Amazon S3', 'Active Directory', 'VPC', 'VPN'],
    github: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-heading">
          <p className="projects-eyebrow">
            THINGS I'VE WORKED ON <span>✳</span>
          </p>

          <h2 className="projects-title">
            A collection of <span>my work.</span>
          </h2>

          <p className="projects-intro">
            From exploring data and uncovering insights to building
            applications and working with technology, here's a selection
            of projects I've been involved in.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-${project.tone} ${
                project.featured ? 'project-featured' : ''
              }`}
              key={project.number}
            >
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-header">
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-highlights">
                <p className="project-label">WHAT I DID</p>
                <ul>
                  {project.findings.map((finding) => (
                    <li key={finding}>{finding}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech-section">
                <p className="project-label">TOOLS & TECHNOLOGIES</p>
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
                    {project.featured ? 'Personal project' : 'Project experience'}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="more-projects">
          Always learning, building, and exploring something new.
        </p>
      </div>
    </section>
  );
};

export default Projects;
