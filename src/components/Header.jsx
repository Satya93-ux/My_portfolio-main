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
  const [theme,       setTheme]       = useState('dark');

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

  /* ── theme toggle ── */
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  /* ── escape key closes menu ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeMenu(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} style={{ 
      background: scrolled ? (theme === 'dark' ? 'rgba(10, 10, 15, 0.9)' : 'rgba(255, 255, 255, 0.9)') : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      padding: scrolled ? '12px 0' : '20px 0',
      transition: '0.4s'
    }}>
      <nav className="nav" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        {/* Logo */}
        <a href="#" className="nav-logo" onClick={closeMenu} style={{ fontSize: '1.6rem', fontWeight: '800', color: '#3b82f6', textDecoration: 'none', letterSpacing: '-0.5px' }}>
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
                    fontSize: '0.95rem', 
                    fontWeight: '600', 
                    color: activeLink === item.href ? '#3b82f6' : (theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'),
                    transition: '0.3s',
                    position: 'relative'
                  }}
                >
                  {item.text}
                  {activeLink === item.href && (
                    <span style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '4px', background: '#3b82f6', borderRadius: '50%' }}></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button 
            onClick={toggleTheme}
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              width: '42px', 
              height: '42px', 
              borderRadius: '12px', 
              color: theme === 'dark' ? '#fff' : '#333', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: '0.3s',
              fontSize: '1.1rem'
            }}
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
          <a href="#contact" className="nav-cta" onClick={closeMenu} style={{ 
            background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', 
            padding: '12px 28px', 
            borderRadius: '50px', 
            color: '#fff', 
            fontWeight: '700', 
            textDecoration: 'none',
            fontSize: '0.95rem',
            boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
            transition: '0.3s'
          }}>
            Hire Me
          </a>
          <button
            className={`nav-toggle${menuActive ? ' active' : ''}`}
            id="navToggle"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            style={{ display: 'none' }}
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
