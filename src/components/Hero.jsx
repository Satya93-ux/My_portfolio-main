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
    <section id="home" className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="hero-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          
          <div className="hero-left">
            {/* Available for Work Badge */}
            <div className="hero-badge" style={{ 
              maxWidth: 'fit-content', 
              padding: '10px 20px', 
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '35px'
            }}>
              <span className="badge-dot" style={{ width: '10px', height: '10px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}></span>
              <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>Available for Work</span>
            </div>
            
            <p style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'rgba(255, 255, 255, 0.8)' }}>Hello, I'm</p>
            
            <h1 style={{ 
              fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', 
              fontWeight: '900', 
              lineHeight: '1.1',
              marginBottom: '15px',
              color: '#8b5cf6',
              letterSpacing: '-1px',
              whiteSpace: 'nowrap'
            }}>
              Satyaprakash Upadhyay
            </h1>

            <h2 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', fontWeight: '800', marginBottom: '30px', display: 'flex', alignItems: 'center', color: '#fff', flexWrap: 'wrap' }}>
              I'm a <span ref={roleTextRef} style={{ marginLeft: '12px', color: '#8b5cf6' }}></span>
              <span style={{ color: '#8b5cf6', marginLeft: '5px', animation: 'blink 1s infinite' }}>|</span>
            </h2>

            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.7', 
              maxWidth: '550px', 
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '45px'
            }}>
              Passionate Flutter Developer and Vibe Coder crafting beautiful mobile applications. I also build full-stack websites and robust backend systems with the power of AI. Turning ideas into reality, one widget and prompt at a time.
            </p>

            <div className="hero-actions" style={{ display: 'flex', gap: '15px', marginBottom: '60px' }}>
              <a href="#work" style={{ 
                padding: '14px 30px', 
                borderRadius: '50px', 
                background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
                color: '#fff',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>
                View My Work <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" style={{ 
                padding: '14px 30px', 
                borderRadius: '50px', 
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.03)',
                color: '#fff',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>
                Let's Talk <i className="fas fa-comment-dots"></i>
              </a>
            </div>

            <div className="hero-stats" style={{ display: 'flex', gap: 'clamp(15px, 4vw, 35px)', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: '900', color: '#3b82f6', display: 'block', lineHeight: '1' }}>5+</span>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.4)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Projects</p>
              </div>
              <div style={{ width: '1px', height: '30px', background: 'rgba(255, 255, 255, 0.1)' }}></div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: '900', color: '#3b82f6', display: 'block', lineHeight: '1' }}>10+</span>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.4)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Clients</p>
              </div>
              <div style={{ width: '1px', height: '30px', background: 'rgba(255, 255, 255, 0.1)' }}></div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: '900', color: '#3b82f6', display: 'block', lineHeight: '1' }}>6+</span>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.4)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Months Exp</p>
              </div>
            </div>

            {/* Scroll Down Mouse (Mobile) */}
            <a href="#about" className="scroll-indicator mobile-only" style={{ display: 'none', marginTop: '50px', textAlign: 'center', opacity: '0.8', textDecoration: 'none', cursor: 'pointer', transition: '0.3s' }}>
              <div style={{ width: '24px', height: '40px', border: '2px solid #fff', borderRadius: '12px', margin: '0 auto 8px', position: 'relative' }}>
                <div style={{ width: '4px', height: '8px', background: '#fff', position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', borderRadius: '2px', animation: 'mouseScroll 1.5s infinite' }}></div>
              </div>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', color: '#fff' }}>Scroll Down</span>
            </a>
          </div>

          <div className="hero-right">
            <div className="hero-image-container" style={{ position: 'relative', width: 'clamp(280px, 35vw, 380px)', height: 'clamp(280px, 35vw, 380px)', margin: '0 auto' }}>
              {/* Circular Image Frame */}
              <div style={{ 
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
                    objectPosition: 'center 20%', // Adjusted to ensure face is visible
                    borderRadius: '50%',
                    filter: 'contrast(1.05)'
                  }} 
                />
              </div>
              
              {/* Decorative dotted circle */}
              <div style={{
                position: 'absolute',
                top: '-7%',
                left: '-7%',
                width: '114%',
                height: '114%',
                border: '1px dashed rgba(59, 130, 246, 0.2)',
                borderRadius: '50%',
                zIndex: '-1'
              }}></div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Mouse (Desktop) */}
      <a href="#about" className="scroll-indicator desktop-only" style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', opacity: '0.8', textDecoration: 'none', cursor: 'pointer', transition: '0.3s' }}>
        <div style={{ width: '24px', height: '40px', border: '2px solid #fff', borderRadius: '12px', margin: '0 auto 8px', position: 'relative' }}>
          <div style={{ width: '4px', height: '8px', background: '#fff', position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', borderRadius: '2px', animation: 'mouseScroll 1.5s infinite' }}></div>
        </div>
        <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', color: '#fff' }}>Scroll Down</span>
      </a>
    </section>
  );
};

export default Hero;
