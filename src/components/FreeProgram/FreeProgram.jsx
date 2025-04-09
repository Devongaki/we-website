import { useState } from 'react';
import './FreeProgram.css';

const FreeProgram = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/.netlify/functions/send-workout-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send workout plan');
      }

      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        setShowSuccess(false);
        setEmail('');
      }, 3000);
    } catch (err) {
      setError('Failed to send the workout plan. Please try again.');
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
                className="button button--primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Me The Program'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default FreeProgram; 