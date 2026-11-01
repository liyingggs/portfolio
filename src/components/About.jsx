
import React from 'react';
import '../styles/About.css';

const About = () => {
  const traits = [
    {
      number: '01',
      title: 'Analytical',
      description:
        'I enjoy exploring information, spotting patterns, and turning findings into meaningful insights.',
      tone: 'lilac',
      symbol: '↗',
    },
    {
      number: '02',
      title: 'Curious',
      description:
        'I like learning how things work and exploring how technology can solve everyday problems.',
      tone: 'blue',
      symbol: '✳',
    },
    {
      number: '03',
      title: 'Adaptable',
      description:
        'My experiences across IT and business have taught me to approach challenges from different perspectives.',
      tone: 'sage',
      symbol: '⌁',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-copy">
            <p className="about-eyebrow">
              A LITTLE INTRODUCTION <span>✳</span>
            </p>

            <h2 className="about-title">
              More than just<br />
              <span>numbers & code.</span>
            </h2>

            <p className="about-lead">
              I'm an aspiring data analyst pursuing a degree in Data Science & Business Analytics,
              with experience in business operations & enterprise IT. 
            </p>

            <div className="about-description">
              <p>
               I would like to leverage technology and analytical thinking to enhance data utilization and facilitate effective decision-making. 
              </p>
            </div>
          </div>

          <div className="about-traits">
            <div className="about-traits-heading">
              <span>HOW I APPROACH THINGS</span>
              <span className="about-sparkle">✳</span>
            </div>

            {traits.map((trait) => (
              <article
                className={`about-trait about-trait-${trait.tone}`}
                key={trait.number}
              >
                <div className="about-trait-symbol" aria-hidden="true">
                  {trait.symbol}
                </div>

                <div className="about-trait-content">
                  <div className="about-trait-meta">
                    <span>{trait.number}</span>
                    <span>THE APPROACH</span>
                  </div>

                  <h3>{trait.title}</h3>
                  <p>{trait.description}</p>
                </div>
              </article>
            ))}

            <p className="about-side-note">
              A mix of perspectives, one curious mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
