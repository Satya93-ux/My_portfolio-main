import React from 'react';

const Videos = () => {
    const videos = [
    {
      id: 1,
      title: "Landing Page for 'Divanex Tecnology'",
      duration: '30 sec',
      views: '2.5K views',
      desc: "A high-performance landing page built with modern web technologies, featuring smooth animations and responsive design.",
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Real-time Chatting App',
      duration: '1 min+',
      views: '1.8K views',
      desc: 'Full-featured chat application with real-time messaging, group channels, and secure file sharing powered by Flutter and Socket.io.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Driver App Walkthrough',
      duration: '45 sec',
      views: '1.2K views',
      desc: 'A comprehensive walkthrough of the Driver application, showcasing real-time navigation and earnings management.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 4,
      title: 'Customer App Demo',
      duration: '1 min',
      views: '3.1K views',
      desc: 'Exploring the seamless booking experience and premium UI of the ride-hailing passenger application.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  return (
    <section id="videos" className="videos" style={{ padding: 'var(--section-padding) 0', background: 'var(--bg-dark)' }}>
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
            WATCH
          </div>
          <div style={{ width: '60px', height: '4px', background: 'var(--gradient-primary)', margin: '0 auto 40px', borderRadius: '2px' }}></div>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            Watch detailed walkthroughs and demos of my featured projects
          </p>
        </div>

        <div className="videos-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', 
          gap: '30px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {videos.map(video => (
            <div key={video.id} className="video-card glass-card" style={{ 
              background: 'var(--bg-card)', 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div className="video-thumbnail" style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                <iframe 
                  src={video.url} 
                  title={video.title}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className="video-info" style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 className="video-title" style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>{video.title}</h3>
                <p className="video-description" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>{video.desc}</p>
                
                <div className="video-meta" style={{ marginTop: 'auto', display: 'flex', gap: '20px', paddingTop: '15px', borderTop: '1px solid var(--border-color-muted)' }}>
                  <span className="video-duration" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                    <i className="fas fa-clock" style={{ color: 'var(--primary)' }}></i> {video.duration}
                  </span>
                  <span className="video-views" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                    <i className="fas fa-eye" style={{ color: 'var(--primary)' }}></i> {video.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="videos-cta" style={{ marginTop: '50px', textAlign: 'center' }}>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
            padding: '14px 32px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            fontWeight: '700',
            fontSize: '0.9rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'var(--transition-normal)'
          }}>
            <span className="btn-text">Watch More on YouTube</span>
            <span className="btn-icon"><i className="fab fa-youtube" style={{ color: '#ff0000' }}></i></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
