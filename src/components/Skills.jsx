import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Flutter', percent: '85%', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: 'Dart', percent: '80%', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: 'Firebase', percent: '85%', icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
    { name: 'Android', percent: '75%', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: 'Git', percent: '85%', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: 'Java', percent: '80%', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: 'Gemini', percent: '90%', icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d473530437e92265e04ca.svg" },
    { name: 'Copilot', percent: '85%', icon: "https://github.githubassets.com/images/modules/site/copilot/copilot-logo.svg" },
    { name: 'Railway', percent: '80%', icon: "https://railway.app/brand/logo-light.svg" },
    { name: 'MongoDB', percent: '85%', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ];

  const tools = [
    { name: 'VS Code', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: 'Android Studio', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    { name: 'Figma', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: 'GitHub', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: 'Postman', icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: 'Slack', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    { name: 'Cursor', icon: "https://mintlify.s3-us-west-1.amazonaws.com/cursor/logo/light.svg" },
    { name: 'Antigravity', icon: "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/rocket.svg" },
    { name: 'Windsurf', icon: "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/water.svg" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-label">
          <span className="label-number">03</span>
          <span className="label-text">Skills</span>
          <span className="label-line"></span>
        </div>

        <div className="skills-container" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '30px 20px', marginBottom: '40px', overflow: 'hidden' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: 'clamp(1.1rem, 4vw, 1.3rem)', fontWeight: '700', marginBottom: '30px', color: '#fff' }}>
            <span style={{ color: '#3b82f6' }}>{`</>`}</span> Technical Skills
          </h3>
          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(140px, 45%, 160px), 1fr))', gap: 'clamp(10px, 3vw, 15px)' }}>
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="skill-card" style={{ background: '#12121a', padding: '20px 15px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.03)', transition: 'transform 0.3s ease' }}>
                <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center', height: '35px', alignItems: 'center' }}>
                  <img src={skill.icon} alt={skill.name} style={{ width: '30px', height: '30px', objectFit: 'contain', filter: skill.name === 'GitHub' || skill.name === 'Railway' ? 'brightness(0) invert(1)' : 'none' }} />
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '12px', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{skill.name}</h4>
                <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '3px', marginBottom: '8px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ width: skill.percent, height: '100%', background: 'linear-gradient(90deg, #3b82f6, #a855f7)', borderRadius: '3px' }}></div>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: '700' }}>{skill.percent}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tools-container" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '30px 20px', overflow: 'hidden' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: 'clamp(1.1rem, 4vw, 1.3rem)', fontWeight: '700', marginBottom: '30px', color: '#fff' }}>
            <i className="fas fa-tools" style={{ color: '#3b82f6' }}></i> Tools & Technologies
          </h3>
          <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(100px, 30%, 110px), 1fr))', gap: 'clamp(8px, 2vw, 12px)' }}>
            {tools.map((tool) => (
              <div key={tool.name} className="tool-card" style={{ background: '#12121a', padding: '15px 8px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90px', transition: 'transform 0.3s ease' }}>
                <div style={{ marginBottom: '10px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={tool.icon} alt={tool.name} style={{ width: '24px', height: '24px', objectFit: 'contain', filter: tool.name === 'GitHub' || tool.name === 'Cursor' ? 'brightness(0) invert(1)' : 'none' }} />
                </div>
                <h4 style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '500', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tool.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
