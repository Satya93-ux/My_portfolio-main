import React from 'react';
import myImage from '../assets/myimg.jpeg';

const About = () => {
  return (
    <section id="about" className="about" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', margin: '0 auto 20px', borderRadius: '2px' }}></div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>About Me</h2>
        </div>

        <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
          <div className="about-left">
            <div className="about-image-wrapper" style={{ position: 'relative', borderRadius: '30px', padding: '15px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <img 
                src="https://img.freepik.com/free-vector/professional-programmer-working-laptop-man-coding-software-application-development-process-isometric-vector-illustration_107791-10526.jpg" 
                alt="Programming Illustration" 
                style={{ width: '100%', display: 'block', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} 
              />
              <div className="experience-badge" style={{ 
                position: 'absolute', 
                bottom: '30px', 
                right: '30px', 
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', 
                padding: '20px', 
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 15px 30px rgba(59, 130, 246, 0.4)',
                border: '4px solid rgba(10, 10, 15, 0.5)'
              }}>
                <span style={{ fontSize: '1.8rem', fontWeight: '900', display: 'block', color: '#fff', lineHeight: '1' }}>6+</span>
                <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>Months Exp</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-stats-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
              <div className="stat-card" style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '25px 15px', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', transition: '0.3s' }}>
                <i className="fas fa-certificate" style={{ fontSize: '1.5rem', color: '#8b5cf6', marginBottom: '12px' }}></i>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '5px', color: '#fff' }}>Experience</h3>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: '500' }}>6+ Months Working</p>
              </div>
              <div className="stat-card" style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '25px 15px', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', transition: '0.3s' }}>
                <i className="fas fa-users" style={{ fontSize: '1.5rem', color: '#3b82f6', marginBottom: '12px' }}></i>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '5px', color: '#fff' }}>Clients</h3>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: '500' }}>10+ Worldwide</p>
              </div>
              <div className="stat-card" style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '25px 15px', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', transition: '0.3s' }}>
                <i className="fas fa-rocket" style={{ fontSize: '1.5rem', color: '#06b6d4', marginBottom: '12px' }}></i>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '5px', color: '#fff' }}>Projects</h3>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: '500' }}>5+ Completed</p>
              </div>
            </div>

            <p className="about-description" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '35px', fontWeight: '400' }}>
              I'm a passionate Flutter Developer based in Jaipur, Rajasthan, India, dedicated to creating exceptional mobile experiences. While my core expertise lies in Dart and Flutter, I am also a proficient "Vibe Coder" — leveraging AI to rapidly build and deploy clean, scalable mobile apps and premium websites.
            </p>

            <div className="about-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px 40px', marginBottom: '45px' }}>
              <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: '700', color: '#3b82f6', minWidth: '80px' }}>Name:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500' }}>Satyaprakash Upadhyay</span>
              </div>
              <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: '700', color: '#3b82f6', minWidth: '80px' }}>Email:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500' }}>sk9334069077@gmail.com</span>
              </div>
              <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: '700', color: '#3b82f6', minWidth: '80px' }}>Location:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500' }}>Jaipur, Rajasthan, India</span>
              </div>
              <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: '700', color: '#3b82f6', minWidth: '80px' }}>Freelance:</span>
                <span style={{ color: '#10b981', fontWeight: '700' }}>Available</span>
              </div>
            </div>

            <a href="#" className="btn-cv" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px', 
              padding: '16px 35px', 
              borderRadius: '50px', 
              background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
              color: '#fff',
              fontWeight: '700',
              boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)',
              textDecoration: 'none',
              transition: '0.3s',
              fontSize: '1rem'
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
