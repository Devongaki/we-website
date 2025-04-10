import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import '../styles/Process.css';

const Process = () => {
  const processRef = useRef(null);
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
    setCurrentSlide((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

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
                        <span key={i}>{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="process__mobile">
            <div className="process__slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {steps.map((step, index) => (
                <div key={index} className="process__slide">
                  <div className="process__step-content">
                    <div className="process__step-number">{index + 1}</div>
                    <div className="process__step-details">
                      <h3 className="process__step-title">{step.title}</h3>
                      <p className="process__step-description">{step.description}</p>
                      <div className="process__step-features">
                        {step.features.map((feature, i) => (
                          <span key={i}>{feature}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="process__controls">
              <button className="process__control-btn" onClick={prevSlide}>←</button>
              <div className="process__dots">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    className={`process__dot ${index === currentSlide ? 'process__dot--active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <button className="process__control-btn" onClick={nextSlide}>→</button>
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