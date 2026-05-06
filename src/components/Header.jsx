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
    <header className={`header${scrolled ? ' scrolled' : ''}`} style={{ 
      background: scrolled ? 'rgba(10, 10, 15, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      padding: '20px 0'
    }}>
      <nav className="nav" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        {/* Logo */}
        <a href="#" className="nav-logo" onClick={closeMenu} style={{ fontSize: '1.5rem', fontWeight: '800', color: '#3b82f6', textDecoration: 'none' }}>
          Satya<span style={{ color: '#ec4899' }}>.</span>
        </a>

        {/* Nav Menu */}
        <div className={`nav-menu${menuActive ? ' active' : ''}`} id="navMenu">
          <ul className="nav-list" style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link${activeLink === item.href ? ' active' : ''}`}
                  onClick={closeMenu}
                  style={{ 
                    textDecoration: 'none', 
                    fontSize: '0.9rem', 
                    fontWeight: '500', 
                    color: activeLink === item.href ? '#3b82f6' : 'rgba(255, 255, 255, 0.7)',
                    transition: '0.3s'
                  }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button style={{ background: 'rgba(255, 255, 255, 0.05)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', color: '#fff', cursor: 'pointer' }}>
            <i className="fas fa-cog"></i>
          </button>
          <a href="#contact" className="nav-cta" onClick={closeMenu} style={{ 
            background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', 
            padding: '10px 25px', 
            borderRadius: '50px', 
            color: '#fff', 
            fontWeight: '600', 
            textDecoration: 'none',
            fontSize: '0.9rem',
            boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)'
          }}>
            Hire Me
          </a>
          <button
            className={`nav-toggle${menuActive ? ' active' : ''}`}
            id="navToggle"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            style={{ display: 'none' }} // Assuming standard desktop view for now, usually handled by media queries in CSS
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
