import { useState } from 'react';
import { Link } from 'react-router-dom';
import FreeProgram from '../../../FreeProgram/FreeProgram';
import './Hero.css';

const Hero = () => {
  const [showFreeProgram, setShowFreeProgram] = useState(false);

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>
      
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">WE Online Coaching</div>
          
          <h1 className="hero__title">
            Build Strength.
            <span className="hero__title-highlight">Build Confidence.</span>
          </h1>
          
          <p className="hero__description">
            Achieve your fitness goals with personalized online coaching, expert guidance,
            and a supportive community. Start your transformation today.
          </p>
          
          <div className="hero__cta-group">
            <button 
              onClick={() => setShowFreeProgram(true)}
              className="button button--primary button--large"
            >
              Get Free Program
            </button>
            <Link to="/free-consultation" className="button button--outline button--large">
              Free Consultation
            </Link>
          </div>
          
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">100%</span>
              <span className="hero__stat-label">Personalized</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">Expert</span>
              <span className="hero__stat-label">Guidance</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">Flexible</span>
              <span className="hero__stat-label">Support</span>
            </div>
          </div>
        </div>
        
        <div className="hero__media">
          <div className="hero__image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Professional online fitness coaching"
              className="hero__image"
            />
          </div>
          <div className="hero__accent-shape"></div>
        </div>
      </div>

      <FreeProgram 
        isOpen={showFreeProgram}
        onClose={() => setShowFreeProgram(false)}
      />
    </section>
  );
};

export default Hero; 