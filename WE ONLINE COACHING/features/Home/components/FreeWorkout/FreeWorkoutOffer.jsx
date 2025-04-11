import { useState } from 'react';
import FreeProgram from '../../../FreeProgram/FreeProgram';
import './FreeWorkoutOffer.css';

const FreeWorkoutOffer = () => {
  const [showFreeProgram, setShowFreeProgram] = useState(false);

  return (
    <section className="free-workout-offer">
      <div className="container">
        <div className="free-workout-offer__content">
          <h2 className="free-workout-offer__title">Get Your Free Beginner Workout Plan</h2>
          <p className="free-workout-offer__description">
            Start your fitness journey today with our comprehensive beginner workout plan. 
            Perfect for those just starting out or getting back into fitness.
          </p>
          
          <button 
            onClick={() => setShowFreeProgram(true)}
            className="button button--primary free-workout-offer__button"
          >
            Get Free Plan
          </button>
          
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

      <FreeProgram 
        isOpen={showFreeProgram}
        onClose={() => setShowFreeProgram(false)}
      />
    </section>
  );
};

export default FreeWorkoutOffer; 