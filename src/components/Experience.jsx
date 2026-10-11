import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      number: '01',
      category: 'PROFESSIONAL EXPERIENCE',
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
      category: 'PROFESSIONAL EXPERIENCE',
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
    {
      number: '03',
      category: 'EDUCATION',
      title: 'BSc Data Science & Business Analytics',
      organization: 'SIM – University of London (SIM-UOL)',
      duration: '2026–2029 · Expected',
      highlights: [
        'Developing knowledge in data science, analytics, and quantitative problem-solving.',
        'Building a foundation for applying analytical methods to business decisions and practical problems.',
      ],
    },
    {
      number: '04',
      category: 'EDUCATION',
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

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-heading">
          <p className="experience-eyebrow">MY JOURNEY</p>

          <h2 className="experience-title">
            Experience & <span>Education.</span>
          </h2>

          <p className="experience-intro">
            From IT infrastructure and software development to business
            analytics, my journey combines technical experience with
            a growing interest in data-driven decision-making.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <article className="experience-card" key={exp.number}>
              <div className="experience-card-top">
                <span className="experience-number">{exp.number}</span>
                <span className="experience-category">
                  {exp.category}
                </span>
              </div>

              <h3 className="experience-role">{exp.title}</h3>

              <p className="experience-org">{exp.organization}</p>

              <p className="experience-duration">{exp.duration}</p>

              <ul className="experience-highlights">
                {exp.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;