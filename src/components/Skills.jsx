import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Flutter', icon: "https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-svg-download-png-3030139.png", level: 85 },
    { name: 'Dart', icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZdMC_FB3iUt9yQZujx9L8Etp5FdbP75UJQ&s", level: 80 },
    { name: 'Firebase', icon: "https://toppng.com/uploads/preview/firebase-logo-11609361103azdpszm85x.png", level: 85 },
    { name: 'Android', icon: "https://pngimg.com/uploads/android_logo/android_logo_PNG27.png", level: 80 },
    { name: 'Git', icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gcK7Go3mcVhvMExOd9mEr1cOzS1Il6AvIw&s", level: 85 },
    { name: 'Java', icon: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png", level: 75 },
    { name: 'Gemini', icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png", level: 90 },
    { name: 'Copilot', icon: "https://upload.wikimedia.org/wikipedia/it/thumb/5/5c/Logo_Microsoft_Copilot.png/500px-Logo_Microsoft_Copilot.png", level: 90 },
    { name: 'Railway', icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Railway_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original", level: 80 },
    { name: 'MongoDB', icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-mongo-db-3d-icon-png-download-7577996.png", level: 70 },
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
    <section id="skills" className="skills" style={{ padding: 'var(--section-padding) 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '6px 20px', 
            background: 'rgba(var(--primary-rgb), 0.1)', 
            borderRadius: '50px', 
            color: 'var(--primary)',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '15px'
          }}>
            What I Know
          </div>
          <div style={{ width: '60px', height: '4px', background: 'var(--gradient-primary)', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>

        <div className="skills-layout" style={{ 
          background: 'var(--bg-card)', 
          border: '1px solid var(--border-color)', 
          borderRadius: 'var(--radius-xl)', 
          padding: '40px clamp(20px, 5vw, 60px)',
          boxShadow: 'var(--shadow-lg)'
        }}>
          
          {/* Technical Skill Section */}
          <div className="skills-section" style={{ marginBottom: '60px' }}>
            <h3 style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              fontSize: '1.4rem', 
              fontWeight: '800', 
              marginBottom: '35px', 
              color: 'var(--text-primary)' 
            }}>
              <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>{`</>`}</span> Technical Skill
            </h3>
            
            <div className="skills-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', 
              gap: '20px' 
            }}>
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="skill-card glass-card" style={{ 
                  padding: '24px 16px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'var(--transition-normal)'
                }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                  }}>
                    <img src={skill.icon} alt={skill.name} className={skill.name === 'GitHub' || skill.name === 'Railway' ? 'theme-icon-invert' : ''} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>{skill.name}</h4>
                  
                  <div style={{ width: '100%', marginTop: 'auto' }}>
                    <div style={{ width: '100%', height: '5px', background: 'var(--border-color-muted)', borderRadius: '10px', overflow: 'hidden', marginBottom: '8px' }}>
                      <div style={{ 
                        width: `${skill.level}%`, 
                        height: '100%', 
                        background: 'var(--gradient-primary)', 
                        borderRadius: '10px'
                      }}></div>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '800', display: 'block', textAlign: 'center' }}>{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technology Section */}
          <div className="tools-section">
            <h3 style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              fontSize: '1.4rem', 
              fontWeight: '800', 
              marginBottom: '35px', 
              color: 'var(--text-primary)' 
            }}>
              <i className="fas fa-tools" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i> Tools & Technology
            </h3>

            <div className="tools-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', 
              gap: '16px' 
            }}>
              {tools.map((tool, index) => (
                <div key={tool.name} className="tool-card glass-card" style={{ 
                  padding: '20px 12px', 
                  textAlign: 'center', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '10px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                  }}>
                    <img src={tool.icon} alt={tool.name} className={tool.name === 'GitHub' || tool.name === 'Cursor' ? 'theme-icon-invert' : ''} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600' }}>{tool.name}</h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
