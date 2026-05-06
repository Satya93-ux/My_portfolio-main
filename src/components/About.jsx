import React from 'react';

const About = () => {
  return (
    <section id="about" className="about" style={{ padding: '120px 0', background: '#0a0a0f' }}>
      <div className="container">
        {/* Section Header with Line */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', margin: '0 auto 20px', borderRadius: '2px' }}></div>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>About Me</h2>
        </div>

        <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
          
          {/* Left Side: Illustration + Badge */}
          <div className="about-left" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.4)' }}>
              <img 
                src="https://img.freepik.com/free-vector/professional-programmer-working-laptop-man-coding-software-application-development-process-isometric-vector-illustration_107791-10526.jpg" 
                alt="Developer Illustration" 
                style={{ width: '100%', display: 'block' }} 
              />
              
              {/* Experience Badge on Image */}
              <div style={{ 
                position: 'absolute', 
                bottom: '30px', 
                right: '30px', 
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', 
                padding: '20px 25px', 
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 15px 30px rgba(59, 130, 246, 0.4)',
                border: '4px solid #0a0a0f'
              }}>
                <span style={{ fontSize: '1.8rem', fontWeight: '900', display: 'block', color: '#fff', lineHeight: '1' }}>6+</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>Years of Experience</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="about-right">
            {/* Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '45px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '25px 15px', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', transition: '0.3s' }}>
                <i className="fas fa-certificate" style={{ fontSize: '1.6rem', color: '#8b5cf6', marginBottom: '15px' }}></i>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', marginBottom: '5px' }}>Experience</h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: '500' }}>6+ Months Working</p>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '25px 15px', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', transition: '0.3s' }}>
                <i className="fas fa-users" style={{ fontSize: '1.6rem', color: '#3b82f6', marginBottom: '15px' }}></i>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', marginBottom: '5px' }}>Clients</h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: '500' }}>10+ Worldwide</p>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '25px 15px', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', transition: '0.3s' }}>
                <i className="fas fa-rocket" style={{ fontSize: '1.6rem', color: '#06b6d4', marginBottom: '15px' }}></i>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', marginBottom: '5px' }}>Projects</h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: '500' }}>5+ Completed</p>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '30px' }}>
              I'm a passionate Flutter Developer based in Jaipur, Rajasthan, India, dedicated to creating exceptional mobile experiences. While my core expertise lies in Dart and Flutter, I am also a proficient "Vibe Coder" — leveraging AI to rapidly build and deploy clean, scalable mobile apps and premium websites.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '40px' }}>
              My journey in mobile development started with a vision to build intuitive and high-performance applications. By combining traditional programming with modern AI assistance, I can accelerate development and transform complex ideas into elegant, highly functional applications across all platforms.
            </p>

            {/* Info Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '25px 40px', marginBottom: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontWeight: '800', color: '#fff', minWidth: '85px' }}>Name:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500' }}>Satyaprakash Upadhyay</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontWeight: '800', color: '#fff', minWidth: '85px' }}>Email:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500' }}>sk9334069077@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontWeight: '800', color: '#fff', minWidth: '85px' }}>Location:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500' }}>Jaipur, Rajasthan, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontWeight: '800', color: '#fff', minWidth: '85px' }}>Freelance:</span>
                <span style={{ color: '#10b981', fontWeight: '800' }}>Available</span>
              </div>
            </div>

            {/* Download CV Button */}
            <a href="#" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px', 
              padding: '18px 40px', 
              borderRadius: '50px', 
              background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
              color: '#fff',
              fontWeight: '800',
              boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)',
              textDecoration: 'none',
              transition: '0.3s',
              fontSize: '1rem',
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
