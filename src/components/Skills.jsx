import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Flutter', percent: '85%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" style={{width: '50px'}} /> },
    { name: 'Dart', percent: '80%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" style={{width: '50px'}} /> },
    { name: 'Firebase', percent: '85%', icon: <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" style={{width: '50px'}} /> },
    { name: 'Android', percent: '80%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" style={{width: '50px'}} /> },
    { name: 'Git', percent: '85%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" style={{width: '50px'}} /> },
    { name: 'Java', percent: '85%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{width: '50px'}} /> },
    { name: 'MongoDB', percent: '85%', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{width: '50px'}} /> },
    { name: 'REST APIs', percent: '80%', icon: <i className="fas fa-plug" style={{fontSize: '45px', color: '#10b981'}}></i> },
  ];

  return (
    <section id="skills" className="skills" style={{ padding: '100px 0', background: '#0a0a0f' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem', color: '#f8fafc', fontWeight: 700 }}>
            <i className="fas fa-code" style={{ color: '#3b82f6' }}></i>
            Technical Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '30px' 
        }}>
          {technicalSkills.map((skill) => (
            <div key={skill.name} className="skill-card" style={{ 
              background: '#11111a', 
              padding: '40px 20px', 
              borderRadius: '20px', 
              textAlign: 'center', 
              border: '1px solid rgba(255, 255, 255, 0.03)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}>
              {/* Icon */}
              <div style={{ marginBottom: '25px', display: 'flex', justifyContent: 'center', height: '60px', alignItems: 'center' }}>
                {skill.icon}
              </div>
              
              {/* Name */}
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: '25px' }}>{skill.name}</h3>
              
              {/* Progress Bar */}
              <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginBottom: '15px', overflow: 'hidden' }}>
                <div style={{ 
                  width: skill.percent, 
                  height: '100%', 
                  background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', 
                  boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
                }}></div>
              </div>
              
              {/* Percentage */}
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#3b82f6' }}>{skill.percent}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
