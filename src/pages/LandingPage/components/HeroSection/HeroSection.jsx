import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleReadWhitepaper = () => {
    navigate('/whitepaper');
  };

  return (
    <section className="lp-section lp-1-section" id="lp-1-section">
      <main className="landing-main">
        {/* Mobile Circle - only visible on mobile */}
        <div className="mobile-hero-semicircle">
          <svg 
            className="mobile-hero-arc-svg" 
            viewBox="0 0 400 400" 
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="heroArcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a8c0ff" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#c0d0ff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a8c0ff" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="heroGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4D7FFF" stopOpacity="0" />
                <stop offset="40%" stopColor="#4D7FFF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1246FF" stopOpacity="1" />
                <stop offset="60%" stopColor="#4D7FFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0" />
              </linearGradient>
              <filter id="heroGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Base circle */}
            <circle 
              cx="200" 
              cy="200" 
              r="180"
              stroke="url(#heroArcGradient)" 
              strokeWidth="1.5" 
              fill="none"
              className="hero-arc-base"
            />
            {/* Traveling glow circle */}
            <circle 
              cx="200" 
              cy="200" 
              r="180"
              stroke="url(#heroGlowGradient)" 
              strokeWidth="3" 
              fill="none"
              strokeLinecap="round"
              className="hero-arc-glow"
              filter="url(#heroGlowFilter)"
            />
          </svg>

          {/* Header icon buttons on the arc - same as header buttons */}
          {/* Left - Notification */}
          <button className="mobile-arc-icon mobile-arc-icon-left">
            <img src="/assets/203519ed928f5759c5c5434e7d71de7598f55b96.svg" alt="Notifications" />
          </button>

          {/* Center - Bot */}
          <button 
            className="mobile-arc-icon mobile-arc-icon-center"
            onClick={() => window.open('https://chatgpt.com/g/g-6811cd644b1c8191b203796b06deaa4a-openwork-simplified', '_blank')}
          >
            <img src="/assets/f424bb301166452f1d2aae2badd19051c2788323.svg" alt="Bot" />
          </button>

          {/* Right - Settings */}
          <button className="mobile-arc-icon mobile-arc-icon-right">
            <img src="/assets/141ae2395558d7fc65c358b46cf1beaa163ad655.svg" alt="Settings" />
          </button>
        </div>

        {/* Center Content */}
        <div className="hero-center-content">
          <div className="hero-text-content">
            <h1 className="hero-main-heading">The future of work is decentralised.</h1>
            <p className="hero-main-description">
              OpenWork is a decentralised work protocol, allowing people to work 
              directly with each other using blockchain technology, with decentralised governance.
            </p>
          </div>
          
          <button 
            className="hero-cta-button"
            onClick={handleReadWhitepaper}
          >
            Learn More
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.666667 7.33333L7.33333 0.666667M7.33333 0.666667H0.666667M7.33333 0.666667V7.33333" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
