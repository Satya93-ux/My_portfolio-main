import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Videos from './components/Videos';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import usePortfolioScripts from './hooks/usePortfolioScripts';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  // Hide preloader after 1.8 s, matching original script.js timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.add('loaded');
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Initialise all interactive behaviours once the page has rendered
  usePortfolioScripts();

  return (
    <div className="app-wrapper">
      {/* Preloader */}
      {loading && (
        <div className="preloader" id="preloader">
          <div className="preloader-inner">
            <div className="preloader-icon">
              <span className="preloader-text">A</span>
            </div>
            <div className="preloader-bar">
              <div className="preloader-progress"></div>
            </div>
            <p className="preloader-loading">Loading Experience...</p>
          </div>
        </div>
      )}

      <CustomCursor />
      <div className="noise-overlay"></div>

      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Videos />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Back to Top */}
      <button
        className="back-to-top"
        id="backToTop"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default App;
