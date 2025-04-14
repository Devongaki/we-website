import { useState, useEffect } from 'react';
import './cookie-consent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save consent to localStorage
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
    
    // If you have Google Analytics, you can enable it here
    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted'
    });
  };

  const handleDecline = () => {
    // Save preference to localStorage
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
    
    // If you have Google Analytics, you can disable it here
    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__container">
        <div className="cookie-consent__content">
          <h3 className="cookie-consent__title">We Use Cookies</h3>
          <p className="cookie-consent__text">
            We use cookies to analyze our traffic and enhance your experience. 
            By clicking "Accept", you consent to our use of cookies. See our{' '}
            <a href="/privacy-policy" className="cookie-consent__link">
              Privacy Policy
            </a>{' '}
            for more information.
          </p>
        </div>
        <div className="cookie-consent__actions">
          <button 
            onClick={handleDecline} 
            className="cookie-consent__button cookie-consent__button--decline"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept} 
            className="cookie-consent__button cookie-consent__button--accept"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;