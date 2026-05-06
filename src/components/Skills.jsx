import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Flutter', percent: '85%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" style={{width: '45px'}} /> },
    { name: 'Dart', percent: '80%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" style={{width: '45px'}} /> },
    { name: 'Firebase', percent: '85%', icon: <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" style={{width: '45px'}} /> },
    { name: 'REST APIs', percent: '80%', icon: <i className="fas fa-plug" style={{fontSize: '40px', color: '#10b981'}}></i> },
    { name: 'State Management', percent: '85%', icon: <i className="fas fa-cubes" style={{fontSize: '40px', color: '#60a5fa'}}></i> },
    { name: 'Java', percent: '75%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{width: '45px'}} /> },
    { name: 'MongoDB', percent: '75%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{width: '45px'}} /> },
    { name: 'Prompt Engineering', percent: '90%', icon: <i className="fas fa-brain" style={{fontSize: '40px', color: '#ec4899'}}></i> },
  ];

  const tools = [
    { name: 'Node.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" style={{width: '40px'}} /> },
    { name: 'Git & GitHub', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{width: '40px', filter: 'brightness(0) invert(1)'}} /> },
    { name: 'Cursor', icon: <i className="fas fa-mouse-pointer" style={{fontSize: '40px', color: '#fff'}}></i> },
    { name: 'Antigravity', icon: <i className="fas fa-rocket" style={{fontSize: '40px', color: '#ec4899'}}></i> },
    { name: 'Railway', icon: <i className="fas fa-train" style={{fontSize: '40px', color: '#fff'}}></i> },
    { name: 'VS Code', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" style={{width: '40px'}} /> },
    { name: 'Postman', icon: <i className="fas fa-paper-plane" style={{fontSize: '40px', color: '#ff6c37'}}></i> },
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
          <h3 className="category-title" style={{ marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-code" style={{ color: '#8b5cf6' }}></i> Core Skills
          </h3>
          <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '25px' }}>
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="skill-card" data-tilt style={{ 
                padding: '25px 20px', 
                textAlign: 'center', 
                background: 'rgba(15, 23, 42, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}>
                <div className="skill-card-inner">
                  <div className="skill-icon" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', height: '55px', alignItems: 'center' }}>
                    {skill.icon}
                  </div>
                  <h3 className="skill-name" style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '20px', letterSpacing: '0.5px', color: '#f8fafc' }}>{skill.name}</h3>
                  <div style={{ width: '100%', background: 'rgba(255,255,255,0.05)', height: '8px', borderRadius: '4px', marginBottom: '12px', overflow: 'hidden' }}>
                    <div style={{ width: skill.percent, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)', height: '100%', borderRadius: '4px' }}></div>
                  </div>
                  <p className="skill-desc" style={{ color: '#a78bfa', fontWeight: '700', fontSize: '0.95rem' }}>{skill.percent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category" style={{ marginTop: '60px' }}>
          <h3 className="category-title" style={{ marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-tools" style={{ color: '#8b5cf6' }}></i> Tools &amp; Technologies
          </h3>
          <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '20px' }}>
            {tools.map((tool) => (
              <div key={tool.name} className="skill-card" data-tilt style={{ 
                padding: '20px 15px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: 'rgba(15, 23, 42, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                minHeight: '130px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}>
                <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '45px' }}>
                  {tool.icon}
                </div>
                <h3 style={{ fontSize: '0.95rem', color: '#cbd5e1', textAlign: 'center', margin: 0, fontWeight: '500', letterSpacing: '0.3px' }}>{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
