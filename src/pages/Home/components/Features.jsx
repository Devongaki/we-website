import '../styles/Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section__title">Why Choose Us?</h2>
        <div className="features__grid">
          <div className="feature-card">
            <div className="feature-card__icon">🎯</div>
            <h3 className="feature-card__title">Personalized Programs</h3>
            <p className="feature-card__description">
              Custom workout and nutrition plans tailored to your goals, lifestyle, and preferences.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">📱</div>
            <h3 className="feature-card__title">24/7 Support</h3>
            <p className="feature-card__description">
              Direct access to your coach through our mobile app for guidance whenever you need it.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">📊</div>
            <h3 className="feature-card__title">Progress Tracking</h3>
            <p className="feature-card__description">
              Advanced tracking tools to monitor your progress and adjust your program for optimal results.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">🤝</div>
            <h3 className="feature-card__title">Community Support</h3>
            <p className="feature-card__description">
              Join our supportive community of like-minded individuals on their fitness journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 