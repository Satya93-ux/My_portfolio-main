import React from 'react';

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
          {/* Left Side: Illustration + Badge */}
          <div className="about-left reveal">
            <div className="about-image-wrapper">
              <img 
                src="https://img.freepik.com/free-vector/professional-programmer-working-laptop-man-coding-software-application-development-process-isometric-vector-illustration_107791-10526.jpg" 
                alt="Developer Illustration" 
              />
              
              {/* Experience Badge */}
              <div className="experience-badge">
                <span className="exp-num">1+</span>
                <span className="exp-text">Years of Experience</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="about-right reveal">
            <h2 className="section-title">Crafting Digital Experiences with AI & Code</h2>
            
            {/* Stat Cards */}
            <div className="about-stats">
              <div className="about-stat-card glass-card">
                <i className="fas fa-award"></i>
                <h3>Experience</h3>
                <p>1+ Years Working</p>
              </div>
              <div className="about-stat-card glass-card">
                <i className="fas fa-users"></i>
                <h3>Clients</h3>
                <p>10+ Worldwide</p>
              </div>
              <div className="about-stat-card glass-card">
                <i className="fas fa-folder-open"></i>
                <h3>Projects</h3>
                <p>20+ Completed</p>
              </div>
            </div>

            <div className="about-text">
              <p>
                I'm a passionate Flutter Developer based in India, dedicated to creating exceptional mobile experiences. While my core expertise lies in Dart and Flutter, I am also a proficient "Vibe Coder" — leveraging AI to rapidly build and deploy full-stack websites and complex backend architectures.
              </p>
              <p>
                By combining traditional programming with modern AI assistance, I can accelerate development and transform complex ideas into elegant, highly functional applications across all platforms.
              </p>
            </div>

            {/* Info Grid */}
            <div className="about-info-grid">
              <div className="info-item-row">
                <span className="info-label">Name:</span>
                <span className="info-value">Satyaprakash Upadhyay</span>
              </div>
              <div className="info-item-row">
                <span className="info-label">Email:</span>
                <span className="info-value">sk9334069077@gmail.com</span>
              </div>
              <div className="info-item-row">
                <span className="info-label">Location:</span>
                <span className="info-value">India</span>
              </div>
              <div className="info-item-row">
                <span className="info-label">Freelance:</span>
                <span className="info-value text-gradient">Available</span>
              </div>
            </div>

            <div className="about-cta">
              <a href="#" className="btn-primary-gradient">
                <span>Download CV</span>
                <i className="fas fa-cloud-download-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
