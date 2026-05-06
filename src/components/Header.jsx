import React, { useState, useEffect, useCallback } from 'react';

const navItems = [
  { id: '01', text: 'Home',     href: '#home'    },
  { id: '02', text: 'About',    href: '#about'   },
  { id: '03', text: 'Skills',   href: '#skills'  },
  { id: '04', text: 'Projects', href: '#work'    },
  { id: '05', text: 'Showcase', href: '#videos'  },
  { id: '06', text: 'Contact',  href: '#contact' },
];

const Header = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuActive,  setMenuActive]  = useState(false);
  const [activeLink,  setActiveLink]  = useState('#home');

  /* ── scroll: header style + active nav link ── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.pageYOffset + 150;

    sections.forEach((section) => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        setActiveLink('#' + id);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* ── mobile menu ── */
  const toggleMenu = () => {
    setMenuActive((prev) => {
      document.body.classList.toggle('no-scroll', !prev);
      return !prev;
    });
  };

  const closeMenu = () => {
    setMenuActive(false);
    document.body.classList.remove('no-scroll');
  };

  /* ── escape key closes menu ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeMenu(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav">
        {/* Logo */}
        <a href="#" className="nav-logo" onClick={closeMenu}>
          <span className="logo-name">AKS.</span>
        </a>

        {/* Nav Menu */}
        <div className={`nav-menu${menuActive ? ' active' : ''}`} id="navMenu">
          <div className="nav-menu-bg"></div>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link${activeLink === item.href ? ' active' : ''}`}
                  data-text={item.text}
                  onClick={closeMenu}
                >
                  <span className="nav-link-number">{item.id}</span>
                  <span className="nav-link-text">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-footer">
            <div className="nav-social">
              <a href="https://github.com"    target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com"  target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/satyaa_9334?igsh=MW92bjNiOXpycHNwMw==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://dribbble.com"  target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            <span>Hire Me</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <button
            className={`nav-toggle${menuActive ? ' active' : ''}`}
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
