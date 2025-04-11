import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The personalized workout program has transformed my fitness journey. I've seen incredible results in just 3 months!",
      author: "Sarah Johnson",
      achievement: "Lost 15kg in 3 months",
      avatar: "/images/testimonials/testimonial-1.jpg"
    },
    {
      quote: "The nutrition guidance and meal plans made healthy eating so much easier. The coaches are incredibly supportive!",
      author: "Michael Chen",
      achievement: "Gained 8kg muscle mass",
      avatar: "/images/testimonials/testimonial-2.jpg"
    },
    {
      quote: "The 24/7 support and weekly check-ins keep me motivated. This is more than just a program, it's a community!",
      author: "Emma Wilson",
      achievement: "Completed first marathon",
      avatar: "/images/testimonials/testimonial-3.jpg"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section__title">Success Stories</h2>
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-card__content">
                <p className="testimonial-card__quote">
                  {testimonial.quote}
                </p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    <img src={testimonial.avatar} alt={testimonial.author} />
                  </div>
                  <div className="testimonial-card__info">
                    <h4 className="testimonial-card__name">{testimonial.author}</h4>
                    <p className="testimonial-card__achievement">{testimonial.achievement}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 