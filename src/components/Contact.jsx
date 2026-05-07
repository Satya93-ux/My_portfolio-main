import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-label">
          <span className="label-number">06</span>
          <span className="label-text">Get In Touch</span>
          <span className="label-line"></span>
        </div>

        <div className="contact-content">
          <div className="contact-left reveal">
            <h2 className="section-title">
              Let's work together on your next project
            </h2>
            <p className="about-text">
              Have a project in mind? I'd love to hear about it. Let's discuss 
              how I can help you build an amazing mobile application that your 
              users will love.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <a href="mailto:sk9334069077@gmail.com" className="info-value">sk9334069077@gmail.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-content">
                  <span className="info-label">Phone</span>
                  <a href="tel:+919504875565" className="info-value">+91 9504875565</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <span className="info-label">Location</span>
                  <span className="info-value">Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <span className="social-label">Connect with me</span>
              <div className="social-icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/satyaa_9334?igsh=MW92bjNiOXpycHNwMw==" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-right reveal">
            <form className="contact-form glass-card" id="contactForm">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" id="name" name="name" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" id="email" name="email" className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" id="subject" name="subject" className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea id="message" name="message" className="form-input" rows="5" required></textarea>
              </div>

              <button type="submit" className="btn-primary-gradient form-submit" style={{ width: '100%', border: 'none' }}>
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>

            <div className="form-success" id="formSuccess">
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
