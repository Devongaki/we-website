import React, { useState } from "react";
import "../styles/Process.css";

const Process = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const steps = [
    {
      title: "Free Consultation",
      description: "Share your fitness goals and journey with us through our consultation form.",
      features: ["Quick Assessment", "Goal Setting", "Current Fitness Level"]
    },
    {
      title: "Personal Contact",
      description: "Our expert team crafts your personalized fitness strategy.",
      features: ["Strategy Discussion", "Custom Plan Creation", "Schedule Alignment"]
    },
    {
      title: "Begin Your Journey",
      description: "Transform your fitness goals into reality with our expert guidance.",
      features: ["Personalized Workouts", "Nutrition Guidance", "Progress Tracking"]
    }
  ];

  const nextSlide = () => {
    console.log('nextSlide clicked');
    console.log('Current slide:', currentSlide);
    console.log('Total slides:', steps.length);
    
    if (currentSlide < steps.length - 1) {
      console.log('Moving to next slide:', currentSlide + 1);
      setCurrentSlide(currentSlide + 1);
    } else {
      console.log('Already at last slide');
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="process">
      <div className="container">
        <div className="process__header">
          <h2 className="process__title">HOW IT WORKS</h2>
        </div>

        <div className="process__timeline">
          {/* Desktop View */}
          <div className="process__desktop">
            {steps.map((step, index) => (
              <div key={index} className="process__step">
                <div className="process__step-content">
                  <div className="process__step-number">{index + 1}</div>
                  <div className="process__step-details">
                    <h3 className="process__step-title">{step.title}</h3>
                    <p className="process__step-description">{step.description}</p>
                    <div className="process__step-features">
                      {step.features.map((feature, i) => (
                        <span key={i}>✓ {feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="process__mobile">
            <div className="process__slider-container">
              <div 
                className="process__slider" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="process__slide">
                    <div className="process__step-content">
                      <div className="process__step-number">{index + 1}</div>
                      <div className="process__step-details">
                        <h3 className="process__step-title">{step.title}</h3>
                        <p className="process__step-description">{step.description}</p>
                        <div className="process__step-features">
                          {step.features.map((feature, i) => (
                            <span key={i}>✓ {feature}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="process__controls">
              <button 
                type="button" 
                className={`process__control-btn ${currentSlide === 0 ? 'process__control-btn--disabled' : ''}`}
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                ←
              </button>
              <div className="process__dots">
                {steps.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`process__dot ${index === currentSlide ? 'process__dot--active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <button 
                type="button" 
                className={`process__control-btn ${currentSlide === steps.length - 1 ? 'process__control-btn--disabled' : ''}`}
                onClick={() => {
                  console.log('Button clicked directly');
                  nextSlide();
                }}
                disabled={currentSlide === steps.length - 1}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process; 