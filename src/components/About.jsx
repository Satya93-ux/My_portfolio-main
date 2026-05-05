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
                <img src={myImage} alt="Satyaprakash Upadhyay" />
              </div>
              <div className="about-pattern"></div>
            </div>
          </div>

          <div className="about-right">
            <h2 className="about-title">
              Passionate about creating 
              <span className="text-gradient"> impactful digital solutions</span>
            </h2>

            <div className="about-text">
              <p>
                Hello! I'm <strong>Satyaprakash Upadhyay</strong>. As a dedicated Flutter developer, I excel in building high‑quality mobile applications using Dart, Flutter, and Firebase, supported by advanced state management frameworks including Provider, Riverpod, BLoC, and GetX.
              </p>
              <p>
                I build professional websites and mobile apps as services — tailored to client needs.
              </p>
              <p>
                My technical proficiency covers Java, REST APIs, Git, GitHub, MongoDB, and Railway for backend systems.
              </p>
              <p>
                I am skilled in prompt engineering and AI‑driven development, leveraging tools such as Cursor and Antigravity to design modern, efficient, and intelligent solutions that merge creativity with technical precision.
              </p>
            </div>

            <div className="about-info-grid">
              <div className="info-box">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span className="info-box-label">Location</span>
                  <span className="info-box-value">Jaipur, Rajasthan, India</span>
                </div>
              </div>
              <div className="info-box">
                <i className="fas fa-envelope"></i>
                <div>
                  <span className="info-box-label">Email</span>
                  <span className="info-box-value">sk9334069077@gmail.com</span>
                </div>
              </div>
              <div className="info-box">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <span className="info-box-label">Education</span>
                  <span className="info-box-value">B.Tech Computer Science</span>
                </div>
              </div>
              <div className="info-box">
                <i className="fas fa-briefcase"></i>
                <div>
                  <span className="info-box-label">Employment</span>
                  <span className="info-box-value">Open to Opportunities</span>
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
