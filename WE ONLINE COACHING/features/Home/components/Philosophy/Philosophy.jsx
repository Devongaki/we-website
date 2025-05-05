import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
  const principles = [
    {
      icon: "🎯",
      title: "Personalization",
      description: "Every program is custom-built for your unique goals, lifestyle, and preferences. We don't believe in one-size-fits-all solutions."
    },
    {
      icon: "⚖️",
      title: "Balance",
      description: "We focus on sustainable approaches that fit into your life, allowing you to enjoy social events, favorite foods, and flexibility."
    },
    {
      icon: "🔄",
      title: "Consistency",
      description: "Small, consistent actions lead to remarkable results. We'll help you build sustainable habits that lead to lasting change."
    }
  ];

  return (
    <section className="philosophy">
      <div className="container">
        <div className="philosophy__card">
          <div className="philosophy__header">
            <h2 className="philosophy__title">Our Coaching Philosophy</h2>
            <p className="philosophy__description">
              At WE Online Coaching, we believe that fitness should enhance your life, not consume it. 
              Our approach is built on three core principles:
            </p>
          </div>

          <div className="philosophy__principles">
            {principles.map((principle, index) => (
              <div 
                key={index} 
                className="philosophy__principle"
                style={{ '--delay': `${index * 0.2}s` }}
              >
                <div className="philosophy__principle-icon">{principle.icon}</div>
                <div className="philosophy__principle-content">
                  <h3 className="philosophy__principle-title">{principle.title}</h3>
                  <p className="philosophy__principle-description">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy; 