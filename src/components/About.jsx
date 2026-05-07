import React from 'react';

const About = () => {
  return (
    <section id="about" className="about" style={{ padding: '60px 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        {/* Section Header with Line */}
        <div className="about-header" style={{ textAlign: 'center', marginBottom: '35px' }}>
          <div style={{ width: '60px', height: '4px', background: 'var(--gradient-primary)', margin: '0 auto 15px', borderRadius: '2px' }}></div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: '800', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>About Me</h2>
        </div>

        <div className="about-content" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
          gap: 'clamp(30px, 5vw, 60px)', 
          alignItems: 'center' 
        }}>
          
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
                background: 'var(--gradient-primary)', 
                padding: 'clamp(6px, 2vw, 12px) clamp(10px, 3vw, 16px)', 
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 10px 20px rgba(59, 130, 246, 0.4)',
                border: '3px solid var(--bg-dark)'
              }}>
                <span style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', fontWeight: '800', display: 'block', color: 'var(--text-white)', lineHeight: '1', marginBottom: '2px' }}>1+</span>
                <span style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', fontWeight: '600', color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.5px', lineHeight: '1.2', display: 'block', opacity: 0.9 }}>Years of Experience</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="about-right">
            {/* Stat Cards */}
            <div className="about-stats" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
              gap: '12px', 
              marginBottom: '25px' 
            }}>
              <div style={{ background: 'var(--bg-card)', padding: '15px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-color)', transition: '0.3s' }}>
                <i className="fas fa-award" style={{ fontSize: '1.2rem', color: 'var(--secondary)', marginBottom: '8px' }}></i>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2px' }}>Experience</h3>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500' }}>1+ Years Working</p>
              </div>
              <div style={{ background: 'var(--bg-card)', padding: '15px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-color)', transition: '0.3s' }}>
                <i className="fas fa-users" style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '8px' }}></i>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2px' }}>Clients</h3>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500' }}>10+ Worldwide</p>
              </div>
              <div style={{ background: 'var(--bg-card)', padding: '15px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-color)', transition: '0.3s' }}>
                <i className="fas fa-folder-open" style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '8px' }}></i>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2px' }}>Projects</h3>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500' }}>20+ Completed</p>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '15px' }}>
              I'm a passionate Flutter Developer based in India, dedicated to creating exceptional mobile experiences. While my core expertise lies in Dart and Flutter, I am also a proficient "Vibe Coder" — leveraging AI to rapidly build and deploy full-stack websites and complex backend architectures.
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '25px' }}>
              My journey in mobile development started 3 years ago, and since then, I've had the privilege of working with startups and established companies alike. By combining traditional programming with modern AI assistance, I can accelerate development and transform complex ideas into elegant, highly functional applications across all platforms.
            </p>

            {/* Info Grid */}
            <div className="about-info-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '15px 25px', 
              marginBottom: '35px',
              width: '100%'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '0.85rem' }}>Name:</span>
                <span style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>Satyaprakash Upadhyay</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '0.85rem' }}>Email:</span>
                <span style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: 'clamp(0.7rem, 2.2vw, 0.85rem)', wordBreak: 'break-all' }}>sk9334069077@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '0.85rem' }}>Location:</span>
                <span style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.85rem' }}>India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '0.85rem' }}>Freelance:</span>
                <span style={{ color: 'var(--success)', fontWeight: '800', fontSize: '0.85rem' }}>Available</span>
              </div>
            </div>

            {/* Download CV Button */}
            <a href="#" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '12px 28px', 
              borderRadius: '50px', 
              background: 'var(--gradient-primary)',
              color: 'var(--text-white)',
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
