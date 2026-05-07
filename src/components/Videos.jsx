import React from 'react';

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: 'E-Commerce App - Complete Demo',
      duration: '12:45',
      views: '5.2K',
      desc: 'Full walkthrough of the ShopEase app showing all features including product browsing, cart, checkout, and order tracking.',
      tags: ['Flutter', 'Demo', 'E-Commerce'],
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Real-time Chat Implementation',
      duration: '15:30',
      views: '3.8K',
      desc: 'Learn how I implemented real-time chat, stories, and video calling in the ConnectHub social media app.',
      tags: ['Flutter', 'Socket.io', 'Chat'],
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Flutter Animation Masterclass',
      duration: '20:15',
      views: '8.5K',
      desc: 'Deep dive into creating stunning animations using AnimationController, Tween, and custom curves in Flutter.',
      tags: ['Flutter', 'Tutorial', 'Animation'],
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 4,
      title: 'GetX State Management Guide',
      duration: '25:00',
      views: '12K',
      desc: 'Complete guide to GetX state management - from basics to advanced patterns used in production apps.',
      tags: ['Flutter', 'GetX', 'Tutorial'],
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  return (
    <section id="videos" className="videos">
      <div className="container">
        <div className="section-label">
          <span className="label-number">05</span>
          <span className="label-text">Video Showcase</span>
          <span className="label-line"></span>
        </div>

        <div className="videos-header">
          <h2 className="section-title">Project Demos & Tutorials</h2>
          <p className="section-subtitle">
            Watch my project demonstrations and Flutter development tutorials
          </p>
        </div>

        <div className="videos-grid">
          {videos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <div className="video-embed">
                  <iframe 
                    src={video.url} 
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
              <div className="video-info">
                <div className="video-meta">
                  <span className="video-duration"><i className="fas fa-clock"></i> {video.duration}</span>
                  <span className="video-views"><i className="fas fa-eye"></i> {video.views} views</span>
                </div>
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.desc}</p>
                <div className="video-tags">
                  {video.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="videos-cta">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <span className="btn-text">Watch More on YouTube</span>
            <span className="btn-icon"><i className="fab fa-youtube"></i></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
