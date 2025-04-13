import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Prices.css';

const Prices = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (index) => {
    console.log('Tab clicked:', index);
    setActiveTab(index);
  };

  const pricingData = [
    {
      duration: '12 months',
      price: '1000',
      signUpFee: 'FREE',
      features: [
        'Personalized training program',
        'Nutrition guidance and support (ongoing)',
        'Weekly check-ins (online video meetings: Progress and adjustments)',
        'Chat access',
        'Exercise video instructions',
        'Training technique support',
        'Log your training sessions',
        'Progress overview',
        'All-in-one app',
        'Commitment period (3 months)',
      ],
    },
    {
      duration: '6 months',
      price: '1250',
      signUpFee: 'FREE',
      features: [
        'Personalized training program',
        'Nutrition guidance and support (3 months)',
        'Monthly Check-ins (online video meeting x1 / month: Progress and adjustments)',
        'Chat access',
        'Exercise video instructions',
        'Training technique support',
        'Log your training sessions',
        'Progress overview',
        'All-in-one app',
        'Commitment period (3 months)',
      ],
    },
    {
      duration: '3 months',
      price: '1500',
      signUpFee: 'FREE',
      features: [
        'Personalized training program',
        'Nutrition guidance and support (1 month)',
        'Two check-ins (e.g. online video meetings: 1 in the first and last month)',
        'Chat access',
        'Exercise video instructions',
        'Training technique support',
        'Log your training sessions',
        'Progress overview',
        'All-in-one app',
        'Commitment period (3 months)',
      ],
    },
  ];

  const handlePlanSelect = (plan) => {
    navigate('/checkout', { state: { plan } });
  };

  return (
    <div className="prices">
      <div className="container">
        <h1 className="prices__title">Choose Your Plan</h1>
        <p className="prices__subtitle">
          Select the perfect coaching package that aligns with your fitness goals
        </p>
        
        {/* Desktop Grid View */}
        <div className="prices__grid">
          {pricingData.map((plan) => (
            <div 
              key={plan.duration} 
              className="price-card"
            >
              <div className="price-card__header">
                <h2 className="price-card__duration">{plan.duration}</h2>
                <div className="price-card__price">
                  <span className="price-card__currency">NOK</span>
                  <span className="price-card__amount">{plan.price}</span>
                  <span className="price-card__period">/ month</span>
                </div>
                <div className="price-card__signup">
                  Sign-up fee: {plan.signUpFee === 'FREE' ? 
                    <span className="price-card__free">FREE</span> : 
                    <span>{plan.signUpFee} NOK</span>
                  }
                </div>
              </div>

              <ul className="price-card__features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="price-card__feature">
                    <svg className="price-card__check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className="button button--large button--outline"
                onClick={() => handlePlanSelect(plan)}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Tabs View */}
        <div className="prices__tabs">
          <div className="prices__tab-buttons">
            <div className="prices__tab-background" data-active={activeTab} />
            <button
              className={`prices__tab-button ${activeTab === 0 ? 'prices__tab-button--active' : ''}`}
              onClick={() => setActiveTab(0)}
            >
              12 months
            </button>
            <button
              className={`prices__tab-button ${activeTab === 1 ? 'prices__tab-button--active' : ''}`}
              onClick={() => setActiveTab(1)}
            >
              6 months
            </button>
            <button
              className={`prices__tab-button ${activeTab === 2 ? 'prices__tab-button--active' : ''}`}
              onClick={() => setActiveTab(2)}
            >
              3 months
            </button>
          </div>

          <div className="prices__tab-content">
            {pricingData.map((plan, index) => (
              <div 
                key={plan.duration}
                className={`prices__tab-panel ${activeTab === index ? 'prices__tab-panel--active' : ''}`}
              >
                <div className="prices__tab-header">
                  <h2 className="prices__tab-title">{plan.duration} Plan</h2>
                  <div className="prices__tab-price-large">
                    <span className="prices__tab-currency">NOK</span>
                    <span className="prices__tab-amount">{plan.price}</span>
                    <span className="prices__tab-period">/ month</span>
                  </div>
                  <div className="prices__tab-signup">
                    Sign-up fee: {plan.signUpFee === 'FREE' ? 
                      <span className="prices__tab-free">FREE</span> : 
                      <span>{plan.signUpFee} NOK</span>
                    }
                  </div>
                </div>

                <ul className="prices__tab-features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="prices__tab-feature">
                      <svg className="prices__tab-check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className="button button--large button--outline"
                  onClick={() => handlePlanSelect(plan)}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices; 