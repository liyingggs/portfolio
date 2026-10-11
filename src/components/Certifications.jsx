import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      number: '01',
      organization: 'Amazon Web Services',
      abbreviation: 'AWS',
      certs: [
        'AWS Cloud Practitioner Essentials',
        'AWS Knowledge: Cloud Essentials',
        'AWS Certified Cloud Practitioner (CLF-C01)',
      ],
    },
    {
      number: '02',
      organization: 'Cisco Networking Academy',
      abbreviation: 'CISCO',
      certs: [
        'Switching, Routing, and Wireless Essentials',
        'Enterprise Networking, Security, and Automation',
        'Managing Cisco Network Operating Systems',
        'C++ Essentials 1 & 2',
      ],
    },
    {
      number: '03',
      organization: 'Singapore Computer Society',
      abbreviation: 'SCS',
      certs: [
        'SCS-Huawei ICT Academy Essential Skills Programme',
        'SCS-Google Career Certificates Programme',
      ],
    },
    {
      number: '04',
      organization: 'LinkedIn Learning',
      abbreviation: 'LINKEDIN',
      certs: [
        'Hands-on Introduction: React',
        'Learning Node.js',
        'Building a Website with Node.js and Express.js',
        'AWS Certified Cloud Practitioner (CLF-C01) Cert Prep',
      ],
    },
    {
      number: '05',
      organization: 'IBM',
      abbreviation: 'IBM',
      certs: ['Project Management Fundamentals'],
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="certifications-heading">
          <p className="certifications-eyebrow">CONTINUOUS LEARNING</p>

          <h2 className="certifications-title">
            Certifications & <span>Learning.</span>
          </h2>

          <p className="certifications-intro">
            Courses and credentials that reflect my ongoing development
            across cloud computing, networking, software development,
            and project management.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <article className="cert-card" key={cert.number}>
              <div className="cert-card-top">
                <span className="cert-number">{cert.number}</span>
                <span className="cert-abbreviation">
                  {cert.abbreviation}
                </span>
              </div>

              <h3 className="cert-title">{cert.organization}</h3>

              <ul className="cert-list">
                {cert.certs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="credly-container">
          <p className="credly-description">
            Want to verify my credentials?
          </p>

          <a
            href="https://www.credly.com/users/li-ying-ong/edit#credly"
            target="_blank"
            rel="noopener noreferrer"
            className="credly-button"
          >
            View my Credly profile
            <FaExternalLinkAlt aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;