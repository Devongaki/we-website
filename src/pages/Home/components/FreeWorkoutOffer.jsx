import { useState } from 'react';
import '../styles/FreeWorkoutOffer.css';

const FreeWorkoutOffer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error sending workout plan:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="free-workout-offer">
      <div className="container">
        <div className="free-workout-offer__content">
          <h2 className="free-workout-offer__title">Get Your Free Beginner Workout Plan</h2>
          <p className="free-workout-offer__description">
            Start your fitness journey today with our comprehensive beginner workout plan. 
            Perfect for those just starting out or getting back into fitness.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="free-workout-offer__form">
              <div className="free-workout-offer__input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="free-workout-offer__input"
                />
                <button 
                  type="submit" 
                  className="button button--primary free-workout-offer__button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Plan'}
                </button>
              </div>
              {error && <p className="free-workout-offer__error">{error}</p>}
            </form>
          ) : (
            <div className="free-workout-offer__success">
              <div className="free-workout-offer__success-icon">✓</div>
              <h3>Check Your Email!</h3>
              <p>Your free workout plan has been sent to your email address.</p>
            </div>
          )}
          
          <div className="free-workout-offer__features">
            <div className="free-workout-offer__feature">
              <span className="icon">📋</span>
              <span>4-week structured program</span>
            </div>
            <div className="free-workout-offer__feature">
              <span className="icon">💪</span>
              <span>Beginner-friendly exercises</span>
            </div>
            <div className="free-workout-offer__feature">
              <span className="icon">📱</span>
              <span>Printable PDF format</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeWorkoutOffer; 