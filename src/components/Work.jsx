import React, { useState } from 'react';

const Work = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'app',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      title: 'ShopEase',
      excerpt: 'Full-featured e-commerce mobile application',
      year: '2024',
      type: 'Flutter App',
      name: 'ShopEase E-Commerce',
      desc: 'Complete e-commerce solution with product catalog, cart management, payment integration, and order tracking.',
      tech: ['Flutter', 'Firebase', 'Stripe', 'GetX'],
      stats: { downloads: '10K+', rating: '4.8' }
    },
    {
      id: 2,
      category: 'app',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      title: 'ConnectHub',
      excerpt: 'Social networking platform with real-time features',
      year: '2024',
      type: 'Flutter App',
      name: 'ConnectHub Social',
      desc: 'Social media platform featuring real-time chat, stories, posts, and video calling functionality.',
      tech: ['Flutter', 'Socket.io', 'Node.js', 'MongoDB'],
      stats: { downloads: '25K+', rating: '4.6' }
    },
    {
      id: 3,
      category: 'app',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop',
      title: 'FitTrack Pro',
      excerpt: 'Comprehensive fitness tracking application',
      year: '2023',
      type: 'Flutter App',
      name: 'FitTrack Pro',
      desc: 'Fitness app with workout plans, nutrition tracking, progress analytics, and health integration.',
      tech: ['Flutter', 'HealthKit', 'Charts', 'Bloc'],
      stats: { downloads: '15K+', rating: '4.9' }
    },
    {
      id: 4,
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      title: 'Analytics Dashboard',
      excerpt: 'Business intelligence dashboard',
      year: '2023',
      type: 'Flutter Web',
      name: 'Analytics Dashboard',
      desc: 'Business analytics platform with real-time data visualization, reports, and team collaboration.',
      tech: ['Flutter Web', 'REST API', 'Charts', 'Provider'],
      stats: { users: '500+', rating: '4.7' }
    },
    {
      id: 5,
      category: 'app',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      title: 'Project 5: FoodieGo', // Fixed: Added "Project 5"
      excerpt: 'Food delivery application',
      year: '2023',
      type: 'Flutter App',
      name: 'Project 5: FoodieGo Delivery', // Fixed: Added "Project 5"
      desc: 'Food delivery app with real-time tracking, restaurant discovery, and seamless payment integration.',
      tech: ['Flutter', 'Google Maps', 'Razorpay', 'Firebase'],
      stats: { downloads: '50K+', rating: '4.5' }
    },
    {
      id: 6,
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
      title: 'FinanceFlow',
      excerpt: 'Modern banking app UI design',
      year: '2024',
      type: 'UI/UX Design',
      name: 'FinanceFlow Banking UI',
      desc: 'Modern banking app UI with dark mode, intuitive navigation, and smooth micro-interactions.',
      tech: ['Figma', 'UI Design', 'Prototype'],
      stats: { likes: '2.5K', views: '15K' }
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
