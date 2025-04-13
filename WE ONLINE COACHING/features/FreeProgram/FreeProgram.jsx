import { useState, useEffect } from 'react';
import './FreeProgram.css';

const FreeProgram = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  // Validate email whenever it changes
  useEffect(() => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${window.location.origin}/.netlify/functions/send-workout-plan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send workout plan');
      }

      setShowSuccess(true);
      setEmail('');
    } catch (err) {
      setError(err.message || 'Failed to send the workout plan. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="free-program-modal">
      <div className="free-program-modal__content">
        <button 
          className="free-program-modal__close" 
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        
        {showSuccess ? (
          <div className="free-program-modal__success">
            <div className="free-program-modal__success-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Your free workout program has been sent to your email.</p>
            <p>Please check your inbox (and spam folder) in the next few minutes.</p>
            
            <div className="free-program-modal__social">
              <h3 className="free-program-modal__social-title">Follow Us For More Tips</h3>
              <p>Get daily workout inspiration and nutrition advice</p>
              
              <div className="free-program-modal__social-buttons">
                <a 
                  href="https://www.instagram.com/we.onlinecoaching" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="free-program-modal__social-button free-program-modal__instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                  Follow on Instagram
                </a>
                
                <button 
                  onClick={onClose}
                  className="free-program-modal__social-button free-program-modal__close-button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="free-program-modal__title">Get Your Free Workout Program</h2>
            <p className="free-program-modal__description">
              Enter your email below and we'll send you our beginner-friendly workout program right away!
            </p>

            <form onSubmit={handleSubmit} className="free-program-modal__form">
              <div className="form__group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {error && <p className="free-program-modal__error">{error}</p>}

              <button 
                type="submit" 
                className="free-program-modal__button"
                disabled={isSubmitting || !isValidEmail}
              >
                {isSubmitting ? 'Sending...' : !isValidEmail ? 'Enter Valid Email' : 'Send Me The Program'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default FreeProgram; 