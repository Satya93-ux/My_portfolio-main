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
            <div className="hero-badge" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '8px 16px', 
              background: 'rgba(16, 185, 129, 0.1)', 
              border: '1px solid rgba(16, 185, 129, 0.2)', 
              borderRadius: '50px',
              marginBottom: '30px'
            }}>
              <span className="badge-dot" style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}></span>
              <span style={{ fontWeight: 600, fontSize: '0.85rem', color: '#f8fafc', textTransform: 'none' }}>Available for Work</span>
            </div>
            
            <p style={{ fontSize: '1.2rem', color: '#f8fafc', marginBottom: '10px' }}>Hello, I'm</p>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '20px' }}>
              <span className="title-line">
                <span className="title-word" style={{ color: '#8b5cf6' }}>Satyaprakash</span>
              </span>
              <span className="title-line">
                <span className="title-word" style={{ color: '#8b5cf6' }}>Upadhyay</span>
              </span>
            </h1>

            <div className="hero-info" style={{ marginBottom: '30px' }}>
              <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span className="info-label" style={{ fontSize: '1.5rem', fontWeight: 500, color: '#f8fafc' }}>I'm a</span>
                <div className="info-role" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#8b5cf6' }}>
                  <span className="role-text" ref={roleTextRef}>Flutter Developer</span>
                  <span className="role-cursor">|</span>
                </div>
              </div>
            </div>

            <p className="hero-description" style={{ maxWidth: '500px', fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '40px' }}>
              I build clean, scalable mobile apps and premium websites — delivering complete digital solutions as services. Passionate about creating impactful experiences.
            </p>

            <div className="hero-cta" style={{ display: 'flex', gap: '20px', marginBottom: '60px' }}>
              <a href="#work" className="btn-primary" style={{ padding: '14px 28px', borderRadius: '12px', background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)' }}>
                <span className="btn-text">View My Work</span>
                <span className="btn-icon">
                  <i className="fas fa-arrow-right"></i>
                </span>
              </a>
              <a href="#contact" className="btn-outline" style={{ padding: '14px 28px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="btn-text">Let's Talk</span>
                <i className="fas fa-comment-dots"></i>
              </a>
            </div>

            <div className="hero-stats" style={{ display: 'flex', gap: '50px' }}>
              <div className="stat">
                <span className="stat-value" style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800, color: '#3b82f6' }}>5+</span>
                <span className="stat-label" style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'none' }}>Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-value" style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800, color: '#3b82f6' }}>10+</span>
                <span className="stat-label" style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'none' }}>Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-value" style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800, color: '#3b82f6' }}>6+</span>
                <span className="stat-label" style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'none' }}>Months Experience</span>
              </div>
            </div>
          </div>

          <div className="hero-right" style={{ position: 'relative' }}>
            <div className="hero-image-container" style={{ position: 'relative', width: '450px', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Circular Border with Glow */}
              <div style={{ 
                position: 'absolute', 
                width: '100%', 
                height: '100%', 
                borderRadius: '50%', 
                border: '4px solid #06b6d4', 
                boxShadow: '0 0 50px rgba(6, 182, 212, 0.4)',
                zIndex: 1
              }}></div>
              
              {/* Main Image Wrapper */}
              <div className="image-wrapper" style={{ 
                width: '90%', 
                height: '90%', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                background: '#0a0a0f',
                zIndex: 2,
                position: 'relative'
              }}>
                <img src={myImage} alt="Satyaprakash Upadhyay" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Image Overlay Background (the sketch/arrow elements from the design can be represented by a pattern or just kept clean) */}
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%', 
                  backgroundImage: 'radial-gradient(circle at center, transparent 30%, rgba(10, 10, 15, 0.4) 100%)',
                  pointerEvents: 'none'
                }}></div>
              </div>

              {/* Floating Icons */}
              <div className="floating-icons" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 3 }}>
                {/* Flutter */}
                <div style={{ position: 'absolute', top: '15%', left: '-5%', width: '60px', height: '60px', background: '#1e1e2d', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" style={{ width: '35px' }} alt="Flutter" />
                </div>
                {/* Dart */}
                <div style={{ position: 'absolute', top: '5%', right: '5%', width: '60px', height: '60px', background: '#1e1e2d', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" style={{ width: '35px' }} alt="Dart" />
                </div>
                {/* Firebase */}
                <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '60px', height: '60px', background: '#1e1e2d', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" style={{ width: '35px' }} alt="Firebase" />
                </div>
                {/* Android */}
                <div style={{ position: 'absolute', bottom: '15%', right: '-5%', width: '60px', height: '60px', background: '#1e1e2d', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" style={{ width: '35px' }} alt="Android" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '25px', height: '45px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '15px', position: 'relative' }}>
          <div style={{ width: '4px', height: '8px', background: 'white', borderRadius: '2px', position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)' }}></div>
        </div>
        <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
