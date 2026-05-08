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
      
      const timeoutId = setTimeout(type, typingSpeed);
      return timeoutId;
    }
    
    const timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 'clamp(80px, 10vh, 120px) 0 60px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="hero-content" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
          gap: 'clamp(40px, 6vw, 80px)', 
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          {/* Content on the Left */}
          <div className="hero-left">
            {/* Available for Work Badge */}
            <div className="hero-badge" style={{ 
              maxWidth: 'fit-content', 
              padding: '8px 16px', 
              borderRadius: 'var(--radius-full)',
              background: 'rgba(var(--primary-rgb), 0.1)',
              border: '1px solid rgba(var(--primary-rgb), 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}>
              <span className="badge-dot" style={{ width: '8px', height: '8px', background: 'var(--success)', borderRadius: '50%', boxShadow: '0 0 10px var(--success)' }}></span>
              <span style={{ fontWeight: 600, fontSize: '0.8rem', color: 'var(--text-primary)', letterSpacing: '0.5px' }}>Available for New Projects</span>
            </div>
            
            <p style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--text-secondary)', fontWeight: '500' }}>Hello, I'm</p>
            
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: '900', 
              lineHeight: '1.1',
              marginBottom: '15px',
              color: 'var(--text-primary)',
              letterSpacing: '-1.5px'
            }}>
              Satyaprakash <span className="text-gradient">Upadhyay</span>
            </h1>

            <h2 style={{ 
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', 
              fontWeight: '700', 
              marginBottom: '25px', 
              display: 'flex', 
              alignItems: 'center', 
              color: 'var(--text-secondary)', 
              flexWrap: 'wrap',
              minHeight: '1.6em',
              lineHeight: '1.4'
            }}>
              I'm a <span ref={roleTextRef} style={{ 
                marginLeft: '12px', 
                color: 'var(--primary)', 
                borderRight: '3px solid var(--primary)', 
                paddingRight: '8px',
                animation: 'blink-caret 0.75s step-end infinite'
              }}></span>
            </h2>

            <p style={{ 
              fontSize: '1.05rem', 
              lineHeight: '1.7', 
              maxWidth: '560px', 
              color: 'var(--text-secondary)',
              marginBottom: '40px'
            }}>
              Passionate Flutter Developer and Vibe Coder crafting elegant mobile experiences. Specialized in building full-stack applications and intelligent systems powered by cutting-edge AI.
            </p>

            <div className="hero-actions" style={{ 
              display: 'flex', 
              gap: '16px', 
              marginBottom: '50px', 
              flexWrap: 'wrap'
            }}>
              <a href="#work" className="btn-primary" style={{ 
                padding: '16px 36px', 
                borderRadius: 'var(--radius-full)', 
                background: 'var(--gradient-primary)',
                color: '#fff',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: 'var(--glow-primary)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                minWidth: '180px',
                transition: 'var(--transition-normal)'
              }}>
                View My Work <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
              </a>
              <a href="#contact" style={{ 
                padding: '16px 36px', 
                borderRadius: 'var(--radius-full)', 
                border: '1px solid var(--border-color)',
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                minWidth: '180px',
                transition: 'var(--transition-normal)'
              }} onMouseOver={e => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.background = 'rgba(var(--primary-rgb), 0.05)';
              }} onMouseOut={e => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.background = 'var(--bg-card)';
              }}>
                Let's Connect <i className="fas fa-comment-dots" style={{ fontSize: '0.8rem' }}></i>
              </a>
            </div>

            <div className="hero-stats" style={{ 
              display: 'flex', 
              gap: 'clamp(20px, 5vw, 45px)', 
              alignItems: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <span className="text-gradient" style={{ fontSize: '2.2rem', fontWeight: '900', display: 'block', lineHeight: '1' }}>5+</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '700' }}>Projects</p>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'var(--border-color)' }}></div>
              <div style={{ textAlign: 'center' }}>
                <span className="text-gradient" style={{ fontSize: '2.2rem', fontWeight: '900', display: 'block', lineHeight: '1' }}>10+</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '700' }}>Clients</p>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'var(--border-color)' }}></div>
              <div style={{ textAlign: 'center' }}>
                <span className="text-gradient" style={{ fontSize: '2.2rem', fontWeight: '900', display: 'block', lineHeight: '1' }}>6+</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '700' }}>Experience</p>
              </div>
            </div>
          </div>

          {/* Profile Image on the Right */}
          <div className="hero-right">
            <div className="hero-image-container" style={{ position: 'relative', width: 'clamp(240px, 35vw, 380px)', height: 'clamp(240px, 35vw, 380px)', margin: '0 auto' }}>
              {/* Circular Image Frame */}
              <div style={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '50%', 
                border: '1px solid rgba(var(--primary-rgb), 0.3)',
                padding: '12px',
                background: 'rgba(var(--primary-rgb), 0.03)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-xl)'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid var(--primary)',
                  boxShadow: 'var(--glow-primary)',
                }}>
                  <img 
                    src={myImage} 
                    alt="Satyaprakash Upadhyay" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      borderRadius: '50%',
                      filter: 'contrast(1.05) brightness(1.02)'
                    }} 
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div style={{
                position: 'absolute',
                top: '-8%',
                left: '-8%',
                width: '116%',
                height: '116%',
                border: '1px dashed rgba(var(--primary-rgb), 0.2)',
                borderRadius: '50%',
                zIndex: '-1',
                animation: 'spin 60s linear infinite'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
