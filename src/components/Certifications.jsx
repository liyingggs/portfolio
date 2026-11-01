
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Certifications.css';

const certifications = [
  {
    number: '01',
    organization: 'Amazon Web Services',
    abbreviation: 'AWS',
    tone: 'lilac',
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
    tone: 'blue',
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
    tone: 'sage',
    certs: [
      'SCS-Huawei ICT Academy Essential Skills Programme',
      'SCS-Google Career Certificates Programme',
    ],
  },
  {
    number: '04',
    organization: 'LinkedIn Learning',
    abbreviation: 'LINKEDIN',
    tone: 'peach',
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
    tone: 'lilac',
    certs: ['Project Management Fundamentals'],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="certifications-heading">
          <p className="certifications-eyebrow">
            ALWAYS LEARNING <span>✳</span>
          </p>

          <h2 className="certifications-title">
            Learning never <span>stops.</span>
          </h2>

          <p className="certifications-intro">
            A collection of courses and credentials reflecting my
            learning journey across technology, cloud computing,
            networking, and project management.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <article
              className={`cert-card cert-${cert.tone}`}
              key={cert.number}
            >
              <div className="cert-card-top">
                <span className="cert-number">{cert.number}</span>
                <span className="cert-abbreviation">
                  {cert.abbreviation}
                </span>
              </div>

              <h3 className="cert-title">{cert.organization}</h3>

              <div className="cert-card-divider" />

              <ul className="cert-list">
                {cert.certs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <span className="cert-count">
                {cert.certs.length} {cert.certs.length === 1 ? 'credential' : 'credentials'}
              </span>
            </article>
          ))}
        </div>

        <div className="credly-container">
          <div className="credly-text">
            <span className="credly-icon">✳</span>
            <div>
              <h3>Want to see more?</h3>
              <p>Explore my credentials and learning achievements.</p>
            </div>
          </div>

          <a
            href="https://www.credly.com/users/li-ying-ong/edit#credly"
            target="_blank"
            rel="noopener noreferrer"
            className="credly-button"
          >
            View Credly profile
            <FaExternalLinkAlt aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
