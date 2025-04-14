import { useEffect } from 'react';
import coachWilliam from '../../../public/images/coaches/william.png';
import './about.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us | WE Online Coaching';
  }, []);

  return (
    <div className="about home">
      <div className="container">
        <div className="about__header">
          <h1 className="about__title">Meet Your Coaches</h1>
          <p className="about__subtitle">
            Dedicated professionals committed to transforming your fitness journey
          </p>
        </div>
        
        <div className="about__coaches">
          {/* Coach 1 */}
          <div className="coach">
            <div className="coach__image-container">
              <div className="coach__image-wrapper">
                <img
                  src={coachWilliam} 
                  alt="Coach Name"
                  className="coach__image"
                />
              </div>
              <div className="coach__accent-shape"></div>
            </div>
            
            <div className="coach__content">
              <h2 className="coach__name">William Ongaki</h2>
              <p className="coach__title">Professional Dancer & Fitness Coach</p>
              
              <div className="coach__bio">
                <p>
                As a professional dancer certified at the prestigious Bådar Akademiet in Oslo, Norway, I bring a unique blend of artistry and athletic expertise to fitness coaching. With over a decade of experience in professional dance, I understand the intricate connection between movement, strength, and overall well-being.
                </p>
                <p>
                During my three years as a group instructor at SATS ELIXIA, I've developed and refined my approach to fitness instruction, combining my dance background with effective training methodologies. My lifetime dedication to physical training has given me deep insights into sustainable fitness practices.
                </p>
                <p>
                My certifications include:
                </p>
                <ul className="coach__certifications">
                  <li>Professional Dance Certification - Bådar Akademiet, Oslo</li>
                  <li>Group Fitness Instructor - SATS ELIXIA</li>
                  <li>Over 10 Years Professional Dance Experience</li>
                </ul>
              </div>
              
              <div className="coach__social">
                <a href="https://www.instagram.com/itsongakiwilliam?igsh=MTgxcHY4Y3hwMDJ4dg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="coach__social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Coach 2 */}
          <div className="coach coach--reverse">
            <div className="coach__image-container">
              <div className="coach__image-wrapper">
                <img
                  src="/images/coach2.jpg" 
                  alt="Coach Name 2"
                  className="coach__image"
                />
              </div>
              <div className="coach__accent-shape"></div>
            </div>
            
            <div className="coach__content">
              <h2 className="coach__name">Coach Name 2</h2>
              <p className="coach__title">Performance Coach & Transformation Specialist</p>
              
              <div className="coach__bio">
                <p>
                  I specialize in helping clients transform their bodies and mindsets through strategic training and nutritional guidance. My passion is empowering people to discover their strength and resilience through fitness.
                </p>
                <p>
                  Having competed in various fitness competitions, I bring practical experience and a deep understanding of what it takes to achieve dramatic physical transformations while maintaining health.
                </p>
                <p>
                  My certifications include:
                </p>
                <ul className="coach__certifications">
                  <li>Personal Trainer Certification (ACE)</li>
                  <li>Sports Nutrition Specialist</li>
                  <li>Functional Movement Specialist</li>
                </ul>
              </div>
              
              <div className="coach__social">
                <a href="https://www.instagram.com/coach2" target="_blank" rel="noopener noreferrer" className="coach__social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about__philosophy">
          <h2 className="about__philosophy-title">Our Coaching Philosophy</h2>
          <div className="about__philosophy-content">
            <p>
              At WE Online Coaching, we believe that fitness should enhance your life, not consume it. Our approach is built on three core principles:
            </p>
            <div className="about__principles">
              <div className="principle">
                <div className="principle__icon">🎯</div>
                <h3 className="principle__title">Personalization</h3>
                <p className="principle__description">
                  Every program is custom-built for your unique goals, lifestyle, and preferences. We don't believe in one-size-fits-all solutions.
                </p>
              </div>
              <div className="principle">
                <div className="principle__icon">⚖️</div>
                <h3 className="principle__title">Balance</h3>
                <p className="principle__description">
                  We focus on sustainable approaches that fit into your life, allowing you to enjoy social events, favorite foods, and flexibility.
                </p>
              </div>
              <div className="principle">
                <div className="principle__icon">🔄</div>
                <h3 className="principle__title">Consistency</h3>
                <p className="principle__description">
                  Small, consistent actions lead to remarkable results. We'll help you build sustainable habits that lead to lasting change.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about__cta">
          <h2 className="about__cta-title">Ready to Start Your Journey?</h2>
          <p className="about__cta-text">Join our community of successful clients and transform your fitness with expert guidance.</p>
          <a href="/prices" className="button button--primary about__cta-button">View Our Coaching Plans</a>
        </div>
      </div>
    </div>
  );
};

export default About;