'use client';
import React from 'react';
import '../../styles/globals.css';

const SoftwareEngineeringPage: React.FC = () => {
  return (
    <div className="software-engineering-page">
      <header className="software-engineering-header">
        <h1>Software Engineering Concepts</h1>
        <p>
          Welcome to the Software Engineering concepts page. Here you can learn
          about various software engineering principles and practices.
        </p>
      </header>
      <div className="software-engineering-sections">
        <section className="software-engineering-section">
          <h2>Featured Lessons</h2>
          <ul>
            <li>
              <a href="/lessons/software-engineering/design-patterns">
                Design Patterns
              </a>
            </li>
            <li>
              <a href="/lessons/software-engineering/agile-methodologies">
                Agile Methodologies
              </a>
            </li>
            <li>
              <a href="/lessons/software-engineering/version-control">
                Version Control
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SoftwareEngineeringPage;
