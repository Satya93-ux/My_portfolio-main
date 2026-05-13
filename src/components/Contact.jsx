import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact" style={{ padding: 'var(--section-padding) 0', position: 'relative' }}>
      <div className="container">
        <div className="section-label">
          <span className="label-number">06</span>
          <span className="label-text">Contact</span>
          <span className="label-line"></span>
        </div>

        <div className="contact-content" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'start'
        }}>
          
          <div className="contact-left">
            <h2 className="section-title" style={{ marginBottom: '25px' }}>Let's Build Something <span className="text-gradient">Extraordinary</span></h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>
              Have a visionary project in mind? I'd love to hear about it. Let's discuss 
              how we can transform your ideas into a high-performance digital reality.
            </p>

            <div className="contact-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '50px' }}>
              <div className="contact-info-item" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'rgba(var(--primary-rgb), 0.1)', 
                  border: '1px solid rgba(var(--primary-rgb), 0.2)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '1.4rem'
                }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Email Me</span>
                  <a href="mailto:sk9334069077@gmail.com" style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', transition: 'var(--transition-normal)' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>sk9334069077@gmail.com</a>
                </div>
              </div>

              <div className="contact-info-item" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'rgba(var(--primary-rgb), 0.1)', 
                  border: '1px solid rgba(var(--primary-rgb), 0.2)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '1.4rem'
                }}>
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Call Me</span>
                  <a href="tel:+919504875565" style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', transition: 'var(--transition-normal)' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>+91 9504875565</a>
                </div>
              </div>

              <div className="contact-info-item" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'rgba(var(--primary-rgb), 0.1)', 
                  border: '1px solid rgba(var(--primary-rgb), 0.2)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '1.4rem'
                }}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Location</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>

            <div className="contact-social" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '35px' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px', display: 'block', fontWeight: '600' }}>Social Profiles</span>
              <div style={{ display: 'flex', gap: '15px' }}>
                {[
                  { icon: 'fab fa-github', url: 'https://github.com' },
                  { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com' },
                  { icon: 'fab fa-instagram', url: 'https://www.instagram.com/satyaa_9334' },
                  { icon: 'fab fa-twitter', url: 'https://twitter.com' }
                ].map((item, i) => (
                  <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border-color)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '1.2rem',
                    transition: 'var(--transition-normal)'
                  }} onMouseOver={e => {
                    e.currentTarget.style.background = 'var(--primary)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }} onMouseOut={e => {
                    e.currentTarget.style.background = 'var(--bg-card)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <i className={item.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form glass-card" style={{ 
              padding: '45px', 
              background: 'var(--bg-card)', 
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-xl)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '25px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Full Name</label>
                  <input type="text" placeholder="Name" style={{ 
                    padding: '16px 20px', 
                    background: 'var(--bg-darker)', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '12px', 
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    outline: 'none'
                  }} onFocus={e => e.target.style.borderColor = 'var(--primary)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Email Address</label>
                  <input type="email" placeholder="Email" style={{ 
                    padding: '16px 20px', 
                    background: 'var(--bg-darker)', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '12px', 
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    outline: 'none'
                  }} onFocus={e => e.target.style.borderColor = 'var(--primary)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '25px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Subject</label>
                <input type="text" placeholder="Project Inquiry" style={{ 
                  padding: '16px 20px', 
                  background: 'var(--bg-darker)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '12px', 
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  outline: 'none'
                }} onFocus={e => e.target.style.borderColor = 'var(--primary)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '35px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Message</label>
                <textarea placeholder="Tell me about your project..." rows="5" style={{ 
                  padding: '16px 20px', 
                  background: 'var(--bg-darker)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '12px', 
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'none'
                }} onFocus={e => e.target.style.borderColor = 'var(--primary)'} onBlur={e => e.target.style.borderColor = 'var(--border-color)'}></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ 
                width: '100%', 
                padding: '18px', 
                borderRadius: '14px', 
                background: 'var(--gradient-primary)', 
                color: '#fff', 
                fontWeight: '700', 
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: 'var(--glow-primary)',
                transition: 'var(--transition-normal)'
              }}>
                <span>Send Message</span>
                <i className="fas fa-paper-plane" style={{ fontSize: '0.9rem' }}></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
