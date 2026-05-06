import React from 'react';
import myImage from '../assets/myimg.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-label">
          <span className="label-number">02</span>
          <span className="label-text">About Me</span>
          <span className="label-line"></span>
        </div>

        <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }}>
          <div className="about-left">
            <div className="about-image-wrapper" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <img 
                src="https://img.freepik.com/free-vector/professional-programmer-working-laptop-man-coding-software-application-development-process-isometric-vector-illustration_107791-10526.jpg" 
                alt="Programming Illustration" 
                style={{ width: '100%', display: 'block', borderRadius: '24px' }} 
              />
              <div className="experience-badge" style={{ 
                position: 'absolute', 
                bottom: '20px', 
                right: '20px', 
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', 
                padding: '15px 25px', 
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 10px 20px rgba(59, 130, 246, 0.4)'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '800', display: 'block', color: '#fff' }}>6+</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#fff' }}>Months Experience</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-stats-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '35px' }}>
              <div className="stat-card" style={{ background: '#12121a', padding: '20px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <i className="fas fa-award" style={{ fontSize: '1.2rem', color: '#8b5cf6', marginBottom: '10px' }}></i>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '5px', color: '#fff' }}>Experience</h3>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)' }}>6+ Months Working</p>
              </div>
              <div className="stat-card" style={{ background: '#12121a', padding: '20px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <i className="fas fa-users" style={{ fontSize: '1.2rem', color: '#8b5cf6', marginBottom: '10px' }}></i>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '5px', color: '#fff' }}>Clients</h3>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)' }}>10+ Worldwide</p>
              </div>
              <div className="stat-card" style={{ background: '#12121a', padding: '20px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <i className="fas fa-folder-open" style={{ fontSize: '1.2rem', color: '#8b5cf6', marginBottom: '10px' }}></i>
                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '5px', color: '#fff' }}>Projects</h3>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)' }}>5+ Completed</p>
              </div>
            </div>

            <p className="about-description" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '30px' }}>
              I'm a passionate Flutter Developer based in Jaipur, Rajasthan, India, dedicated to creating exceptional mobile experiences. While my core expertise lies in Dart and Flutter, I am also a proficient "Vibe Coder" — leveraging AI to rapidly build and deploy clean, scalable mobile apps and premium websites.
            </p>

            <div className="about-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 40px', marginBottom: '40px' }}>
              <div className="info-item">
                <span style={{ fontWeight: '700', color: '#fff', marginRight: '8px' }}>Name:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Satyaprakash Upadhyay</span>
              </div>
              <div className="info-item">
                <span style={{ fontWeight: '700', color: '#fff', marginRight: '8px' }}>Email:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>sk9334069077@gmail.com</span>
              </div>
              <div className="info-item">
                <span style={{ fontWeight: '700', color: '#fff', marginRight: '8px' }}>Location:</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Jaipur, Rajasthan, India</span>
              </div>
              <div className="info-item">
                <span style={{ fontWeight: '700', color: '#fff', marginRight: '8px' }}>Freelance:</span>
                <span style={{ color: '#10b981', fontWeight: '600' }}>Available</span>
              </div>
            </div>

            <a href="#" className="btn-cv" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '12px 30px', 
              borderRadius: '50px', 
              background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
              color: '#fff',
              fontWeight: '600',
              boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
              textDecoration: 'none'
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
