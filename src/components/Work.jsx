import React, { useState } from 'react';
import drivitAdminImg from '../assets/projects/admin.png';
import drivitDriverImg from '../assets/projects/driver.png';
import drivitRiderImg from '../assets/projects/rider.png';
import musicImg from '../assets/projects/music.png';

const Work = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'web',
      image: 'https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bgColor: '#fdf8f1',
      title: 'Drivit Admin',
      excerpt: 'Comprehensive MERN stack web portal for ride system management.',
      year: '2024',
      type: 'MERN Stack Web',
      name: 'Drivit Admin Portal',
      desc: 'A robust administrative dashboard featuring real-time tracking, revenue analytics, driver management, and automated GST reporting for a complete ride-hailing ecosystem.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      stats: { users: 'Admin', rating: '5.0' }
    },
    {
      id: 4,
      category: 'app',
      image: 'https://media.istockphoto.com/id/1470035625/photo/driver-transporting-a-business-man-on-a-crowdsourced-taxi.jpg?s=612x612&w=0&k=20&c=HbVWN87JGim9g0CDhh2NHPM8oZ1g4qVGx86vxJ5RM24=',
      bgColor: '#fdf8f1',
      title: 'Drivit Driver',
      excerpt: 'Dedicated mobile application for professional drivers.',
      year: '2024',
      type: 'Flutter App',
      name: 'Drivit Driver App',
      desc: 'Streamlined application for drivers to manage rides, track earnings, and navigate efficiently with integrated real-time location services and passenger communication.',
      tech: ['Flutter', 'Firebase', 'Google Maps', 'State Management'],
      stats: { downloads: '5K+', rating: '4.8' }
    },
    {
      id: 5,
      category: 'app',
      image: 'https://media.istockphoto.com/id/2198565905/photo/woman-boarding-a-crowdsourced-taxi-holding-her-cell-phone.jpg?s=612x612&w=0&k=20&c=rPmncyGuEjRg4bT9g49bsu-NZ-ZJvvnFI5nLhJS30jM=',
      bgColor: '#fdf8f1',
      title: 'Drivit Rider',
      excerpt: 'User-friendly mobile app for seamless ride booking.',
      year: '2024',
      type: 'Flutter App',
      name: 'Drivit Rider App',
      desc: 'Intuitive passenger application featuring easy booking, multiple vehicle types, real-time tracking, and secure payment integration for a premium ride experience.',
      tech: ['Flutter', 'Firebase', 'Maps API', 'GetX'],
      stats: { downloads: '15K+', rating: '4.6' }
    },
    {
      id: 6,
      category: 'app',
      image: 'https://media.istockphoto.com/id/1057168562/photo/man-hand-holding-phone-with-app-messenger-on-the-screen.jpg?s=612x612&w=0&k=20&c=v-QhV6VN6eAMmWqfiEf_glThaVErGmZN9Tn7L7BOJQg=',
      bgColor: '#1a1a1a',
      title: 'Chat App',
      excerpt: 'Real-time messaging platform with advanced features.',
      year: '2024',
      type: 'Flutter App',
      name: 'Chatting Application',
      desc: 'A modern chat application supporting real-time messaging, file sharing, and push notifications, currently in active development.',
      tech: ['Flutter', 'Firebase', 'Socket.io'],
      stats: { views: '1.2K' }
    },
    {
      id: 7,
      category: 'app',
      image: 'https://media.istockphoto.com/id/2190971868/photo/wireless-music-listening-the-era-of-music-via-mobile-app-with-red-interface-wireless-earbuds.jpg?s=612x612&w=0&k=20&c=5tOeAg1R4vYDm3GB4kElJeI374gabnStzV5i1QfJPzk=',
      bgColor: '#0f172a',
      title: 'Music Player',
      excerpt: 'Premium music player with glassmorphism UI.',
      year: '2024',
      type: 'Flutter App',
      name: 'Neon Music Player',
      desc: 'A high-fidelity music streaming application featuring a stunning dark mode UI, real-time waveform visualization, and seamless playlist management.',
      tech: ['Flutter', 'Riverpod', 'Audio Service'],
      stats: { downloads: '3K+', rating: '4.9' }
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="work">
      <div className="container">
        <div className="section-label">
          <span className="label-number">04</span>
          <span className="label-text">Featured Work</span>
          <span className="label-line"></span>
        </div>

        <div className="work-header">
          <h2 className="section-title">Selected Projects</h2>
          <div className="work-filters">
            {['all', 'app', 'web', 'ui'].map(f => (
              <button 
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`} 
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1).replace('app', 'Mobile Apps').replace('web', 'Web Apps').replace('ui', 'UI Design')}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <article key={project.id} className="project-card" data-category={project.category}>
              <div className="project-image" style={{ background: project.bgColor }}>
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="project-category">{project.category === 'app' ? 'Mobile App' : project.category === 'web' ? 'Web App' : 'UI Design'}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-excerpt">{project.excerpt}</p>
                    <div className="project-actions">
                      {project.category === 'app' ? (
                        <a href="#" className="action-btn" title="View Details"><i className="fas fa-eye"></i></a>
                      ) : project.category === 'web' ? (
                        <a href="#" className="action-btn" title="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                      ) : (
                        <>
                          <a href="#" className="action-btn" title="View Details"><i className="fas fa-eye"></i></a>
                          <a href="#" className="action-btn" title="GitHub"><i className="fab fa-github"></i></a>
                          <a href="#" className="action-btn" title="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="meta-year">{project.year}</span>
                  <span className="meta-divider">•</span>
                  <span className="meta-type">{project.type}</span>
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-stats-bar">
                  {project.stats.downloads && (
                    <div className="stat-item">
                      <i className="fas fa-download"></i>
                      <span>{project.stats.downloads}</span>
                    </div>
                  )}
                  {project.stats.users && (
                    <div className="stat-item">
                      <i className="fas fa-users"></i>
                      <span>{project.stats.users}</span>
                    </div>
                  )}
                  {project.stats.likes && (
                    <div className="stat-item">
                      <i className="fas fa-heart"></i>
                      <span>{project.stats.likes}</span>
                    </div>
                  )}
                  <div className="stat-item">
                    {project.stats.rating ? <i className="fas fa-star"></i> : <i className="fas fa-eye"></i>}
                    <span>{project.stats.rating || project.stats.views}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="work-cta">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span className="btn-text">View All Projects</span>
            <span className="btn-icon"><i className="fab fa-github"></i></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
