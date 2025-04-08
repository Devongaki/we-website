import { useState, useEffect } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import './Checkout.css';

const Checkout = ({ selectedPlan, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    console.log('Checkout component mounted');
    console.log('Stripe object available:', !!stripe);
    console.log('Elements object available:', !!elements);
    
    if (!stripe || !elements) {
      console.log('Stripe or Elements not available yet');
    } else {
      console.log('Stripe and Elements are available');
    }
  }, [stripe, elements]);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setError(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      console.error('Stripe or Elements not available');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let result;
      
      switch (paymentMethod) {
        case 'stripe':
          console.log('Confirming payment with Stripe');
          result = await stripe.confirmPayment({
            elements,
            confirmParams: {
              return_url: `${window.location.origin}/payment-confirmation`,
            },
          });
          break;
          
        case 'vipps':
          // Implement Vipps payment flow
          window.location.href = '/api/vipps/initiate-payment';
          return;
          
        case 'klarna':
          // Implement Klarna payment flow
          window.location.href = '/api/klarna/initiate-payment';
          return;
          
        default:
          throw new Error('Invalid payment method');
      }

      if (result?.error) {
        console.error('Payment error:', result.error);
        setError(result.error.message);
      } else {
        console.log('Payment successful:', result);
      }
    } catch (err) {
      console.error('Payment exception:', err);
      setError('An error occurred during payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout">
      <div className="checkout__overlay" onClick={onClose}></div>
      <div className="checkout__modal">
        <button className="checkout__close" onClick={onClose}>×</button>
        
        <div className="checkout__header">
          <div className="checkout__plan">
            <h3>{selectedPlan.duration} Plan</h3>
            <p className="checkout__price">
              <span className="checkout__amount">{selectedPlan.price} NOK</span>
              <span className="checkout__period">/ month</span>
            </p>
            <p className="checkout__signup-fee">
              Sign-up fee: {selectedPlan.signUpFee === 'FREE' ? 
                <span className="checkout__free">FREE</span> : 
                `${selectedPlan.signUpFee} NOK`
              }
            </p>
          </div>
        </div>

        <div className="checkout__payment-methods">
          <h3>Select Payment Method</h3>
          <div className="checkout__method-buttons">
            <button
              className={`checkout__method-button ${paymentMethod === 'stripe' ? 'active' : ''}`}
              onClick={() => handlePaymentMethodChange('stripe')}
            >
              <img src="/images/payment/card-icon.svg" alt="Credit Card" />
              <span>Card Payment</span>
            </button>
            <button
              className={`checkout__method-button ${paymentMethod === 'vipps' ? 'active' : ''}`}
              onClick={() => handlePaymentMethodChange('vipps')}
            >
              <img src="/images/payment/vipps-icon.svg" alt="Vipps" />
              <span>Vipps</span>
            </button>
            <button
              className={`checkout__method-button ${paymentMethod === 'klarna' ? 'active' : ''}`}
              onClick={() => handlePaymentMethodChange('klarna')}
            >
              <img src="/images/payment/klarna-icon.svg" alt="Klarna" />
              <span>Klarna</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="checkout__form">
          {paymentMethod === 'stripe' && (
            <div className="checkout__stripe-element">
              <PaymentElement />
            </div>
          )}
          
          {error && (
            <div className="checkout__error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="button button--primary button--large checkout__submit"
            disabled={loading || !stripe}
          >
            {loading ? 'Processing...' : 'Complete Purchase'}
          </button>
        </form>

        <div className="checkout__footer">
          <p>By completing this purchase, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 