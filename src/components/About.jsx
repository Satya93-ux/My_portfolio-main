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

        <div className="about-content">
          <div className="about-left">
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <img src={myImage} alt="Aman Kumar Singh" />
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-stats-cards" style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
              <div className="stat-card" style={{ flex: 1, background: '#12121a', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
                <i className="fas fa-medal" style={{ fontSize: '1.5rem', color: '#2563eb', marginBottom: '10px' }}></i>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '5px' }}>Experience</h3>
                <p style={{ fontSize: '0.8rem', color: '#a0a0b0' }}>1+ Years Working</p>
              </div>
              <div className="stat-card" style={{ flex: 1, background: '#12121a', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
                <i className="fas fa-users" style={{ fontSize: '1.5rem', color: '#2563eb', marginBottom: '10px' }}></i>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '5px' }}>Clients</h3>
                <p style={{ fontSize: '0.8rem', color: '#a0a0b0' }}>10+ Worldwide</p>
              </div>
              <div className="stat-card" style={{ flex: 1, background: '#12121a', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
                <i className="fas fa-folder" style={{ fontSize: '1.5rem', color: '#2563eb', marginBottom: '10px' }}></i>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '5px' }}>Projects</h3>
                <p style={{ fontSize: '0.8rem', color: '#a0a0b0' }}>20+ Completed</p>
              </div>
            </div>

            <div className="about-text">
              <p>
                I'm a passionate Flutter Developer based in India, dedicated to creating exceptional mobile experiences. While my core expertise lies in Dart and Flutter, I am also a proficient "Vibe Coder" - leveraging AI to rapidly build and deploy full-stack websites and complex backend architectures.
              </p>
              <p>
                My journey in mobile development started 3 years ago, and since then, I've had the privilege of working with startups and established companies alike. By combining traditional programming with modern AI assistance, I can accelerate development and transform complex ideas into elegant, highly functional applications across all platforms.
              </p>
            </div>

            <div className="about-info-grid">
              <div className="info-box">
                <i className="fas fa-user"></i>
                <div>
                  <span className="info-box-label">Name</span>
                  <span className="info-box-value">Aman Kumar Singh</span>
                </div>
              </div>
              <div className="info-box">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span className="info-box-label">Location</span>
                  <span className="info-box-value">India</span>
                </div>
              </div>
              <div className="info-box">
                <i className="fas fa-envelope"></i>
                <div>
                  <span className="info-box-label">Email</span>
                  <span className="info-box-value">xaman282@gmail.com</span>
                </div>
              </div>
              <div className="info-box">
                <i className="fas fa-briefcase"></i>
                <div>
                  <span className="info-box-label">Freelance</span>
                  <span className="info-box-value" style={{color: '#10b981'}}>Available</span>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <a href="#" className="btn-primary" download>
                <span className="btn-text">Download CV</span>
                <span className="btn-icon"><i className="fas fa-download"></i></span>
              </a>
              <a href="#contact" className="btn-outline">
                <span className="btn-text">Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
