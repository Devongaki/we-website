import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PaymentResult.css';

const PaymentSuccess = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    planName: 'Subscription Plan',
    amount: '0.00 NOK',
    date: new Date().toLocaleDateString(),
    paymentId: '',
  });
  
  const location = useLocation();
  
  useEffect(() => {
    // Get payment details from URL parameters
    const searchParams = new URLSearchParams(location.search);
    const paymentId = searchParams.get('payment_intent') || 'N/A';
    const planName = searchParams.get('plan') || paymentDetails.planName;
    const amount = searchParams.get('amount') || paymentDetails.amount;
    
    // Update payment details
    setPaymentDetails({
      ...paymentDetails,
      paymentId,
      planName,
      amount: amount ? `${amount} NOK` : paymentDetails.amount,
    });
    
    // Track conversion in analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'purchase', {
        transaction_id: paymentId,
        value: parseFloat(amount) || 0,
        currency: 'NOK',
        items: [{ name: planName }]
      });
    }
  }, [location]);

  return (
    <div className="payment-result">
      <div className="payment-result__container">
        <span className="payment-result__icon payment-result__icon--success">✅</span>
        <h1 className="payment-result__title">Payment Successful</h1>
        <p className="payment-result__message">
          Thank you for your payment! Your subscription has been activated, and you'll receive 
          a confirmation email shortly with all the details.
        </p>
        
        <div className="payment-result__details">
          <div className="payment-result__details-item">
            <span className="payment-result__details-label">Plan:</span>
            <span className="payment-result__details-value">{paymentDetails.planName}</span>
          </div>
          <div className="payment-result__details-item">
            <span className="payment-result__details-label">Amount:</span>
            <span className="payment-result__details-value">{paymentDetails.amount}</span>
          </div>
          <div className="payment-result__details-item">
            <span className="payment-result__details-label">Date:</span>
            <span className="payment-result__details-value">{paymentDetails.date}</span>
          </div>
          <div className="payment-result__details-item">
            <span className="payment-result__details-label">Payment ID:</span>
            <span className="payment-result__details-value">{paymentDetails.paymentId}</span>
          </div>
        </div>
        
        <p className="payment-result__message">
          Your fitness journey is about to begin! We recommend you get started right away by
          exploring your dashboard and setting up your profile.
        </p>
        
        <div className="payment-result__actions">
          <Link to="/dashboard" className="payment-result__button payment-result__button--primary">
            Go to Dashboard
          </Link>
          <Link to="/" className="payment-result__button payment-result__button--secondary">
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
