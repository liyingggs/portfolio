
import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Web Development',
      number: '01',
      skills: [
        'Python', 'JavaScript', 'C++', 'HTML', 'CSS',
        'React', 'Node.js', 'Express.js', 'REST APIs',
        'Bootstrap', 'Responsive Design'
      ]
    },
    {
      title: 'Data & Databases',
      number: '02',
      skills: [
        'SQL', 'Database Management', 'CRUD Operations',
        'Authentication & Authorization'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      number: '03',
      skills: [
        'AWS', 'Cloud Architecture', 'Cisco Networking',
        'Virtualization', 'Containerization', 'Cloud Security',
        'Linux', 'Ubuntu', 'Windows PowerShell',
        'Bash/Shell Scripting', 'VMware', 'Nmap'
      ]
    },
    {
      title: 'Development Tools & Practices',
      number: '04',
      skills: [
        'Git', 'CI/CD', 'Postman', 'Code Review',
        'Debugging & Troubleshooting', 'Documentation',
        'Server-Side Development', 'Full-Stack Development'
      ]
    },
    {
      title: 'Enterprise IT & Methodologies',
      number: '05',
      skills: [
        'Opera Cloud PMS', 'IT Support & Operations',
        'User Acceptance Testing', 'Agile', 'SDLC',
        'Scrum', 'Project Management'
      ]
    },
    {
      title: 'Professional Skills',
      number: '06',
      skills: [
        'Problem-Solving', 'Critical Thinking',
        'Communication', 'Teamwork', 'Adaptability',
        'Time Management', 'Leadership'
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-heading">
          <p className="skills-eyebrow">WHAT I BRING</p>
          <h2 className="skills-title">
            Skills & <span>Expertise.</span>
          </h2>
          <p className="skills-intro">
            A growing toolkit across software development, cloud
            infrastructure, data, and business technology.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.number}>
              <div className="skill-card-top">
                <h3>{category.title}</h3>
                <span>{category.number}</span>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span className="skill-badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;