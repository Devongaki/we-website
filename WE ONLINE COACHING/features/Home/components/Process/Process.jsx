import { Link } from 'react-router-dom';
import './Process.css';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "Tell us about your goals and current fitness level through our simple consultation form.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Custom Plan Creation",
      description: "We design a personalized program tailored to your needs, schedule, and fitness goals.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Start Training",
      description: "Begin your transformation journey with our expert guidance and ongoing support.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="process">
      <div className="process__container">
        <div className="process__header">
          <span className="process__label">How It Works</span>
          <p className="process__subtitle">
            We've made getting started as easy as possible. Follow these three simple steps to begin your transformation.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, index) => (
            <div key={index} className="process__step">
              <div className="process__step-header">
                <span className="process__step-number">{step.number}</span>
                <div className="process__step-icon">{step.icon}</div>
              </div>
              <div className="process__step-content">
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="process__step-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="process__cta">
          <Link to="/free-consultation" className="process__button">
            Start Your Journey
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process; 
