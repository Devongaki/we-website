import React from "react";
import "../styles/Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features__header">
          <h2 className="features__title">WHY CHOOSE US ?</h2>
        </div>

        <div className="features__grid">
          <div className="features__content">
            <div className="features__text">
              <h3>Expert Guidance & Support</h3>
              <p>Get personalized training, nutrition guidance, and regular check-ins to ensure your success</p>
            </div>

            <div className="features__image-grid">
              <div className="features__image-item">
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800" 
                  alt="Personalized training program"
                  title="Custom workout plans tailored to your goals" 
                />
                <span className="features__image-label">Personalized Programs</span>
              </div>
              <div className="features__image-item">
                <img 
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800" 
                  alt="Weekly online check-ins and progress tracking"
                  title="Regular progress monitoring and adjustments" 
                />
                <span className="features__image-label">Weekly Check-ins</span>
              </div>
              <div className="features__image-item">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800" 
                  alt="Personalized nutrition guidance and meal planning"
                  title="Expert nutrition guidance for optimal results" 
                />
                <span className="features__image-label">Nutrition Guidance</span>
              </div>
            </div>

            <div className="features__highlights">
              <div className="features__highlight">
                <span>Video Instructions</span>
              </div>
              <div className="features__highlight">
                <span>Chat Support</span>
              </div>
              <div className="features__highlight">
                <span>Progress Tracking</span>
              </div>
            </div>
          </div>

          <div className="features__main-image">
            <img 
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800" 
              alt="All-in-one fitness tracking app"
              title="Track your progress and connect with your coach" 
            />
            <div className="features__main-overlay">
              <div className="features__main-text">
                <h4>All-in-One Fitness App</h4>
                <div className="features__app-features">
                  <div className="features__app-feature">
                    <div className="features__app-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="features__app-feature-text">
                      <h5>Log your training</h5>
                      <p>Track every workout session</p>
                    </div>
                  </div>
                  <div className="features__app-feature">
                    <div className="features__app-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="features__app-feature-text">
                      <h5>Track progress</h5>
                      <p>Monitor your improvements</p>
                    </div>
                  </div>
                  <div className="features__app-feature">
                    <div className="features__app-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="features__app-feature-text">
                      <h5>Chat Support</h5>
                      <p>Always connected to your coach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;