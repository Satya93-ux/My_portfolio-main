import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.classList.toggle('no-scroll');
  };

  const closeMenu = () => {
    setMenuActive(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <a href="#" className="nav-logo">
          <span className="logo-bracket">{'{'}</span>
          <span className="logo-name">Satya</span>
          <span className="logo-bracket">{'}'}</span>
        </a>
        
        <div className={`nav-menu ${menuActive ? 'active' : ''}`} id="navMenu">
          <div className="nav-menu-bg"></div>
          <ul className="nav-list">
            {[
              { id: '01', text: 'Home', href: '#home' },
              { id: '02', text: 'About', href: '#about' },
              { id: '03', text: 'Skills', href: '#skills' },
              { id: '04', text: 'Work', href: '#work' },
              { id: '05', text: 'Videos', href: '#videos' },
              { id: '06', text: 'Contact', href: '#contact' },
            ].map((item) => (
              <li key={item.id} className="nav-item">
                <a href={item.href} className="nav-link" data-text={item.text} onClick={closeMenu}>
                  <span className="nav-link-number">{item.id}</span>
                  <span className="nav-link-text">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-footer">
            <div className="nav-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
            </div>
          </div>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="nav-cta">
            <span>Let's Talk</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <button 
            className={`nav-toggle ${menuActive ? 'active' : ''}`} 
            id="navToggle" 
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
