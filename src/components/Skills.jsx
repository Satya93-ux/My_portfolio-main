import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Flutter', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-svg-download-png-3030139.png', level: 85 },
    { name: 'Dart', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZdMC_FB3iUt9yQZujx9L8Etp5FdbP75UJQ&s', level: 80 },
    { name: 'Firebase', icon: 'https://toppng.com/uploads/preview/firebase-logo-11609361103azdpszm85x.png', level: 85 },
    { name: 'Android', icon: 'https://pngimg.com/uploads/android_logo/android_logo_PNG27.png', level: 80 },
    { name: 'Git', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gcK7Go3mcVhvMExOd9mEr1cOzS1Il6AvIw&s', level: 85 },
    { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png', level: 75 },
    { name: 'Gemini', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png', level: 90 },
    { name: 'Copilot', icon: 'https://upload.wikimedia.org/wikipedia/it/thumb/5/5c/Logo_Microsoft_Copilot.png/500px-Logo_Microsoft_Copilot.png', level: 90 },
    { name: 'Railway', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Railway_Logo.svg', level: 80 },
    { name: 'MongoDB', icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-mongo-db-3d-icon-png-download-7577996.png', level: 70 },
  ];

  const tools = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Android Studio', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vd09Q4RrVjlqGHjf22dM4_vjEA6X3Q5KqQ&s' },
    { name: 'Figma', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IQCea8hSpiYjBajC-OQu3h1fXr4qesFAog&s' },
    { name: 'GitHub', icon: 'https://pngimg.com/uploads/github/github_PNG83.png', invertOnDark: true },
    { name: 'Postman', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png' },
    { name: 'Slack', icon: 'https://img.icons8.com/color/1200/slack-new.jpg' },
    { name: 'Cursor', icon: 'https://svgstack.com/media/img/cursor-ai-logo-LPdV165213.webp', invertOnDark: true },
    { name: 'Antigravity', icon: 'https://brandlogos.net/wp-content/uploads/2025/12/google_antigravity-logo_brandlogos.net_qu4jc.png' },
    { name: 'Windsurf', icon: 'https://images.seeklogo.com/logo-png/65/1/windsurf-logo-png_seeklogo-653228.png' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-label">
          <span className="label-number">03</span>
          <span className="label-text">Skills</span>
          <span className="label-line"></span>
        </div>

        {/* ── Technical Skills ── */}
        <div className="sk-section-block">
          <div className="sk-block-header">
            <span className="sk-block-icon">
              <i className="fas fa-code"></i>
            </span>
            <h3 className="sk-block-title">Technical Skills</h3>
          </div>

          <div className="sk-skills-grid">
            {technicalSkills.map((skill, index) => (
              <div key={skill.name} className="sk-card glass-card" style={{ '--delay': index }}>
                {/* Top accent bar animated on hover */}
                <div className="sk-card-accent"></div>

                {/* Icon */}
                <div className="sk-icon-wrap">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={skill.name === 'Railway' ? 'theme-icon-invert' : ''}
                  />
                </div>

                {/* Name + percentage */}
                <div className="sk-name-row">
                  <span className="sk-name">{skill.name}</span>
                  <span className="sk-pct">{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="sk-bar-track">
                  <div className="sk-bar-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tools & Technologies ── */}
        <div className="sk-section-block">
          <div className="sk-block-header">
            <span className="sk-block-icon">
              <i className="fas fa-tools"></i>
            </span>
            <h3 className="sk-block-title">Tools &amp; Technologies</h3>
          </div>

          <div className="sk-tools-grid">
            {tools.map((tool, index) => (
              <div key={tool.name} className="sk-tool-card glass-card" style={{ '--delay': index }}>
                <div className="sk-card-accent"></div>
                <div className="sk-icon-wrap sk-icon-wrap--tool">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className={tool.invertOnDark ? 'theme-icon-invert' : ''}
                  />
                </div>
                <span className="sk-tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
