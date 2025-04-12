import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features features--minimal">
      <div className="container">
        <div className="features__header-minimal">
          <span className="features__label">Why choose us</span>
          <h2>Transform with Expert Support</h2>
          <div className="features__underline"></div>
        </div>
        
        <div className="features__grid">
          <div className="feature-item">
            <div className="feature-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3>Personalized Coaching</h3>
            <p>Custom training programs designed specifically for your body, goals, and lifestyle.</p>
          </div>

          <div className="feature-item">
            <div className="feature-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3>Progress Tracking</h3>
            <p>Monitor your fitness journey with detailed analytics and visual progress reports.</p>
          </div>

          <div className="feature-item">
            <div className="feature-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3>Nutrition Guidance</h3>
            <p>Expert dietary advice to fuel your workouts and optimize your results.</p>
          </div>
        </div>

        <div className="features__app">
          <div className="features__app-content">
            <h3>All-in-One Fitness Platform</h3>
            <div className="features__app-points">
              <div className="app-point">
                <span>✓</span>
                <p>Workout video library</p>
              </div>
              <div className="app-point">
                <span>✓</span>
                <p>Direct coach messaging</p>
              </div>
              <div className="app-point">
                <span>✓</span>
                <p>Progress photo tracking</p>
              </div>
              <div className="app-point">
                <span>✓</span>
                <p>Exercise demonstrations</p>
              </div>
            </div>
          </div>
          <div className="features__app-img">
            <img 
              src="./images/features/app-showcase.jpg" 
              alt="WE Fitness App Interface"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;