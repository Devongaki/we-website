import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './Checkout';

// Use test key temporarily
const stripePromise = loadStripe('pk_test_51RBDv39vE5ISpIBOC9RKqlFa4BPvQNUM4y3W4QQdzOLS2T3TW5jBntkt3lPlFlQXIRmZgFWQtIqyBEiz1LE8P7Zp00pYT3XYLp');

const CheckoutForm = ({ clientSecret, selectedPlan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-confirmation`,
        },
      });

      if (error) {
        setError(error.message);
        setProcessing(false);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      setProcessing(false);
    }
  };

  const buttonText = processing 
    ? 'Processing...' 
    : `Pay ${selectedPlan.price} NOK now`;

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-group">
        <PaymentElement />
      </div>

      {error && (
        <div className="checkout-page__error">
          <p>{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="button button--primary checkout-page__submit"
      >
        {buttonText}
      </button>

      <div className="checkout-page__security">
        <div className="security-item">
          <span className="icon">🔒</span>
          Guaranteed safe & secure checkout
        </div>
        <div className="security-item">
          <span className="icon">🛡️</span>
          SSL Secure Payment
        </div>
      </div>
    </form>
  );
};

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState(null);
  const [error, setError] = useState(null);

  const selectedPlan = location.state?.plan;

  useEffect(() => {
    if (!selectedPlan) {
      navigate('/prices');
      return;
    }

    let isSubscribed = true;

    const fetchClientSecret = async () => {
      try {
        if (!isSubscribed) return;
        
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan: selectedPlan.duration,
            price: selectedPlan.price,
            signUpFee: selectedPlan.signUpFee === 'FREE' ? 0 : selectedPlan.signUpFee,
          }),
        });

        if (!isSubscribed) return;

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || data.details || 'Failed to create payment intent');
        }

        if (data.clientSecret && isSubscribed) {
          setClientSecret(data.clientSecret);
        } else {
          throw new Error('No client secret received');
        }
      } catch (err) {
        if (!isSubscribed) return;
        console.error('Payment intent error:', err);
        setError(err.message);
        setClientSecret(null);
      }
    };

    fetchClientSecret();

    return () => {
      isSubscribed = false;
    };
  }, [selectedPlan, navigate]);

  if (!selectedPlan) return null;

  if (!clientSecret) {
    return (
      <div className="checkout-page__loading">
        <div className="checkout-page__spinner" />
        <p>Loading payment form...</p>
      </div>
    );
  }

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#5469d4',
        colorBackground: '#ffffff',
        colorText: '#32325d',
        colorDanger: '#fa755a',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        spacingUnit: '4px',
        borderRadius: '4px',
      },
    },
  };

  return (
    <div className="checkout-page">
      <div className="checkout-page__container">
        {/* Left Panel */}
        <div className="checkout-page__details">
          <button 
            className="checkout-page__back-button"
            onClick={() => navigate('/prices')}
          >
            ← Back
          </button>
          <div className="checkout-page__logo">
            <img src="/images/we-logo.png" alt="WE Online Coaching" />
          </div>
          <div className="checkout-page__summary">
            <h2>{selectedPlan.duration}</h2>
            <div className="checkout-page__price">
              <span className="checkout-page__amount">{selectedPlan.price} NOK</span>
              <span className="checkout-page__period">/ month</span>
            </div>
            {selectedPlan.signUpFee !== 'FREE' && (
              <div className="checkout-page__signup-fee">
                Sign-up fee: {selectedPlan.signUpFee} NOK
              </div>
            )}
          </div>

          <div className="checkout-page__benefits">
            <h3>What's included:</h3>
            <ul>
              <li>
                <span className="icon">✓</span>
                Personalized workout program
              </li>
              <li>
                <span className="icon">✓</span>
                Nutrition guidance and meal plans
              </li>
              <li>
                <span className="icon">✓</span>
                Weekly check-ins with your coach
              </li>
              <li>
                <span className="icon">✓</span>
                Access to our mobile app
              </li>
              <li>
                <span className="icon">✓</span>
                24/7 chat support
              </li>
            </ul>
          </div>

          <div className="checkout-page__guarantee">
            <div className="guarantee-badge">
              <span className="icon">⭐</span>
              <h3>100% Satisfaction Guarantee</h3>
              <p>Not satisfied with our service? Get a full refund within the first 14 days.</p>
            </div>
          </div>

          <div className="checkout-page__contact">
            <h3>Need help?</h3>
            <p>Contact us at <a href="mailto:support@weonlinecoaching.com">support@weonlinecoaching.com</a></p>
            <p>Available Monday-Friday, 9:00-17:00</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="checkout-page__payment">
          <h1>Complete your purchase</h1>
          
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm clientSecret={clientSecret} selectedPlan={selectedPlan} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 