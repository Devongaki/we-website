import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features features--minimal">
      <div className="features__container">
        <div className="features__content">
          <span className="features__label">WHO WE ARE</span>
          <div className="features__header-minimal">
            <p className="features__description">
              We are two passionate fitness coaches dedicated to transforming lives through personalized training. 
              Our mission is to combine our expertise in strength training, nutrition, and mindset coaching to help 
              you achieve lasting results. We believe in building strong foundations, both in fitness and in the 
              relationships we develop with our clients.
            </p>
          </div>
          
          <div className="features__grid">
            <div className="feature-item">
              <div className="feature-item__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3>Personalized Coaching</h3>
            </div>

            <div className="feature-item">
              <div className="feature-item__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3>Progress Tracking</h3>
            </div>

            <div className="feature-item">
              <div className="feature-item__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>Nutrition Guidance</h3>
            </div>

            <div className="feature-item">
              <div className="feature-item__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Expert Workouts</h3>
            </div>
          </div>
        </div>

        <div className="features__image-container">
          <div className="features__image-overlay"></div>
          <img 
            src="/images/coaches/william.jpg" 
            alt="Coach William" 
            className="features__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;