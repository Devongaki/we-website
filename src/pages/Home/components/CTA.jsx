import { Link } from 'react-router-dom';
import '../styles/CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__content">
          <h2 className="cta__title">Ready to Start Your Transformation?</h2>
          <p className="cta__description">
            Take the first step towards your fitness goals with a free consultation.
            Our expert coaches are ready to create your personalized plan.
          </p>
          <div className="cta__buttons">
            <Link to="/get-started" className="button button--primary button--large">
              Get Started Now
            </Link>
            <Link to="/free-consultation" className="button button--outline button--large cta__button--secondary">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 