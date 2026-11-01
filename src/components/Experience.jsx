
import React from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    number: '01',
    category: 'WORK EXPERIENCE',
    title: 'Temporary Admin & Business Analyst',
    organization: 'City Developments Limited (CDL)',
    duration: '2026',
    highlights: [
      'Contributed to a tenant collaboration portal prototype for prospective and existing tenants.',
      'Worked on making fit-out guidelines, manuals, and essential tenancy information easier to access.',
      'Explored how digital solutions can improve information accessibility and the tenant experience.',
    ],
  },
  {
    number: '02',
    category: 'INTERNSHIP',
    title: 'IT Intern',
    organization: 'The Capitol Kempinski Hotel Singapore',
    duration: '20-week internship · 2025–2026',
    highlights: [
      'Supported IT operations through workstation setup, troubleshooting, and user account and access management.',
      'Gained hands-on exposure to hotel systems, including OPERA Cloud and Infrasys POS.',
      'Explored an AWS FSx-based file server solution to support shared-drive backup and infrastructure resilience.',
      'Assisted with technical support requests involving enterprise applications, devices, and infrastructure.',
    ],
  },
];

const education = [
  {
    number: '01',
    title: 'BSc Data Science & Business Analytics',
    organization: 'SIM – University of London (SIM-UOL)',
    duration: '2026–2029 · Expected',
    highlights: [
      'Developing knowledge in data science, analytics, and quantitative problem-solving.',
      'Building a foundation for applying analytical methods to business decisions and practical problems.',
    ],
  },
  {
    number: '02',
    title: 'Diploma in Information Technology',
    organization: 'Republic Polytechnic',
    duration: 'Graduated in 2026',
    highlights: [
      'Studied cloud computing, enterprise IT solutions, networking, and software development.',
      'Applied Python, JavaScript, SQL, and web technologies in practical projects.',
      'Gained exposure to cloud infrastructure, DevOps concepts, and collaborative software development.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-heading">
          <p className="experience-eyebrow">THE JOURNEY SO FAR ✳</p>

          <h2 className="experience-title">
            Where I've been <span>& how it's going</span>
          </h2>

          <p className="experience-intro">
            A combination of professional experience, hands-on learning,
            and academic foundations that continues to shape my interests.
          </p>
        </div>

        <div className="experience-group">
          <div className="experience-group-heading">
            <span className="experience-group-number">01</span>
            <h3>Professional Experience</h3>
            <span className="experience-group-line" />
          </div>

          <div className="experience-timeline">
            {experiences.map((exp) => (
              <article className="experience-card" key={exp.number}>
                <div className="experience-card-top">
                  <span className="experience-category">{exp.category}</span>
                  <span className="experience-duration">{exp.duration}</span>
                </div>

                <h4 className="experience-role">{exp.title}</h4>
                <p className="experience-org">{exp.organization}</p>

                <ul className="experience-highlights">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="experience-group education-group">
          <div className="experience-group-heading">
            <span className="experience-group-number">02</span>
            <h3>Education</h3>
            <span className="experience-group-line" />
          </div>

          <div className="experience-timeline">
            {education.map((item) => (
              <article className="experience-card education-card" key={item.number}>
                <div className="experience-card-top">
                  <span className="experience-category">ACADEMIC BACKGROUND</span>
                  <span className="experience-duration">{item.duration}</span>
                </div>

                <h4 className="experience-role">{item.title}</h4>
                <p className="experience-org">{item.organization}</p>

                <ul className="experience-highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
