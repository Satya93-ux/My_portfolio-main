import React, { useEffect, useRef } from 'react';
import myImage from '../assets/myimg.jpeg';

const Hero = () => {
  const roleTextRef = useRef(null);
  
  useEffect(() => {
    const roleText = roleTextRef.current;
    if (!roleText) return;
    
    const roles = [
      'Flutter Developer ',
      'AI Web Developer ',
      'Prompt Engineer ',
      'Vibe Coder '
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
      <div className="container">
        <div className="hero-content">
          
          {/* Content on the Left */}
          <div className="hero-left">
            {/* Available for Work Badge */}
            <div className="hero-badge-premium">
              <span className="badge-dot"></span>
              <span className="badge-text">Available for Work</span>
            </div>
            
            <p className="hero-greeting">Hello, I'm</p>
            
            <h1 className="hero-name-title">
              Satyaprakash Upadhyay
            </h1>

            <h2 className="hero-role-subtitle">
              I'm a <span ref={roleTextRef} className="role-typing"></span>
            </h2>

            <p className="hero-main-description">
              Passionate Flutter Developer and Vibe Coder crafting beautiful mobile applications. I also build full-stack websites and robust backend systems with the power of AI. Turning ideas into reality, one widget and prompt at a time.
            </p>

            <div className="hero-actions-group">
              <a href="#work" className="btn-primary-gradient">
                View My Work <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn-outline-premium">
                Let's Talk <i className="fas fa-comment-dots"></i>
              </a>
            </div>

            <div className="hero-stats-row">
              <div className="hero-stat-item">
                <span className="stat-num">5+</span>
                <p className="stat-desc">Projects</p>
              </div>
              <div className="stat-divider"></div>
              <div className="hero-stat-item">
                <span className="stat-num">10+</span>
                <p className="stat-desc">Clients</p>
              </div>
              <div className="stat-divider"></div>
              <div className="hero-stat-item">
                <span className="stat-num">6+</span>
                <p className="stat-desc">Months Exp</p>
              </div>
            </div>
          </div>

          {/* Profile Image on the Right */}
          <div className="hero-right">
            <div className="hero-image-frame-container">
              {/* Circular Image Frame */}
              <div className="hero-profile-circle">
                <img 
                  src={myImage} 
                  alt="Satyaprakash Upadhyay" 
                  className="hero-profile-img"
                />
              </div>
              
              {/* Decorative dotted circle */}
              <div className="hero-decorative-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
