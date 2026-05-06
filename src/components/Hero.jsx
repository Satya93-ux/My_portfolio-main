import React, { useEffect, useRef } from 'react';
import myImage from '../assets/myimg.jpeg';

const Hero = () => {
  const roleTextRef = useRef(null);
  
  useEffect(() => {
    const roleText = roleTextRef.current;
    if (!roleText) return;
    
    const roles = [
      'Vibe ',
      'Flutter Developer ',
      'Mobile Specialist ',
      'Clean Coder '
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
            <div className="hero-badge" style={{ 
              maxWidth: 'fit-content', 
              padding: '8px 16px', 
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px'
            }}>
              <span className="badge-dot" style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></span>
              <span style={{ fontWeight: 500, fontSize: '0.85rem' }}>Available for Work</span>
            </div>
            
            <p className="hero-hello" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Hello, I'm</p>
            <h1 className="hero-name" style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              fontWeight: '800', 
              marginBottom: '15px',
              color: '#8b5cf6' 
            }}>
              Satyaprakash Upadhyay
            </h1>

            <h2 className="hero-typing" style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '25px', display: 'flex', alignItems: 'center' }}>
              I'm a <span className="highlight" ref={roleTextRef} style={{ marginLeft: '10px', color: '#fff' }}>Vibe </span>
              <span className="role-cursor" style={{ color: '#8b5cf6' }}>|</span>
            </h2>

            <p className="hero-description" style={{ 
              fontSize: '1.05rem', 
              lineHeight: '1.6', 
              maxWidth: '500px', 
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '40px'
            }}>
              Passionate Flutter Developer and Vibe Coder crafting beautiful mobile applications. I also build clean, scalable mobile apps and premium websites — delivering complete digital solutions as services.
            </p>

            <div className="hero-cta" style={{ display: 'flex', gap: '15px', marginBottom: '50px' }}>
              <a href="#work" className="btn-primary" style={{ 
                padding: '12px 28px', 
                borderRadius: '50px', 
                background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
                color: '#fff',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                View My Work <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn-outline" style={{ 
                padding: '12px 28px', 
                borderRadius: '50px', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.03)',
                color: '#fff',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Let's Talk <i className="fas fa-comment-dots"></i>
              </a>
            </div>

            <div className="hero-stats" style={{ display: 'flex', gap: '40px' }}>
              <div className="stat">
                <span className="stat-value" style={{ fontSize: '2rem', fontWeight: '800', color: '#3b82f6' }}>5+</span>
                <p className="stat-label" style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)' }}>Projects Completed</p>
              </div>
              <div className="stat">
                <span className="stat-value" style={{ fontSize: '2rem', fontWeight: '800', color: '#3b82f6' }}>10+</span>
                <p className="stat-label" style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)' }}>Happy Clients</p>
              </div>
              <div className="stat">
                <span className="stat-value" style={{ fontSize: '2rem', fontWeight: '800', color: '#3b82f6' }}>6+</span>
                <p className="stat-label" style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)' }}>Months Experience</p>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-container" style={{ position: 'relative', width: '380px', height: '380px', margin: '0 auto' }}>
              {/* Circular Image Frame */}
              <div className="image-wrapper" style={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '50%', 
                border: '6px solid #3b82f6',
                padding: '8px',
                background: 'rgba(59, 130, 246, 0.1)',
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={myImage} 
                  alt="Satyaprakash Upadhyay" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    borderRadius: '50%',
                    filter: 'contrast(1.05)'
                  }} 
                />
              </div>
              
              {/* Decorative circle */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '115%',
                height: '115%',
                border: '1px dashed rgba(59, 130, 246, 0.15)',
                borderRadius: '50%',
                zIndex: '-1'
              }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-down" style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: '0.6' }}>
        <div style={{ width: '20px', height: '35px', border: '2px solid #fff', borderRadius: '10px', position: 'relative' }}>
          <div style={{ width: '4px', height: '8px', background: '#fff', position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)', borderRadius: '2px', animation: 'mouseScroll 1.5s infinite' }}></div>
        </div>
        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
