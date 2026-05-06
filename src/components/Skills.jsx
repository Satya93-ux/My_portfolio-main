import React from 'react';

const Skills = () => {
  // Dynamic icon mapping for easy replacement
  const iconMap = {
    flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    firebase: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    android: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    androidstudio: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    slack: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  };

  const technicalSkills = [
    { name: 'Flutter', percent: '85%', icon: iconMap.flutter },
    { name: 'Dart', percent: '80%', icon: iconMap.dart },
    { name: 'Firebase', percent: '85%', icon: iconMap.firebase },
    { name: 'Android', percent: '80%', icon: iconMap.android },
    { name: 'Git', percent: '85%', icon: iconMap.git },
    { name: 'Java', percent: '85%', icon: iconMap.java },
    { name: 'Gemini', percent: '90%', icon: 'fas fa-sparkles', color: '#a855f7', isFontAwesome: true },
    { name: 'Copilot', percent: '85%', icon: 'fas fa-robot', color: '#10b981', isFontAwesome: true },
    { name: 'Railway', percent: '80%', icon: 'fas fa-train', color: '#fff', isFontAwesome: true },
    { name: 'MongoDB', percent: '85%', icon: iconMap.mongodb },
  ];

  const tools = [
    { name: 'VS Code', icon: iconMap.vscode },
    { name: 'Android Studio', icon: iconMap.androidstudio },
    { name: 'Figma', icon: iconMap.figma },
    { name: 'GitHub', icon: iconMap.github, invert: true },
    { name: 'Postman', icon: 'fas fa-paper-plane', color: '#ff6c37', isFontAwesome: true },
    { name: 'Slack', icon: iconMap.slack },
    { name: 'Cursor', icon: 'fas fa-mouse-pointer', color: '#fff', isFontAwesome: true },
    { name: 'Antigravity', icon: 'fas fa-rocket', color: '#ec4899', isFontAwesome: true },
    { name: 'Windsurf', icon: 'fas fa-water', color: '#0ea5e9', isFontAwesome: true },
  ];

  const renderIcon = (skill, size = '35px') => {
    if (skill.isFontAwesome) {
      return <i className={skill.icon} style={{ fontSize: size, color: skill.color || '#fff' }}></i>;
    }
    return <img src={skill.icon} alt={skill.name} style={{ width: size, filter: skill.invert ? 'brightness(0) invert(1)' : 'none' }} />;
  };

  return (
    <section id="skills" className="skills" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', margin: '0 auto 15px', borderRadius: '2px' }}></div>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Skills</h2>
        </div>

        <div className="skills-container" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '30px', marginBottom: '40px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', fontWeight: '700', marginBottom: '30px', color: '#fff' }}>
            <span style={{ color: '#3b82f6' }}>{`</>`}</span> Technical Skills
          </h3>
          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '20px' }}>
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="skill-card" style={{ background: '#12121a', padding: '20px 15px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.03)', transition: '0.3s' }}>
                <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{renderIcon(skill, '32px')}</div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '15px', color: '#fff' }}>{skill.name}</h4>
                <div style={{ width: '100%', height: '4px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '2px', marginBottom: '8px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ width: skill.percent, height: '100%', background: 'linear-gradient(90deg, #3b82f6, #a855f7)', borderRadius: '2px' }}></div>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: '700' }}>{skill.percent}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tools-container" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '30px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.2rem', fontWeight: '700', marginBottom: '30px', color: '#fff' }}>
            <i className="fas fa-tools" style={{ color: '#3b82f6' }}></i> Tools & Technologies
          </h3>
          <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '15px' }}>
            {tools.map((tool) => (
              <div key={tool.name} className="tool-card" style={{ background: '#12121a', padding: '15px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100px' }}>
                <div style={{ marginBottom: '12px' }}>{renderIcon(tool, '28px')}</div>
                <h4 style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '500' }}>{tool.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
