import React, { useState } from 'react';

const Work = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'web',
      image: 'https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bgColor: '#0f172a',
      title: 'Admin Portal',
      excerpt: 'Comprehensive MERN stack web portal for ride system management.',
      year: '2026',
      type: 'MERN Stack Web',
      name: 'Admin Portal',
      desc: 'A robust administrative dashboard featuring real-time tracking, revenue analytics, driver management, and automated GST reporting for a complete ride-hailing ecosystem.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      stats: { users: 'Admin', rating: '5.0' }
    },
    {
      id: 4,
      category: 'app',
      image: 'https://media.istockphoto.com/id/1470035625/photo/driver-transporting-a-business-man-on-a-crowdsourced-taxi.jpg?s=612x612&w=0&k=20&c=HbVWN87JGim9g0CDhh2NHPM8oZ1g4qVGx86vxJ5RM24=',
      bgColor: '#1e293b',
      title: 'Driver App',
      excerpt: 'Dedicated mobile application for professional drivers.',
      year: '2026',
      type: 'Flutter App',
      name: 'Driver App',
      desc: 'Streamlined application for drivers to manage rides, track earnings, and navigate efficiently with integrated real-time location services and passenger communication.',
      tech: ['Flutter', 'Firebase', 'Google Maps', 'State Management'],
      stats: { downloads: '5K+', rating: '4.8' }
    },
    {
      id: 5,
      category: 'app',
      image: 'https://media.istockphoto.com/id/2198565905/photo/woman-boarding-a-crowdsourced-taxi-holding-her-cell-phone.jpg?s=612x612&w=0&k=20&c=rPmncyGuEjRg4bT9g49bsu-NZ-ZJvvnFI5nLhJS30jM=',
      bgColor: '#0f172a',
      title: 'Customer App',
      excerpt: 'User-friendly mobile app for seamless ride booking.',
      year: '2026',
      type: 'Flutter App',
      name: 'Customer App',
      desc: 'Intuitive passenger application featuring easy booking, multiple vehicle types, real-time tracking, and secure payment integration for a premium ride experience.',
      tech: ['Flutter', 'Firebase', 'Maps API', 'GetX'],
      stats: { downloads: '15K+', rating: '4.6' }
    },
    {
      id: 6,
      category: 'app',
      image: 'https://media.istockphoto.com/id/1057168562/photo/man-hand-holding-phone-with-app-messenger-on-the-screen.jpg?s=612x612&w=0&k=20&c=v-QhV6VN6eAMmWqfiEf_glThaVErGmZN9Tn7L7BOJQg=',
      bgColor: '#1a1a1a',
      title: 'Chatting App',
      excerpt: 'Real-time messaging platform with advanced features.',
      year: '2026',
      type: 'Flutter App',
      name: 'Chatting App',
      desc: 'A modern chat application supporting real-time messaging, file sharing, and push notifications, currently in active development.',
      tech: ['Flutter', 'Firebase', 'Socket.io'],
      stats: { views: '1.2K' }
    },
    {
      id: 7,
      category: 'app',
      image: 'https://media.istockphoto.com/id/2190971868/photo/wireless-music-listening-the-era-of-music-via-mobile-app-with-red-interface-wireless-earbuds.jpg?s=612x612&w=0&k=20&c=5tOeAg1R4vYDm3GB4kElJeI374gabnStzV5i1QfJPzk=',
      bgColor: '#020617',
      title: 'Music Player',
      excerpt: 'Premium music player with glassmorphism UI.',
      year: '2026',
      type: 'Flutter App',
      name: ' Music Player',
      desc: 'A high-fidelity music streaming application featuring a stunning dark mode UI, real-time waveform visualization, and seamless playlist management.',
      tech: ['Flutter', 'Riverpod', 'Audio Service'],
      stats: { downloads: '3K+', rating: '4.9' }
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="work" style={{ padding: 'var(--section-padding) 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '6px 20px', 
            background: 'rgba(var(--primary-rgb), 0.1)', 
            borderRadius: '50px', 
            color: 'var(--primary)',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '15px'
          }}>
            My Work
          </div>
          <div style={{ width: '60px', height: '4px', background: 'var(--gradient-primary)', margin: '0 auto 30px', borderRadius: '2px' }}></div>
          
          <div className="work-filters" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '12px'
          }}>
            {['all', 'app', 'web'].map(f => (
              <button 
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`} 
                onClick={() => setFilter(f)}
                style={{
                  padding: '10px 28px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: 'var(--transition-normal)',
                  background: filter === f ? 'var(--primary)' : 'var(--bg-card)',
                  color: filter === f ? 'var(--text-white)' : 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  boxShadow: filter === f ? 'var(--glow-primary)' : 'none'
                }}
              >
                {f === 'all' ? 'All' : f === 'app' ? 'Mobile Apps' : 'Websites'}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 310px), 1fr))', 
          gap: '25px' 
        }}>
          {filteredProjects.map((project, index) => (
            <article key={project.id} className="project-card glass-card" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              transition: 'var(--transition-normal)'
            }}>
              <div className="project-image" style={{ 
                position: 'relative', 
                height: '190px', 
                overflow: 'hidden'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }} 
                />
                <div className="project-hover-overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(var(--primary-rgb), 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: '0.3s ease',
                  cursor: 'pointer'
                }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: '#fff',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    boxShadow: 'var(--shadow-lg)'
                  }}>
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                </div>
              </div>
              
              <div className="project-info" style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div className="project-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '15px' }}>
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} style={{ 
                      padding: '4px 12px', 
                      background: 'rgba(var(--primary-rgb), 0.08)', 
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      color: 'var(--primary)',
                      fontWeight: '700'
                    }}>{t}</span>
                  ))}
                </div>
                
                <h3 className="project-name" style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '10px' }}>{project.name}</h3>
                <p className="project-description" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>{project.desc.length > 120 ? project.desc.substring(0, 120) + '...' : project.desc}</p>
                
                <div className="project-footer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid var(--border-color-muted)' }}>
                  <div className="project-stats-bar" style={{ display: 'flex', gap: '15px' }}>
                    {project.stats.downloads && (
                      <div className="stat-item" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                        <i className="fas fa-download" style={{ fontSize: '0.75rem', color: 'var(--primary)' }}></i>
                        <span>{project.stats.downloads} Downloads</span>
                      </div>
                    )}
                    {project.stats.users && (
                      <div className="stat-item" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                        <i className="fas fa-users" style={{ fontSize: '0.75rem', color: 'var(--primary)' }}></i>
                        <span>{project.stats.users}</span>
                      </div>
                    )}
                    <div className="stat-item" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                      <i className="fas fa-star" style={{ fontSize: '0.75rem', color: '#fbbf24' }}></i>
                      <span>{project.stats.rating || '4.8'} Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="work-cta" style={{ marginTop: '60px', textAlign: 'center' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
            padding: '16px 40px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--gradient-primary)',
            color: '#fff',
            fontWeight: '700',
            fontSize: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: 'var(--glow-primary)',
            transition: 'var(--transition-normal)'
          }}>
            <span className="btn-text">View All Projects</span>
            <span className="btn-icon"><i className="fab fa-github"></i></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
