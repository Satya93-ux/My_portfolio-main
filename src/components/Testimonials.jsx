import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Satyaprakash delivered an exceptional e-commerce app that exceeded our expectations. His attention to detail and technical expertise made our vision come to life perfectly.',
      author: 'John Smith',
      role: 'CEO, TechStart Inc.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      rating: 5,
    },
    {
      id: 2,
      text: 'Working with Satyaprakash was an absolute pleasure. He understood our requirements quickly and delivered a beautiful, performant app ahead of schedule. Highly recommended!',
      author: 'Sarah Johnson',
      role: 'Product Manager, AppCo',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      rating: 5,
    },
    {
      id: 3,
      text: "Satyaprakash's expertise in Flutter is remarkable. He built our fitness app with complex features and smooth animations. The code quality was exceptional and well-documented.",
      author: 'Mike Chen',
      role: 'Founder, FitLife',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      rating: 4.5,
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-label">
          <span className="label-number">—</span>
          <span className="label-text">Testimonials</span>
          <span className="label-line"></span>
        </div>

        <div className="testimonials-content">
          <h2 className="section-title">What clients say about me</h2>

          <div className="testimonials-slider" id="testimonialSlider">
            <div className="testimonials-track">
              {testimonials.map((t) => (
                <div key={t.id} className="testimonial-item">
                  <div className="testimonial-card">
                    <div className="testimonial-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i
                          key={star}
                          className={
                            star <= Math.floor(t.rating)
                              ? 'fas fa-star'
                              : star <= t.rating
                              ? 'fas fa-star-half-alt'
                              : 'far fa-star'
                          }
                        ></i>
                      ))}
                    </div>
                    <blockquote className="testimonial-text">"{t.text}"</blockquote>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <img src={t.avatar} alt={t.author} />
                      </div>
                      <div className="author-info">
                        <h4 className="author-name">{t.author}</h4>
                        <span className="author-role">{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation — wired up by usePortfolioScripts */}
            <div className="testimonials-nav">
              <button className="nav-arrow prev" id="prevTestimonial">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="nav-arrow next" id="nextTestimonial">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
