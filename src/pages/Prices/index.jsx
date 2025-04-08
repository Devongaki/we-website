import './styles/Prices.css';

const Prices = () => {
  const pricingData = [
    {
      duration: '12 months',
      price: '1000',
      signUpFee: 'FREE',
      isPopular: true,
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
        'Commitment period (12 months)',
      ],
    },
    {
      duration: '6 months',
      price: '1250',
      signUpFee: '125',
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
        'Commitment period (6 months)',
      ],
    },
    {
      duration: '3 months',
      price: '1500',
      signUpFee: '200',
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

  return (
    <div className="prices">
      <div className="container">
        <h1 className="prices__title">Choose Your Plan</h1>
        <p className="prices__subtitle">
          Select the perfect coaching package that aligns with your fitness goals
        </p>
        
        <div className="prices__grid">
          {pricingData.map((plan, index) => (
            <div 
              key={plan.duration} 
              className={`price-card ${plan.isPopular ? 'price-card--popular' : ''}`}
            >
              {plan.isPopular && (
                <div className="price-card__badge">Most Popular</div>
              )}
              
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

              <button className={`button button--large ${plan.isPopular ? 'button--primary' : 'button--outline'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices; 