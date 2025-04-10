import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import '../styles/Process.css';

const Process = () => {
  const processRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('process--visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);

  return (
    <section className="process" ref={processRef}>
      <div className="container">
        <div className="process__header">
          <h2 className="process__title">How It Works</h2>
        </div>
        
        <div className="process__timeline">
          <div className="process__step">
            <div className="process__step-content">
              <span className="process__step-number">1</span>
              <div className="process__step-icon">
                <svg className="process__icon" viewBox="0 0 24 24">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM19 8c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                </svg>
              </div>
              <div className="process__step-details">
                <h3 className="process__step-title">Free Consultation</h3>
                <div className="process__step-description">
                  <p>Share your fitness goals and journey with us through our consultation form.</p>
                  <div className="process__step-features">
                    <span>✓ Quick Assessment</span>
                    <span>✓ Goal Setting</span>
                    <span>✓ Current Fitness Level</span>
                  </div>
                </div>
                <Link to="/free-consultation" className="process__step-link">
                  Start Here
                  <span className="process__step-link-arrow">→</span>
                </Link>
              </div>
            </div>
            <div className="process__step-path"></div>
          </div>

          <div className="process__step">
            <div className="process__step-content">
              <span className="process__step-number">2</span>
              <div className="process__step-icon">
                <svg className="process__icon" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              <div className="process__step-details">
                <h3 className="process__step-title">Personal Contact</h3>
                <div className="process__step-description">
                  <p>Our expert team crafts your personalized fitness strategy.</p>
                  <div className="process__step-features">
                    <span>✓ Strategy Discussion</span>
                    <span>✓ Custom Plan Creation</span>
                    <span>✓ Schedule Alignment</span>
                  </div>
                </div>
                <div className="process__step-timeline">
                  <span>Within 24 Hours</span>
                </div>
              </div>
            </div>
            <div className="process__step-path"></div>
          </div>

          <div className="process__step">
            <div className="process__step-content">
              <span className="process__step-number">3</span>
              <div className="process__step-icon">
                <svg className="process__icon" viewBox="0 0 24 24">
                  <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
                </svg>
              </div>
              <div className="process__step-details">
                <h3 className="process__step-title">Begin Your Journey</h3>
                <div className="process__step-description">
                  <p>Start your transformation with expert guidance and support.</p>
                  <div className="process__step-features">
                    <span>✓ Personalized Workouts</span>
                    <span>✓ Nutrition Guidance</span>
                    <span>✓ Progress Tracking</span>
                  </div>
                </div>
                <div className="process__step-progress">
                  <div className="process__progress-bar">
                    <div className="process__progress-fill"></div>
                  </div>
                  <span>Transform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="process__background">
        <div className="process__circle process__circle--1"></div>
        <div className="process__circle process__circle--2"></div>
        <div className="process__circle process__circle--3"></div>
      </div>
    </section>
  );
};

export default Process; 