import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Personalized Coaching",
      description: "Get a training program tailored to your goals, fitness level, and lifestyle."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Progress Tracking",
      description: "Monitor your improvements with detailed progress reports and analytics."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Nutrition Guidance",
      description: "Receive expert nutrition advice to complement your training program."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Expert Workouts",
      description: "Access professionally designed workouts with video demonstrations."
    }
  ];

  return (
    <section className="features features--minimal">
      <div className="container">
        <div className="features__header">
          <span className="features__label">WHO WE ARE</span>
          <h2 className="features__title">Transform Your Fitness Journey</h2>
          <p className="features__description">
            We are two passionate fitness coaches dedicated to transforming lives through personalized training. 
            Our mission is to combine our expertise in strength training, nutrition, and mindset coaching to help 
            you achieve lasting results.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="feature-card__icon">
                {feature.icon}
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features__image-section">
          <div className="features__image-container">
            <img 
              src="/images/coaches/william.jpg" 
              alt="Coach William" 
              className="features__image"
            />
            <div className="features__image-overlay"></div>
          </div>
          <div className="features__stats">
            <div className="features__stat">
              <span className="features__stat-number">500+</span>
              <span className="features__stat-label">Clients Transformed</span>
            </div>
            <div className="features__stat">
              <span className="features__stat-number">10+</span>
              <span className="features__stat-label">Years Experience</span>
            </div>
            <div className="features__stat">
              <span className="features__stat-number">98%</span>
              <span className="features__stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;