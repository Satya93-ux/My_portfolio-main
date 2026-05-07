import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Flutter', percent: '85%', icon: "data:image/png;base64,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" },
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

        <div className="skills-container" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '20px 20px', marginBottom: '25px', overflow: 'hidden' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px', color: '#fff' }}>
            <span style={{ color: '#3b82f6' }}>{`</>`}</span> Technical Skills
          </h3>
          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(130px, 45%, 150px), 1fr))', gap: '12px' }}>
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="skill-card" style={{ background: '#12121a', padding: '15px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.03)', transition: 'transform 0.3s ease' }}>
                <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', height: '30px', alignItems: 'center' }}>
                  <img src={skill.icon} alt={skill.name} style={{ width: '24px', height: '24px', objectFit: 'contain', filter: skill.name === 'GitHub' || skill.name === 'Railway' ? 'brightness(0) invert(1)' : 'none' }} />
                </div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '10px', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{skill.name}</h4>
                <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '2px', marginBottom: '6px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ width: skill.percent, height: '100%', background: 'linear-gradient(90deg, #3b82f6, #a855f7)', borderRadius: '2px' }}></div>
                </div>
                <span style={{ fontSize: '0.7rem', color: '#3b82f6', fontWeight: '700' }}>{skill.percent}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tools-container" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '20px 20px', overflow: 'hidden' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px', color: '#fff' }}>
            <i className="fas fa-tools" style={{ color: '#3b82f6' }}></i> Tools & Technologies
          </h3>
          <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(90px, 30%, 100px), 1fr))', gap: '10px' }}>
            {tools.map((tool) => (
              <div key={tool.name} className="tool-card" style={{ background: '#12121a', padding: '12px 8px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80px', transition: 'transform 0.3s ease' }}>
                <div style={{ marginBottom: '8px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={tool.icon} alt={tool.name} style={{ width: '20px', height: '20px', objectFit: 'contain', filter: tool.name === 'GitHub' || tool.name === 'Cursor' ? 'brightness(0) invert(1)' : 'none' }} />
                </div>
                <h4 style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '500', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tool.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
