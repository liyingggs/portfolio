import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      organization: 'AWS (Amazon Web Services)',
      certs: [
        'AWS Cloud Practitioner Essentials',
        'AWS Knowledge: Cloud Essentials',
        'AWS Certified Cloud Practitioner (CLF-C01)'
      ]
    },
    {
      organization: 'Cisco Net Academy',
      certs: [
        'Switching, Routing, and Wireless Essentials',
        'Enterprise Networking, Security, and Automation',
        'Managing Cisco Network Operating Systems',
        'C++ Essentials 1'
      ]
    },
    {
      organization: 'Singapore Computing Society',
      certs: [
        'SCS-Huawei (ICT Academy) Essential Skills Programme',
        'SCS-Google Career Certificates Programme'
      ]
    },
    {
      organization: 'LinkedIn Learning',
      certs: [
        'Hands-on Introduction: React',
        'Learning Node.js',
        'Building a website with Node.js and Express.js',
        'AWS Certified Cloud Practitioner (CLF-C01) Cert Prep'
      ]
    },
    {
      organization: 'IBM',
      certs: ['Project Management Fundamentals']
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="certifications-title"><strong>Certifications & Achievements</strong></h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <h3 className="cert-title"><strong>{cert.organization}</strong></h3>
              <ul className="cert-list">
                {cert.certs.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="credly-container">
          <a href="https://www.credly.com/users/li-ying-ong/edit#credly" target="_blank" rel="noopener noreferrer" className="credly-button">
            <FaExternalLinkAlt /> View on Credly
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
