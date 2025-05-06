import { useEffect } from 'react';
import coachWilliam from '../../../public/images/coaches/william.jpg';
import coachEirill from '../../../public/images/coaches/eirill.jpg';
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
            Dedicated professionals committed to transforming your strength training journey
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
              <h2 className="coach__name">Coach William</h2>
              <p className="coach__title">Professional Dancer & Fitness Coach</p>
              
              <div className="coach__bio">
                <p>
                As a professional dancer certified at the prestigious Bådar Akademiet in Oslo, Norway, I bring a unique blend of artistry and athletic expertise to fitness coaching. With over a decade of experience in professional dance, I understand the intricate connection between movement, strength, and overall well-being.
                </p>
                <p>
                During my three years as a group instructor at SATS ELIXIA, I've developed and refined my approach to fitness instruction, combining my dance background with effective training methodologies. My lifetime dedication to physical training has given me deep insights into sustainable fitness practices.
                </p>
                <p>
                Qualifications:
                </p>
                <ul className="coach__certifications">
                  <li>Professional Dance Certification - Bådar Akademiet, Oslo</li>
                  <li>Group Fitness Instructor - SATS ELIXIA</li>
                  <li>Over 10 Years Professional Dance Experience</li>
                </ul>

                <p>
                  Languages I speak:
                </p>
                <ul className="coach__languages">
                  <li><span className="flag">🇬🇧</span> English (Fluent)</li>
                  <li><span className="flag">🇳🇴</span> Norwegian (Conversational)</li>
                  <li><span className="flag">🇰🇪</span> Swahili (Fluent)</li>
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
                  src={coachEirill} 
                  alt="Coach Eirill"
                  className="coach__image"
                />
              </div>
              <div className="coach__accent-shape"></div>
            </div>
            
            <div className="coach__content">
              <h2 className="coach__name">Coach Eirill</h2>
              
              <div className="coach__bio">
                <p>
                Heisann – Hey – Mabuhay – Mambo WE-fam! 💪🏽<br></br>
I'm Eirill, the Co-Founder of WE Online Coaching, and I'm passionate about helping people live stronger and healthier lives. 
After years in the healthcare industry, I've shifted my focus from treatment to prevention.  I'm dedicated to helping prevent lifestyle-related diseases through strength training.

                </p>
                <p>I work behind the scenes with confidentiality: Ensuring quality in our coaching, refining our programs, and supporting our mission to empower through strength.</p>
                <p>WE = William & Eirill. Together, WE Online Coaching is built with care, backed by evidence, grounded in experience, and driven by heart.</p>
                <p>
                  Qualifications:
                </p>
                <ul className="coach__certifications">
                  <li>Certified Personal Trainer - AFPT</li>
                  <li>Certified Nutrition Advisor - AFPT</li>
                  <li>Registered Nurse – Høyskolen Diakonova</li>
                  <li>Specialized in Surgical Nursing – OsloMet</li>
                </ul>

                <p>
                  Languages I speak:
                </p>
                <ul className="coach__languages">
                  <li><span className="flag">🇬🇧</span> English (Fluent)</li>
                  <li><span className="flag">🇳🇴</span> Norwegian (Fluent)</li>
                  <li><span className="flag">🇵🇭</span> Taglish (Fluent)</li>
                </ul>
              </div>
              
              <div className="coach__social">
                <a href="https://www.instagram.com/eiri.ll?igsh=dzA1ejM3d3NzZzM5" target="_blank" rel="noopener noreferrer" className="coach__social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about__cta">
          <h2 className="about__cta-title">Ready to Start Your Journey?</h2>
          <p className="about__cta-text">Join our community and transform your fitness with dedicated guidance.</p>
          <a href="/free-consultation" className="button button--primary about__cta-button">Book Your Free Consultation</a>
        </div>
      </div>
    </div>
  );
};

export default About;