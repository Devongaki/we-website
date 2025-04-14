import { useEffect, useState } from 'react';
import './blog.css';

const BlogComingSoon = () => {
  const [animationStage, setAnimationStage] = useState(1);
  
  // Cycle through animation stages
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStage(current => (current < 3 ? current + 1 : 1));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="blog-coming-soon">
      <div className="container">
        <div className="blog-coming-soon__content">
          <h1 className="blog-coming-soon__title">Our Blog is Getting Pumped Up!</h1>
          
          <div className="blog-coming-soon__animation">
            <div className={`workout-character workout-character--stage-${animationStage}`}>
              <div className="workout-character__head"></div>
              <div className="workout-character__body"></div>
              <div className="workout-character__arm workout-character__arm--left"></div>
              <div className="workout-character__arm workout-character__arm--right"></div>
              <div className="workout-character__leg workout-character__leg--left"></div>
              <div className="workout-character__leg workout-character__leg--right"></div>
              <div className="workout-character__weight workout-character__weight--left"></div>
              <div className="workout-character__weight workout-character__weight--right"></div>
              {animationStage > 1 && (
                <div className="workout-character__sweat-drops">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
          </div>
          
          <p className="blog-coming-soon__message">
            Just like your fitness journey, our blog is still training and getting stronger!
          </p>
          
          <div className="blog-coming-soon__info">
            <h2>What to Expect When We Launch:</h2>
            <ul className="blog-coming-soon__features">
              <li><span className="icon">💪</span> Expert Training Tips</li>
              <li><span className="icon">🥗</span> Nutrition Advice & Recipes</li>
              <li><span className="icon">🧠</span> Mental Health & Motivation</li>
              <li><span className="icon">🏆</span> Success Stories</li>
              <li><span className="icon">⚡</span> Quick Workout Routines</li>
            </ul>
          </div>
          
          <div className="blog-coming-soon__timer">
            <p>Estimated time until launch:</p>
            <div className="blog-coming-soon__countdown">Coming Very Soon!</div>
          </div>
          
          <div className="blog-coming-soon__cta">
            <p>Want to be notified when our blog launches?</p>
            <a href="/#newsletter" className="button button--primary">Subscribe to Our Newsletter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComingSoon;
