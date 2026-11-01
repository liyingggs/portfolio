
import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      number: '01',
      tone: 'lilac',
      title: 'Analytical & Data Skills',
      subtitle: 'Understanding and interpreting data',
      skills: [
        'Python',
        'Pandas',
        'NumPy',
        'Jupyter Notebook',
        'SQL',
        'Data Cleaning',
        'Exploratory Data Analysis',
      ],
    },
    {
      number: '02',
      tone: 'blue',
      title: 'Visualisation & Development',
      subtitle: 'Communicating insights through visualisation',
      skills: [
        'Matplotlib',
        'Jupyter Notebook',
      ],
    },
    {
      number: '03',
      tone: 'sage',
      title: 'Programming',
      subtitle: 'Writing and maintaining code',
      skills: [
        'JavaScript',
        'Node.js',
        'REACT',
        'HTML',
        'CSS',
      ],
    },

    {
      number: '04',
      tone: 'peach',
      title: 'Cloud & Infrastructure',
      subtitle: 'Understanding cloud computing & IT infrastructure',
      skills: [
        'AWS',
        'Cisco Networking',
        'Linux',
        'VMware',
      ],
    },
    {
      number: '05',
      tone: 'lilac',
      title: 'Development Tools',
      subtitle: 'Tools for coding, collaboration, and testing',
      skills: [
        'Git',
        'Debugging',
        'Documentation',
        'User Acceptance Testing',
      ],
    },
    {
      number: '06',
      tone: 'blue',
      title: 'Professional Skills',
      subtitle: 'Soft skills for effective collaboration & problem-solving',
      skills: [
        'Problem-solving',
        'Critical Thinking',
        'Communication',
        'Teamwork',
        'Adaptability',
        'Time Management',
        'Leadership',
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-heading">
          <p className="skills-eyebrow">
            MY TOOLKIT <span>✳</span>
          </p>

          <h2 className="skills-title">
            A little bit of <span>everything.</span>
          </h2>

          <p className="skills-intro">
            A growing mix of analytical, technical, and interpersonal
            skills shaped by my studies, projects, and work experience.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article
              className={`skill-category skill-${category.tone}`}
              key={category.number}
            >
              <div className="skill-card-top">
                <div>
                  <span className="skill-number">
                    {category.number} / 06
                  </span>

                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                </div>

                <span className="skill-card-mark" aria-hidden="true">
                  ✳
                </span>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span className="skill-badge" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
