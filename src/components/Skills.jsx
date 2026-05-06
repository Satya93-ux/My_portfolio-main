import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Flutter', percent: '85%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" style={{width: '45px'}} /> },
    { name: 'Dart', percent: '80%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" style={{width: '45px'}} /> },
    { name: 'Firebase', percent: '85%', icon: <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" style={{width: '45px'}} /> },
    { name: 'Android', percent: '80%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" style={{width: '45px'}} /> },
    { name: 'Git', percent: '85%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" style={{width: '45px'}} /> },
    { name: 'Java', percent: '85%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{width: '45px'}} /> },
    { name: 'Gemini', percent: '90%', icon: <i className="fas fa-sparkles" style={{fontSize: '40px', color: '#a855f7'}}></i> },
    { name: 'Copilot', percent: '85%', icon: <i className="fas fa-robot" style={{fontSize: '40px', color: '#10b981'}}></i> },
    { name: 'Railway', percent: '80%', icon: <i className="fas fa-train" style={{fontSize: '40px', color: '#fff'}}></i> },
    { name: 'MongoDB', percent: '85%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{width: '45px'}} /> },
  ];

  const tools = [
    { name: 'VS Code', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" style={{width: '35px'}} /> },
    { name: 'Android Studio', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" alt="Android Studio" style={{width: '35px'}} /> },
    { name: 'Figma', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" style={{width: '35px'}} /> },
    { name: 'GitHub', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{width: '35px', filter: 'brightness(0) invert(1)'}} /> },
    { name: 'Postman', icon: <i className="fas fa-paper-plane" style={{fontSize: '35px', color: '#ff6c37'}}></i> },
    { name: 'Slack', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" style={{width: '35px'}} /> },
    { name: 'Cursor', icon: <i className="fas fa-mouse-pointer" style={{fontSize: '35px', color: '#fff'}}></i> },
    { name: 'Antigravity', icon: <i className="fas fa-rocket" style={{fontSize: '35px', color: '#ec4899'}}></i> },
    { name: 'Windsurf', icon: <i className="fas fa-water" style={{fontSize: '35px', color: '#0ea5e9'}}></i> },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-label">
          <span className="label-number">03</span>
          <span className="label-text">Skills</span>
          <span className="label-line"></span>
        </div>

        <div className="skills-container" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '40px', marginBottom: '50px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.5rem', fontWeight: '700', marginBottom: '40px', color: '#fff' }}>
            <span style={{ color: '#3b82f6' }}>{`</>`}</span> Technical Skills
          </h3>
          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '25px' }}>
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="skill-card" style={{ background: '#12121a', padding: '30px 20px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{skill.icon}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>{skill.name}</h4>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '3px', marginBottom: '10px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ width: skill.percent, height: '100%', background: 'linear-gradient(90deg, #3b82f6, #a855f7)', borderRadius: '3px' }}></div>
                </div>
                <span style={{ fontSize: '0.85rem', color: '#3b82f6', fontWeight: '700' }}>{skill.percent}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tools-container" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '40px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.5rem', fontWeight: '700', marginBottom: '40px', color: '#fff' }}>
            <i className="fas fa-tools" style={{ color: '#3b82f6' }}></i> Tools & Technologies
          </h3>
          <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '20px' }}>
            {tools.map((tool) => (
              <div key={tool.name} className="tool-card" style={{ background: '#12121a', padding: '20px 10px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <div style={{ marginBottom: '15px' }}>{tool.icon}</div>
                <h4 style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '500' }}>{tool.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
