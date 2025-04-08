import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section__title">Success Stories</h2>
        <div className="testimonials__grid">
          <div className="testimonial-card">
            <div className="testimonial-card__content">
              <p className="testimonial-card__quote">
                "The personalized approach and constant support helped me achieve results I never thought possible. The online coaching made it easy to fit workouts into my busy schedule."
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  <img src="/images/testimonial-1.jpg" alt="Sarah M." />
                </div>
                <div className="testimonial-card__info">
                  <h4 className="testimonial-card__name">Sarah M.</h4>
                  <p className="testimonial-card__achievement">Lost 30 lbs in 6 months</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-card__content">
              <p className="testimonial-card__quote">
                "The nutrition guidance and workout plans were exactly what I needed. My coach understood my goals and helped me build sustainable habits."
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  <img src="/images/testimonial-2.jpg" alt="John D." />
                </div>
                <div className="testimonial-card__info">
                  <h4 className="testimonial-card__name">John D.</h4>
                  <p className="testimonial-card__achievement">Gained 15 lbs muscle mass</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-card__content">
              <p className="testimonial-card__quote">
                "As a busy professional, the flexibility of online coaching was perfect. The app made tracking progress simple, and the results speak for themselves."
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  <img src="/images/testimonial-3.jpg" alt="Emma R." />
                </div>
                <div className="testimonial-card__info">
                  <h4 className="testimonial-card__name">Emma R.</h4>
                  <p className="testimonial-card__achievement">Improved strength by 60%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 