import React from 'react';
import myImage from '../assets/myimg.jpeg';

const Skills = () => {
  const frontendSkills = [
    { name: 'Flutter', desc: 'Cross-platform mobile app development', icon: <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30"><path d="M14.314 0L2.3 12.013l3.7 3.7 15.7-15.7H14.314zM2.3 12.013l3.7 3.7L2.3 19.42z"/></svg> },
    { name: 'Dart', desc: 'Object-oriented programming for Flutter', icon: <i className="fab fa-medapps"></i> },
    { name: 'Firebase', desc: 'Backend services and authentication', icon: <i className="fas fa-fire"></i> },
    { name: 'State Management', desc: 'Provider, Riverpod, BLoC, GetX', icon: <i className="fas fa-cubes"></i> },
  ];

  const backendSkills = [
    { name: 'REST APIs', desc: 'API integration and data handling', icon: <i className="fas fa-plug"></i> },
    { name: 'MongoDB', desc: 'NoSQL database management', icon: <i className="fas fa-database"></i> },
    { name: 'Railway', desc: 'Backend system deployment', icon: <i className="fas fa-train"></i> },
  ];

  const otherExpertise = [
    { name: 'Java', desc: 'Object-oriented programming', icon: <i className="fab fa-java"></i> },
    { name: 'Git & GitHub', desc: 'Version control and collaboration', icon: <i className="fab fa-git-alt"></i> },
    { name: 'Prompt Engineering', desc: 'Advanced AI prompt crafting', icon: <i className="fas fa-brain"></i> },
    { name: 'AI Tools', desc: 'Cursor, Antigravity', icon: <i className="fas fa-robot"></i> },
  ];

  const orbitingIcons = [
    { name: 'Flutter', icon: 'fab fa-flutter' },
    { name: 'Dart', icon: 'fab fa-medapps' }, // Using medapps as dart icon fallback if needed
    { name: 'Firebase', icon: 'fas fa-fire' },
    { name: 'MongoDB', icon: 'fas fa-database' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-label">
          <span className="label-number">03</span>
          <span className="label-text">Skills & Expertise</span>
          <span className="label-line"></span>
        </div>

        <div className="skills-header">
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle">
            I've worked with a variety of technologies in the mobile development world. 
            Here are the tools and frameworks I use to bring ideas to life.
          </p>
        </div>

        {/* Orbiting Icons Section - New requirement */}
        <div className="skills-orbit-container">
          <div className="orbit-central-image">
            <img src={myImage} alt="Central Skills" className="circular-img" />
          </div>
          <div className="orbit-icons">
            {orbitingIcons.map((skill, index) => (
              <div key={skill.name} className={`orbit-icon-wrapper orbit-${index + 1}`}>
                <div className="orbit-icon-card">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title"><i className="fas fa-mobile-alt"></i> Frontend & Mobile</h3>
          <div className="skills-grid">
            {frontendSkills.map(skill => (
              <div key={skill.name} className="skill-card" data-tilt>
                <div className="skill-card-inner">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
                <div className="skill-card-glow"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title"><i className="fas fa-server"></i> Backend</h3>
          <div className="skills-grid">
            {backendSkills.map(skill => (
              <div key={skill.name} className="skill-card" data-tilt>
                <div className="skill-card-inner">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
                <div className="skill-card-glow"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title"><i className="fas fa-laptop-code"></i> Other Expertise</h3>
          <div className="skills-grid">
            {otherExpertise.map(skill => (
              <div key={skill.name} className="skill-card" data-tilt>
                <div className="skill-card-inner">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
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
