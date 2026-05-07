import React from 'react';

const About = () => {
  return (
    <section id="about" className="about" style={{ padding: '60px 0', background: '#0a0a0f' }}>
      <div className="container">
        {/* Section Header with Line */}
        <div className="about-header" style={{ textAlign: 'center', marginBottom: '35px' }}>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', margin: '0 auto 15px', borderRadius: '2px' }}></div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: '800', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>About Me</h2>
        </div>

        <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(20px, 4vw, 50px)', alignItems: 'center' }}>
          
          {/* Left Side: Illustration + Badge */}
          <div className="about-left" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <img 
                src="https://img.freepik.com/free-vector/professional-programmer-working-laptop-man-coding-software-application-development-process-isometric-vector-illustration_107791-10526.jpg" 
                alt="Developer Illustration" 
                style={{ width: '100%', display: 'block' }} 
              />
              
              {/* Experience Badge on Image */}
              <div style={{ 
                position: 'absolute', 
                bottom: '15px', 
                right: '15px', 
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', 
                padding: 'clamp(6px, 2vw, 12px) clamp(10px, 3vw, 16px)', 
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 10px 20px rgba(59, 130, 246, 0.4)',
                border: '3px solid #0a0a0f'
              }}>
                <span style={{ fontSize: 'clamp(0.9rem, 3vw, 1.3rem)', fontWeight: '900', display: 'block', color: '#fff', lineHeight: '1' }}>6+</span>
                <span style={{ fontSize: '0.55rem', fontWeight: '700', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>Months Exp</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="about-right">
            {/* Stat Cards */}
            <div className="about-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '25px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '15px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', transition: '0.3s' }}>
                <i className="fas fa-certificate" style={{ fontSize: '1.2rem', color: '#8b5cf6', marginBottom: '8px' }}></i>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff', marginBottom: '2px' }}>Experience</h3>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: '500' }}>6+ Months</p>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '15px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', transition: '0.3s' }}>
                <i className="fas fa-users" style={{ fontSize: '1.2rem', color: '#3b82f6', marginBottom: '8px' }}></i>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff', marginBottom: '2px' }}>Clients</h3>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: '500' }}>10+ World</p>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '15px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', transition: '0.3s' }}>
                <i className="fas fa-rocket" style={{ fontSize: '1.2rem', color: '#06b6d4', marginBottom: '8px' }}></i>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff', marginBottom: '2px' }}>Projects</h3>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: '500' }}>5+ Completed</p>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '15px' }}>
              I'm a passionate Flutter Developer based in Jaipur, Rajasthan, India, dedicated to creating exceptional mobile experiences. While my core expertise lies in Dart and Flutter, I am also a proficient "Vibe Coder" — leveraging AI to rapidly build and deploy clean, scalable mobile apps and premium websites.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '25px' }}>
              My journey in mobile development started with a vision to build intuitive and high-performance applications. By combining traditional programming with modern AI assistance, I can accelerate development and transform complex ideas into elegant, highly functional applications across all platforms.
            </p>

            {/* Info Grid */}
            <div className="about-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: '800', color: '#fff', minWidth: '70px', fontSize: '0.85rem' }}>Name:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500', fontSize: '0.85rem' }}>Satyaprakash Upadhyay</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: '800', color: '#fff', minWidth: '70px', fontSize: '0.85rem' }}>Email:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500', fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)', wordBreak: 'break-all' }}>sk9334069077@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: '800', color: '#fff', minWidth: '70px', fontSize: '0.85rem' }}>Location:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500', fontSize: '0.85rem' }}>Jaipur, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: '800', color: '#fff', minWidth: '70px', fontSize: '0.85rem' }}>Freelance:</span>
                <span style={{ color: '#10b981', fontWeight: '800', fontSize: '0.85rem' }}>Available</span>
              </div>
            </div>

            {/* Download CV Button */}
            <a href="#" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '12px 28px', 
              borderRadius: '50px', 
              background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
              color: '#fff',
              fontWeight: '800',
              boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)',
              textDecoration: 'none',
              transition: '0.3s',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Download CV <i className="fas fa-cloud-download-alt"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
