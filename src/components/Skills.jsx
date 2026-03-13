import React from 'react';
import '../styles/Skills.css';

const Skills = () => {

  const skillCategories = [
    {
      title: 'Programming & Software Development',
      skills: ['Python', 'JavaScript', 'C++', 'HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'REST APIs', 'Bootstrap', 'Responsive Design','Linux/Bash/Shell Scripting']
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS', 'Cisco Networking', 'Cloud Architecture', 'Virtualization', 'Containerization', 'Cloud Security', 'Ubuntu', 'Windows Powershell', 'Nmap', 'Vmware']
    },
    {
      title: 'Database & DevOps',
      skills: ['SQL', 'Database Management', 'CI/CD', 'Version Control (Git)', 'Postman', 'Server-Side Development', 'Full-Stack Development', 'CRUD Operations', 'Authentication & Authorization', 'Opera Cloud PMS']
    },
    {
      title: 'Technical Practices',
      skills: ['User Acceptance Test', 'Code Review', 'Debug & Troubleshoot', 'Documentation', 'IT Support & Operations']
    },
    {
      title: 'Methodologies',
      skills: ['Agile', 'SDLC', 'Scrum', 'Project Management']
    },
    {
      title: 'Soft Skills',
      skills: ['Problem-Solving', 'Teamwork', 'Communication', 'Adaptability', 'Time Management', 'Critical Thinking', 'Leadership']
    }
  ];
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="skills-title"><strong>Technical Skills</strong></h2>
        <div className="skills-grid two-col">
          {Array.from({ length: Math.ceil(skillCategories.length / 2) }).map((_, rowIdx) => (
            <div className="skills-row" key={rowIdx}>
              {skillCategories.slice(rowIdx * 2, rowIdx * 2 + 2).map((category, colIdx) => (
                <div key={colIdx} className="skill-category">
                  <h3>{category.title}</h3>
                  <div className="skill-list">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
