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
      background: scrolled ? 'var(--overlay-dark)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : 'none'
    }}>
      <nav className="nav">
        {/* Logo */}
        <a href="#" className="nav-logo" onClick={closeMenu} style={{
          fontSize: '1.6rem',
          fontWeight: '800',
          letterSpacing: '-1px'
        }}>
          <span className="text-gradient">Satya</span><span style={{ color: 'var(--primary)' }}>.</span>
        </a>

        {/* Nav Menu */}
        <div className={`nav-menu${menuActive ? ' active' : ''}`} id="navMenu">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link${activeLink === item.href ? ' active' : ''}`}
                  onClick={closeMenu}
                  style={{
                    color: activeLink === item.href ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontWeight: activeLink === item.href ? '600' : '500'
                  }}
                >
                  <span style={{ 
                    fontSize: '0.7rem', 
                    color: 'var(--primary)', 
                    marginRight: '6px',
                    opacity: activeLink === item.href ? 1 : 0.6
                  }}>{item.id}.</span>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(var(--primary-rgb), 0.1)',
              color: 'var(--primary)',
              transition: 'var(--transition-normal)'
            }}
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
          
          <a href="#contact" className="nav-cta" onClick={closeMenu} style={{
            padding: '10px 24px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--gradient-primary)',
            color: '#fff',
            fontWeight: '600',
            fontSize: '0.9rem',
            boxShadow: 'var(--glow-primary)',
            display: window.innerWidth < 1024 ? 'none' : 'flex'
          }}>
            Hire Me
          </a>

          <button
            className={`nav-toggle${menuActive ? ' active' : ''}`}
            id="navToggle"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            style={{
              background: 'rgba(var(--primary-rgb), 0.1)',
              padding: '8px',
              borderRadius: '8px'
            }}
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
