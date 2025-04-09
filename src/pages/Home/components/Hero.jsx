import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Transform Your Body, <br />
            <span className="hero__title-highlight">Transform Your Life</span>
          </h1>
          <p className="hero__description">
            Achieve your fitness goals with personalized online coaching, expert guidance,
            and a supportive community. Start your transformation today.
          </p>
          <div className="hero__cta-group">
            <Link to="/free-program" className="button button--primary button--large">
              Get Free Program
            </Link>
            <Link to="/free-consultation" className="button button--outline button--large">
              Free Consultation
            </Link>
          </div>
        </div>
        <div className="hero__image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Professional online fitness coaching"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 