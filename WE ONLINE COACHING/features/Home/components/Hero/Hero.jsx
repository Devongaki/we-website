import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FreeProgram from '../../../FreeProgram/FreeProgram';
import './Hero.css';

const Hero = () => {
  const [showFreeProgram, setShowFreeProgram] = useState(false);

  return (
    <section 
      className="hero" 
      style={{
        backgroundImage: 'url(/images/hero/ambitious-studio-rick-barrett-w7jYaN7GqyA-unsplash.jpg)'
      }}
    >
      <div className="hero__overlay"></div>
      <div className="hero__container">
        <div className="hero__text-bg">
          <div className="hero__content">
            <div className="hero__badge">WE Online Coaching</div>
            <h1 className="hero__title">
              Build Your Best Self with <span className="highlight-text">Dedicated Online Coaching</span>
            </h1>
            <p className="hero__description">
              Achieve your strength training goals with dedicated coaches. Get a personalized program, nutrition guidance, and consistent support to stay on track. Start your transformation today!
            </p>
            <div className="hero__cta-group">
              <Link to="/free-consultation" className="button button--primary">Free Consultation</Link>
              <button className="button button--outline" onClick={() => setShowFreeProgram(true)}>Free Program</button>
            </div>
          </div>
        </div>
      </div>
      <FreeProgram isOpen={showFreeProgram} onClose={() => setShowFreeProgram(false)} />
    </section>
  );
};

export default Hero; 