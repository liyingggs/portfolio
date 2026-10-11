
import React from 'react';
import '../styles/About.css';

const About = () => {
  const highlights = [
    {
      label: 'EDUCATION',
      title: 'SIM-UOL',
      description: 'Data Science & Business Analytics',
      detail: '2026–2029 (Expected)',
    },
    {
      label: 'EXPERIENCE',
      title: 'Business & IT',
      description: 'City Developments Limited',
      detail: 'The Capitol Kempinski Hotel Singapore',
    },
    {
      label: 'INTERESTS',
      title: 'Data & Technology',
      description: 'Data Analytics & Business Analysis',
      detail: 'Python · SQL · Cloud Computing',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-heading">
          <p className="about-eyebrow">GET TO KNOW ME</p>
          <h2 className="about-title">About <span>Me.</span></h2>
          <p className="about-intro">
            Bridging technology, data, and business to solve problems
            and support smarter decisions.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a first-year SIM-UOL undergraduate pursuing Data Science
              & Business Analytics, with a Diploma in Information Technology
              from Republic Polytechnic.
            </p>

            <p>
              Through my experience at City Developments Limited and
              The Capitol Kempinski Hotel Singapore, I've gained exposure
              to business operations, analysis, and enterprise IT.
            </p>

            <p>
              I'm interested in turning data into actionable insights
              while exploring how technology can improve business processes.
            </p>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item, index) => (
            <div className="about-card" key={item.label}>
              <div className="about-card-top">
                <span>{item.label}</span>
                <span className="about-card-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="about-card-detail">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;