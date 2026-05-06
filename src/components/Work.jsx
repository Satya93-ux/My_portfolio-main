import React, { useState } from 'react';
import drivitAdminImg from '../assets/projects/admin.png';
import drivitDriverImg from '../assets/projects/driver.png';
import drivitRiderImg from '../assets/projects/rider.png';
import fastRideImg from '../assets/projects/fast.png';
import resqImg from '../assets/projects/resq.png';

const Work = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'web',
      image: drivitAdminImg,
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
      id: 2,
      category: 'app',
      image: fastRideImg,
      title: 'Fast Ride',
      excerpt: 'Full-featured ride-booking application similar to Ola/Uber.',
      year: '2024',
      type: 'Flutter App',
      name: 'Fast Ride',
      desc: 'A premium ride-hailing platform with real-time driver tracking, secure payments, and a seamless user experience, designed to scale for high-demand transport services.',
      tech: ['Flutter', 'Firebase', 'Google Maps', 'Razorpay'],
      stats: { downloads: '10K+', rating: '4.7' }
    },
    {
      id: 3,
      category: 'app',
      image: resqImg,
      title: 'ResQ',
      excerpt: 'SOS Emergency assistance app for immediate accident response.',
      year: '2024',
      type: 'Flutter App',
      name: 'ResQ Emergency App',
      desc: 'An innovative emergency response app that connects accident victims with nearby help and medical services instantly, bypassing legal hurdles to prioritize life-saving assistance.',
      tech: ['Flutter', 'Node.js', 'Socket.io', 'Geolocation'],
      stats: { downloads: '2K+', rating: '4.9' }
    },
    {
      id: 4,
      category: 'app',
      image: drivitDriverImg,
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
      image: drivitRiderImg,
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
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      title: 'Chat App',
      excerpt: 'Real-time messaging platform with advanced features.',
      year: '2024',
      type: 'Flutter App',
      name: 'Chatting Application',
      desc: 'A modern chat application supporting real-time messaging, file sharing, and push notifications, currently in active development.',
      tech: ['Flutter', 'Firebase', 'Socket.io'],
      stats: { views: '1.2K' }
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
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="project-category">{project.category === 'app' ? 'Mobile App' : project.category === 'web' ? 'Web App' : 'UI Design'}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-excerpt">{project.excerpt}</p>
                    <div className="project-actions">
                      <a href="#" className="action-btn" title="View Details"><i className="fas fa-eye"></i></a>
                      <a href="#" className="action-btn" title="GitHub"><i className="fab fa-github"></i></a>
                      <a href="#" className="action-btn" title="Live Demo"><i className="fas fa-external-link-alt"></i></a>
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
