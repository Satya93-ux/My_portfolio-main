import React from 'react';

const About = () => {
  return (
    <section id="about" className="about" style={{ padding: '80px 0', background: '#0a0a0f' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', margin: '0 auto 15px', borderRadius: '2px' }}></div>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>About Me</h2>
        </div>

        <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }}>
          
          {/* Left Side: Illustration + Badge */}
          <div className="about-left" style={{ position: 'relative', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
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
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', 
                padding: '12px 18px', 
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 10px 20px rgba(59, 130, 246, 0.4)',
                border: '3px solid #0a0a0f'
              }}>
                <span style={{ fontSize: '1.2rem', fontWeight: '900', display: 'block', color: '#fff', lineHeight: '1' }}>6+</span>
                <span style={{ fontSize: '0.6rem', fontWeight: '700', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Months Exp</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="about-right">
            {/* Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '30px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '15px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', transition: '0.3s' }}>
                <i className="fas fa-certificate" style={{ fontSize: '1.2rem', color: '#8b5cf6', marginBottom: '8px' }}></i>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff', marginBottom: '3px' }}>Experience</h3>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: '500' }}>6+ Months</p>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '15px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', transition: '0.3s' }}>
                <i className="fas fa-users" style={{ fontSize: '1.2rem', color: '#3b82f6', marginBottom: '8px' }}></i>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff', marginBottom: '3px' }}>Clients</h3>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: '500' }}>10+ World</p>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '15px 10px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', transition: '0.3s' }}>
                <i className="fas fa-rocket" style={{ fontSize: '1.2rem', color: '#06b6d4', marginBottom: '8px' }}></i>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff', marginBottom: '3px' }}>Projects</h3>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: '500' }}>5+ Done</p>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '20px' }}>
              I'm a passionate Flutter Developer based in India, dedicated to creating exceptional mobile experiences. While my core expertise lies in Dart and Flutter, I am also a proficient "Vibe Coder" — leveraging AI to rapidly build and deploy clean, scalable mobile apps and premium websites.
            </p>

            {/* Info Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px 25px', marginBottom: '35px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: '700', color: '#3b82f6', fontSize: '0.9rem', minWidth: '70px' }}>Name:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', fontWeight: '500' }}>Satyaprakash</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: '700', color: '#3b82f6', fontSize: '0.9rem', minWidth: '70px' }}>Email:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', fontWeight: '500' }}>sk9334069077</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: '700', color: '#3b82f6', fontSize: '0.9rem', minWidth: '70px' }}>Location:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', fontWeight: '500' }}>Jaipur, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: '700', color: '#3b82f6', fontSize: '0.9rem', minWidth: '70px' }}>Freelance:</span>
                <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: '800' }}>Available</span>
              </div>
            </div>

            {/* Download CV Button */}
            <a href="#" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '12px 28px', 
              borderRadius: '50px', 
              background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
              color: '#fff',
              fontWeight: '700',
              boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
              textDecoration: 'none',
              transition: '0.3s',
              fontSize: '0.9rem',
              textTransform: 'uppercase'
            }}>
              Download CV <i className="fas fa-download"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
