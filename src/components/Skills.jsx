import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Flutter', percent: '85%', icon: "https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-svg-download-png-3030139.png" },
    { name: 'Dart', percent: '80%', icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZdMC_FB3iUt9yQZujx9L8Etp5FdbP75UJQ&s" },
    { name: 'Firebase', percent: '85%', icon: "https://toppng.com/uploads/preview/firebase-logo-11609361103azdpszm85x.png" },
    { name: 'Android', percent: '75%', icon: "https://pngimg.com/uploads/android_logo/android_logo_PNG27.png" },
    { name: 'Git', percent: '85%', icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gcK7Go3mcVhvMExOd9mEr1cOzS1Il6AvIw&s" },
    { name: 'Java', percent: '80%', icon: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png" },
    { name: 'Gemini', percent: '90%', icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" },
    { name: 'Copilot', percent: '85%', icon: "https://upload.wikimedia.org/wikipedia/it/thumb/5/5c/Logo_Microsoft_Copilot.png/500px-Logo_Microsoft_Copilot.png" },
    { name: 'Railway', percent: '80%', icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Railway_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
    { name: 'MongoDB', percent: '85%', icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-mongo-db-3d-icon-png-download-7577996.png" },
  ];

  const tools = [
    { name: 'VS Code', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: 'Android Studio', icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vd09Q4RrVjlqGHjf22dM4_vjEA6X3Q5KqQ&s" },
    { name: 'Figma', icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IQCea8hSpiYjBajC-OQu3h1fXr4qesFAog&s" },
    { name: 'GitHub', icon: "https://pngimg.com/uploads/github/github_PNG83.png" },
    { name: 'Postman', icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" },
    { name: 'Slack', icon: "https://img.icons8.com/color/1200/slack-new.jpg" },
    { name: 'Cursor', icon: "https://svgstack.com/media/img/cursor-ai-logo-LPdV165213.webp" },
    { name: 'Antigravity', icon: "https://brandlogos.net/wp-content/uploads/2025/12/google_antigravity-logo_brandlogos.net_qu4jc.png" },
    { name: 'Windsurf', icon: "https://images.seeklogo.com/logo-png/65/1/windsurf-logo-png_seeklogo-653228.png" },
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
