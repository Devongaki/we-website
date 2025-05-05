import React from "react";
import "./Features.css";

const Features = () => {
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
    <section className="features features--philosophy">
      <div className="container">
        <div className="features__header">
          <h2 className="features__title">Our Coaching Philosophy</h2>
          <p className="features__description">
            At WE Online Coaching, we believe that fitness should enhance your life, not consume it. 
            Our approach is built on three core principles:
          </p>
        </div>

        <div className="features__principles">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="principle-item"
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className="principle-item__icon">{principle.icon}</div>
              <div className="principle-item__content">
                <h3 className="principle-item__title">{principle.title}</h3>
                <p className="principle-item__description">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 