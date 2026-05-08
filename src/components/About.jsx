import React from 'react';

const About = () => {
  return (
    <section id="about" className="about" style={{ padding: 'var(--section-padding) 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '6px 20px', 
            background: 'rgba(var(--primary-rgb), 0.1)', 
            borderRadius: '50px', 
            color: 'var(--primary)',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '15px'
          }}>
            About Me
          </div>
          <div style={{ width: '60px', height: '4px', background: 'var(--gradient-primary)', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>

        <div className="about-content" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
          gap: 'clamp(40px, 8vw, 80px)', 
          alignItems: 'start' 
        }}>
          
          {/* Left Side: Illustration + Badge */}
          <div className="about-left" style={{ position: 'relative' }}>
            <div className="glass-card" style={{ 
              position: 'relative', 
              borderRadius: 'var(--radius-xl)', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-xl)',
              background: 'var(--bg-card)'
            }}>
              <img 
                src="https://img.freepik.com/free-vector/professional-programmer-working-laptop-man-coding-software-application-development-process-isometric-vector-illustration_107791-10526.jpg" 
                alt="Developer Illustration" 
                style={{ width: '100%', display: 'block' }} 
              />
              
              {/* Experience Badge on Image */}
              <div style={{ 
                position: 'absolute', 
                bottom: '20px', 
                right: '20px', 
                background: 'var(--gradient-primary)', 
                padding: '12px 20px', 
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: 'var(--glow-primary)',
                border: '2px solid var(--bg-card)',
                color: '#fff'
              }}>
                <span style={{ fontSize: '1.6rem', fontWeight: '900', display: 'block', lineHeight: '1' }}>1+</span>
                <span style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Years of Experience</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="about-right">
            {/* Stat Cards */}
            <div className="about-stats" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '15px', 
              marginBottom: '35px' 
            }}>
              <div className="glass-card" style={{ padding: '20px 10px', textAlign: 'center', background: 'var(--bg-card)' }}>
                <i className="fas fa-award" style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '10px' }}></i>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>Experience</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>1+ Years Working</p>
              </div>
              <div className="glass-card" style={{ padding: '20px 10px', textAlign: 'center', background: 'var(--bg-card)' }}>
                <i className="fas fa-users" style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '10px' }}></i>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>Clients</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>10+ Worldwide</p>
              </div>
              <div className="glass-card" style={{ padding: '20px 10px', textAlign: 'center', background: 'var(--bg-card)' }}>
                <i className="fas fa-folder-open" style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '10px' }}></i>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>Projects</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>20+ Completed</p>
              </div>
            </div>

            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '25px' }}>
              I'm a passionate Flutter Developer based in India, dedicated to creating exceptional mobile experiences. While my core expertise lies in Dart and Flutter, I am also a proficient "Vibe Coder" — leveraging AI to rapidly build and deploy full-stack websites and complex backend architectures.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '35px' }}>
              My journey in mobile development started 3 years ago, and since then, I've had the privilege of working with startups and established companies alike. By combining traditional programming with modern AI assistance, I can accelerate development and transform complex ideas into elegant applications.
            </p>

            {/* Info Grid */}
            <div className="about-info-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '15px 30px', 
              marginBottom: '35px'
            }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '0.9rem', minWidth: '70px' }}>Name:</span>
                <span style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>Satyaprakash Upadhyay</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '0.9rem', minWidth: '70px' }}>Email:</span>
                <span style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>sk9334069077@gmail.com</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '0.9rem', minWidth: '70px' }}>Location:</span>
                <span style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.9rem' }}>India</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '0.9rem', minWidth: '70px' }}>Availability:</span>
                <span style={{ color: 'var(--success)', fontWeight: '800', fontSize: '0.9rem' }}>Available</span>
              </div>
            </div>

            {/* Download CV Button */}
            <a href="#" className="btn-primary" style={{ 
              padding: '16px 40px', 
              borderRadius: 'var(--radius-full)', 
              background: 'var(--gradient-primary)',
              color: '#fff',
              fontWeight: '700',
              boxShadow: 'var(--glow-primary)',
              textDecoration: 'none',
              transition: 'var(--transition-normal)',
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px'
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
