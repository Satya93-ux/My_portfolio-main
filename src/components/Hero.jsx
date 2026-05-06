import React, { useEffect, useRef } from 'react';
import myImage from '../assets/myimg.jpeg';

const Hero = () => {
  const roleTextRef = useRef(null);
  
  useEffect(() => {
    const roleText = roleTextRef.current;
    if (!roleText) return;
    
    const roles = [
      'Flutter Development',
      'Mobile App Design',
      'UI/UX Design',
      'Cross-Platform Apps'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        roleText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        roleText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    }
    
    const timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-lines"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge" style={{ maxWidth: '500px', padding: '10px 20px', textTransform: 'none', borderRadius: '50px' }}>
              <span className="badge-dot"></span>
              <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>I build clean, scalable mobile apps and premium websites — delivering complete digital solutions as services.</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">
                <span className="title-word">Flutter</span>
                <span className="title-word highlight">Developer</span>
              </span>
            </h1>

            <div className="hero-info">
              <div className="info-item">
                <span className="info-label">I'm</span>
                <h2 className="info-name">Satyaprakash Upadhyay</h2>
              </div>
              <div className="info-divider"></div>
              <div className="info-item">
                <span className="info-label">Specialized in</span>
                <div className="info-role">
                  <span className="role-text" ref={roleTextRef}>Flutter Development</span>
                  <span className="role-cursor">|</span>
                </div>
              </div>
            </div>

            <p className="hero-description">
              Building clean, scalable mobile apps with modern architecture.
            </p>

            <div className="hero-cta">
              <a href="#work" className="btn-primary">
                <span className="btn-text">View Projects</span>
                <span className="btn-icon">
                  <i className="fas fa-arrow-down"></i>
                </span>
              </a>
              <a href="#contact" className="btn-outline">
                <span className="btn-text">Get In Touch</span>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value" data-value="5">5</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-value" data-value="6">6</span>
                <span className="stat-label">Months Experience</span>
              </div>
              <div className="stat">
                <span className="stat-value" data-value="10">10</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-container">
              <div className="image-frame">
                <div className="image-wrapper">
                  <img src={myImage} alt="Satyaprakash Upadhyay" className="hero-image" />
                </div>
              </div>
              


              <p className="image-tagline">Passionate about mobile innovation.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>

      <div className="hero-social-bar">
        <span className="social-label">Follow Me</span>
        <div className="social-line"></div>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
