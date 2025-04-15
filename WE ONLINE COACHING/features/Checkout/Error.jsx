import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PaymentResult.css';

const PaymentError = () => {
  const [errorDetails, setErrorDetails] = useState({
    errorType: 'payment_failed',
    errorMessage: 'Your payment could not be processed. Please try again or use a different payment method.',
    errorCode: '',
  });
  
  const location = useLocation();
  
  useEffect(() => {
    // Get error details from URL parameters
    const searchParams = new URLSearchParams(location.search);
    const errorType = searchParams.get('error_type') || errorDetails.errorType;
    const errorCode = searchParams.get('error_code') || '';
    
    // Set different messages based on error type
    let errorMessage = errorDetails.errorMessage;
    
    if (errorType === 'card_declined') {
      errorMessage = 'Your card was declined. Please try another payment method or contact your bank.';
    } else if (errorType === 'expired_card') {
      errorMessage = 'Your card has expired. Please use a different card.';
    } else if (errorType === 'processing_error') {
      errorMessage = 'An error occurred while processing your payment. Please try again later.';
    }
    
    // Update error details
    setErrorDetails({
      errorType,
      errorMessage,
      errorCode,
    });
    
    // Track error in analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'payment_error', {
        error_type: errorType,
        error_code: errorCode,
      });
    }
  }, [location]);

  return (
    <div className="payment-result">
      <div className="payment-result__container">
        <span className="payment-result__icon payment-result__icon--error">❌</span>
        <h1 className="payment-result__title">Payment Failed</h1>
        <p className="payment-result__message">
          {errorDetails.errorMessage}
        </p>
        
        {errorDetails.errorCode && (
          <div className="payment-result__details">
            <div className="payment-result__details-item">
              <span className="payment-result__details-label">Error Code:</span>
              <span className="payment-result__details-value">{errorDetails.errorCode}</span>
            </div>
          </div>
        )}
        
        <p className="payment-result__message">
          If you continue to experience issues, please contact our support team at we.onlinecoaching@gmail.com and we'll help you resolve the problem.
        </p>
        
        <div className="payment-result__actions">
          <Link to="/checkout" className="payment-result__button payment-result__button--primary">
            Try Again
          </Link>
          <Link to="/prices" className="payment-result__button payment-result__button--secondary">
            Back to Plans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentError;
