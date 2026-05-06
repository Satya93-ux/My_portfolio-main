import aboutIllustration from '../assets/about-illustration.png';

const About = () => {
  return (
    <section id="about" className="about" style={{ padding: '100px 0', background: '#0a0a0f' }}>
      <div className="container">
        <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
          {/* Left Side: Illustration */}
          <div className="about-left" style={{ position: 'relative' }}>
            <div className="about-image-wrapper" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <img src={aboutIllustration} alt="Developer Illustration" style={{ width: '100%', height: 'auto' }} />
            </div>
            {/* Experience Badge Overlay */}
            <div style={{ 
              position: 'absolute', 
              bottom: '30px', 
              right: '-20px', 
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', 
              padding: '20px', 
              borderRadius: '16px', 
              color: 'white', 
              textAlign: 'center',
              boxShadow: '0 10px 20px rgba(6, 182, 212, 0.3)',
              zIndex: 2
            }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, display: 'block' }}>6+</span>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Months of Experience</span>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="about-right">
            {/* Stats Cards Row */}
            <div className="about-stats-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
              <div className="stat-card" style={{ background: '#11111a', padding: '25px 15px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                <i className="fas fa-medal" style={{ fontSize: '1.8rem', color: '#8b5cf6', marginBottom: '12px' }}></i>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>Experience</h3>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>6+ Months Working</p>
              </div>
              <div className="stat-card" style={{ background: '#11111a', padding: '25px 15px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                <i className="fas fa-users" style={{ fontSize: '1.8rem', color: '#8b5cf6', marginBottom: '12px' }}></i>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>Clients</h3>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>10+ Worldwide</p>
              </div>
              <div className="stat-card" style={{ background: '#11111a', padding: '25px 15px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                <i className="fas fa-folder" style={{ fontSize: '1.8rem', color: '#8b5cf6', marginBottom: '12px' }}></i>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>Projects</h3>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>5+ Completed</p>
              </div>
            </div>

            {/* Description Text */}
            <div className="about-text" style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.7', marginBottom: '30px' }}>
              <p style={{ marginBottom: '20px' }}>
                I'm a passionate Flutter Developer based in India, dedicated to creating exceptional mobile experiences. While my core expertise lies in Dart and Flutter, I am also a proficient coder leveraging AI to rapidly build and deploy clean, scalable applications.
              </p>
              <p style={{ marginBottom: '30px' }}>
                My journey in mobile development is focused on delivering high-quality solutions that merge creativity with technical precision. I specialize in building professional websites and mobile apps tailored to client needs.
              </p>
            </div>

            {/* Info Grid */}
            <div className="about-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 40px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '10px', fontSize: '0.9rem' }}>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>Name:</span>
                <span style={{ color: '#94a3b8' }}>Satyaprakash Upadhyay</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', fontSize: '0.9rem' }}>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>Email:</span>
                <span style={{ color: '#94a3b8' }}>sk9334069077@gmail.com</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', fontSize: '0.9rem' }}>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>Location:</span>
                <span style={{ color: '#94a3b8' }}>Jaipur, Rajasthan, India</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', fontSize: '0.9rem' }}>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>Freelance:</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>Available</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="about-cta">
              <a href="#" className="btn-primary" style={{ padding: '14px 32px', borderRadius: '12px', background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <span className="btn-text">Download CV</span>
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
