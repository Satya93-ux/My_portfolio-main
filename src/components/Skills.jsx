import React from 'react';
import myImage from '../assets/myimg.jpeg';

/* Dart official SVG icon */
const DartSvgIcon = () => (
  <span className="orbit-svg-icon">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zM10 19h9v-9l-9 9z"/>
    </svg>
  </span>
);

/* Flutter SVG icon */
const FlutterSvgIcon = () => (
  <span className="orbit-svg-icon">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.314 0L2.3 12.013l3.7 3.7 15.7-15.7H14.314zM2.3 12.013l3.7 3.7L2.3 19.42z"/>
    </svg>
  </span>
);

const Skills = () => {
  const frontendSkills = [
    {
      name: 'Flutter',
      desc: 'Cross-platform mobile app development',
      icon: <FlutterSvgIcon />,
    },
    {
      name: 'Dart',
      desc: 'Object-oriented programming for Flutter',
      icon: <DartSvgIcon />,
    },
    {
      name: 'Firebase',
      desc: 'Backend services and authentication',
      icon: <i className="fas fa-fire" />,
    },
    {
      name: 'State Management',
      desc: 'Provider, Riverpod, BLoC, GetX',
      icon: <i className="fas fa-cubes" />,
    },
  ];

  const backendSkills = [
    { name: 'REST APIs',  desc: 'API integration and data handling', icon: <i className="fas fa-plug" /> },
    { name: 'MongoDB',   desc: 'NoSQL database management',         icon: <i className="fas fa-database" /> },
    { name: 'Railway',   desc: 'Backend system deployment',         icon: <i className="fas fa-train" /> },
  ];

  const otherExpertise = [
    { name: 'Java',               desc: 'Object-oriented programming', icon: <i className="fab fa-java" /> },
    { name: 'Git & GitHub',       desc: 'Version control and collaboration', icon: <i className="fab fa-git-alt" /> },
    { name: 'Prompt Engineering', desc: 'Advanced AI prompt crafting', icon: <i className="fas fa-brain" /> },
    { name: 'AI Tools',           desc: 'Cursor, Antigravity',         icon: <i className="fas fa-robot" /> },
  ];

  /* 4 icons positioned opposite to each other: Top, Right, Bottom, Left */
  const orbitingIcons = [
    { name: 'Flutter',  icon: <FlutterSvgIcon />, cls: 'orbit-1' },
    { name: 'Dart',     icon: <DartSvgIcon />,    cls: 'orbit-2' },
    { name: 'Firebase', icon: <i className="fas fa-fire" />, cls: 'orbit-3' },
    { name: 'MongoDB',  icon: <i className="fas fa-database" />, cls: 'orbit-4' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-label">
          <span className="label-number">03</span>
          <span className="label-text">Skills &amp; Expertise</span>
          <span className="label-line"></span>
        </div>

        <div className="skills-header">
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle">
            I've worked with a variety of technologies in the mobile development world.{' '}
            Here are the tools and frameworks I use to bring ideas to life.
          </p>
        </div>

        {/* Central image with 4 static icons around it */}
        <div className="skills-orbit-container">
          <div className="orbit-central-image">
            <img src={myImage} alt="Skills center" className="circular-img" />
          </div>

          <div className="orbit-icons">
            {orbitingIcons.map((skill) => (
              <div key={skill.name} className={`orbit-icon-wrapper ${skill.cls}`}>
                <div className="orbit-icon-card">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill cards grid */}
        <div className="skills-category">
          <h3 className="category-title">
            <i className="fas fa-mobile-alt"></i> Frontend &amp; Mobile
          </h3>
          <div className="skills-grid">
            {frontendSkills.map((skill) => (
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
          <h3 className="category-title">
            <i className="fas fa-server"></i> Backend
          </h3>
          <div className="skills-grid">
            {backendSkills.map((skill) => (
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
          <h3 className="category-title">
            <i className="fas fa-laptop-code"></i> Other Expertise
          </h3>
          <div className="skills-grid">
            {otherExpertise.map((skill) => (
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
