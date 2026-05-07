import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <a href="#" className="footer-logo">
              <span className="logo-bracket">{'{'}</span>
              <span className="logo-name">Satya</span>
              <span className="logo-bracket">{'}'}</span>
            </a>
            <p className="footer-text">
              Flutter developer crafting beautiful mobile experiences. 
              Let's build something amazing together.
            </p>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/satyaa_9334?igsh=MW92bjNiOXpycHNwMw==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
            </div>
          </div>

          <div className="footer-links-wrapper">
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Flutter Development</a></li>
                <li><a href="#">Mobile App Design</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">App Maintenance</a></li>
                <li><a href="#">Consulting</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Satyaprakash Upadhyay. All rights reserved.</p>
          <p>Designed & Built with <i className="fas fa-heart"></i></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
