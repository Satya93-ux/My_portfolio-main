import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Flutter', percent: '85%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" style={{width: '40px'}} /> },
    { name: 'Dart', percent: '80%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" style={{width: '40px'}} /> },
    { name: 'Firebase', percent: '85%', icon: <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" style={{width: '40px'}} /> },
    { name: 'REST APIs', percent: '80%', icon: <i className="fas fa-plug" style={{fontSize: '35px', color: '#10b981'}}></i> },
    { name: 'State Management', percent: '85%', icon: <i className="fas fa-cubes" style={{fontSize: '35px', color: '#60a5fa'}}></i> },
    { name: 'Java', percent: '75%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{width: '40px'}} /> },
    { name: 'MongoDB', percent: '75%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{width: '40px'}} /> },
    { name: 'Prompt Engineering', percent: '90%', icon: <i className="fas fa-brain" style={{fontSize: '35px', color: '#ec4899'}}></i> },
  ];

  const tools = [
    { name: 'Node.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" style={{width: '35px'}} /> },
    { name: 'Git & GitHub', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{width: '35px', filter: 'brightness(0) invert(1)'}} /> },
    { name: 'Cursor', icon: <i className="fas fa-mouse-pointer" style={{fontSize: '35px', color: '#fff'}}></i> },
    { name: 'Antigravity', icon: <i className="fas fa-rocket" style={{fontSize: '35px', color: '#ec4899'}}></i> },
    { name: 'Railway', icon: <i className="fas fa-train" style={{fontSize: '35px', color: '#fff'}}></i> },
    { name: 'VS Code', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" style={{width: '35px'}} /> },
    { name: 'Postman', icon: <i className="fas fa-paper-plane" style={{fontSize: '35px', color: '#ff6c37'}}></i> },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-label">
          <span className="label-number">03</span>
          <span className="label-text">Skills &amp; Tools</span>
          <span className="label-line"></span>
        </div>

        <div className="skills-header">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            I've worked with a variety of technologies in the mobile development world.
            Here are the tools and frameworks I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-category">
          <h3 className="category-title" style={{ marginBottom: '30px' }}>
            <i className="fas fa-code"></i> Core Skills
          </h3>
          <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="skill-card" data-tilt style={{ padding: '20px', textAlign: 'center' }}>
                <div className="skill-card-inner">
                  <div className="skill-icon" style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{skill.icon}</div>
                  <h3 className="skill-name" style={{ fontSize: '1.1rem', marginBottom: '15px' }}>{skill.name}</h3>
                  <div style={{ width: '100%', background: '#1e1e2d', height: '6px', borderRadius: '3px', marginBottom: '10px', overflow: 'hidden' }}>
                    <div style={{ width: skill.percent, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', height: '100%' }}></div>
                  </div>
                  <p className="skill-desc" style={{ color: '#8b5cf6', fontWeight: '600', fontSize: '0.9rem' }}>{skill.percent}</p>
                </div>
                <div className="skill-card-glow"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category" style={{ marginTop: '60px' }}>
          <h3 className="category-title" style={{ marginBottom: '30px' }}>
            <i className="fas fa-tools"></i> Tools &amp; Technologies
          </h3>
          <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '20px' }}>
            {tools.map((tool) => (
              <div key={tool.name} className="skill-card" data-tilt style={{ padding: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>{tool.icon}</div>
                <h3 style={{ fontSize: '0.9rem', color: '#a0a0b0', textAlign: 'center', margin: 0 }}>{tool.name}</h3>
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
