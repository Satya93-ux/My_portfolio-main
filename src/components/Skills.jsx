import React from 'react';

const Skills = () => {
  const frontendSkills = [
    {
      name: 'Flutter',
      desc: 'Cross-platform mobile app development',
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" style={{width: '40px'}} />,
    },
    {
      name: 'Dart',
      desc: 'Object-oriented programming for Flutter',
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" style={{width: '40px'}} />,
    },
    {
      name: 'Firebase',
      desc: 'Backend services and authentication',
      icon: <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" style={{width: '40px'}} />,
    },
    {
      name: 'State Management',
      desc: 'Provider, Riverpod, BLoC, GetX',
      icon: <i className="fas fa-cubes" style={{fontSize: '30px', color: '#60a5fa'}}></i>,
    },
  ];

  const backendSkills = [
    { 
      name: 'REST APIs',  
      desc: 'API integration and data handling', 
      icon: <i className="fas fa-plug" style={{fontSize: '30px', color: '#10b981'}}></i> 
    },
    { 
      name: 'MongoDB',   
      desc: 'NoSQL database management',         
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{width: '40px'}} /> 
    },
    { 
      name: 'Node.js',   
      desc: 'Server-side JavaScript runtime',         
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" style={{width: '40px'}} /> 
    },
  ];

  const otherExpertise = [
    { 
      name: 'Java',               
      desc: 'Object-oriented programming', 
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{width: '40px'}} /> 
    },
    { 
      name: 'Git & GitHub',       
      desc: 'Version control and collaboration', 
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{width: '40px', filter: 'brightness(0) invert(1)'}} /> 
    },
    { 
      name: 'Prompt Engineering', 
      desc: 'Advanced AI prompt crafting', 
      icon: <i className="fas fa-brain" style={{fontSize: '30px', color: '#ec4899'}}></i> 
    },
    { 
      name: 'AI Tools',           
      desc: 'Cursor, Antigravity',         
      icon: <i className="fas fa-robot" style={{fontSize: '30px', color: '#f59e0b'}}></i> 
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-label">
          <span className="label-number">03</span>
          <span className="label-text">Skills &amp; Expertise</span>
          <span className="label-line"></span>
        </div>

        <div className="skills-header">
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle">
            I've worked with a variety of technologies in the mobile development world.{' '}
            Here are the tools and frameworks I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-category">
          <h3 className="category-title">
            <i className="fas fa-mobile-alt"></i> Frontend &amp; Mobile
          </h3>
          <div className="skills-grid">
            {frontendSkills.map((skill) => (
              <div key={skill.name} className="skill-card" data-tilt>
                <div className="skill-card-inner">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
                <div className="skill-card-glow"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">
            <i className="fas fa-server"></i> Backend
          </h3>
          <div className="skills-grid">
            {backendSkills.map((skill) => (
              <div key={skill.name} className="skill-card" data-tilt>
                <div className="skill-card-inner">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
                <div className="skill-card-glow"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">
            <i className="fas fa-laptop-code"></i> Other Expertise
          </h3>
          <div className="skills-grid">
            {otherExpertise.map((skill) => (
              <div key={skill.name} className="skill-card" data-tilt>
                <div className="skill-card-inner">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
                <div className="skill-card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
