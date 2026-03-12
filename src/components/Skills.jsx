import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'CSS', 'HTML', 'Linux/Bash', 'SQL', 'C++']
    },
    {
      title: 'Backend & Frameworks',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Database Management', 'Server-Side Development', 'Full-Stack Development']
    },
    {
      title: 'Frontend',
      skills: ['REACT', 'CSS3', 'Responsive Design', 'Bootstrap']
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS', 'Cisco Networking', 'Linux Server Management', 'Cloud Architecture', 'Virtualization', 'Containerization', 'Cloud Security']
    },
    {
      title: 'Tools & Platforms',
      skills: ['GitHub', 'Opera Cloud PMS', 'VSCode', 'Postman', 'CI/CD Pipelines']
    },
    {
        title: 'Soft Skills',
        skills: ['Problem-Solving', 'Teamwork', 'Communication', 'Adaptability', 'Time Management', 'Critical Thinking', 'Collaboration', 'Leadership']
    },
    {
        title: 'Skills & Methodologies:',
        skills: ['Agile Development','Software Development Life Cycle (SDLC)' ,'Scrum', 'Test-Driven Development', 'CI/CD', 'Version Control (Git)', 'Code Review', 'Debugging & Troubleshooting', 'Documentation','IT Support & Operations', 'Project Management']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
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
