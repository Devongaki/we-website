// WE ONLINE COACHING/ui/components/Layout/Footer/Footer.jsx
// No need for extra div elements, just the footer with a border

import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../../assets/WE_Logo.png';
import './footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email);
    // Reset the form
    setEmail('');
    // You could show a success message here
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer__grid">
          {/* Column 1: Quick Links - Now on the left */}
          <div className="footer__links">
            <h3 className="footer__heading">Quick Links</h3>
            <div className="footer__links-columns">
              <ul className="footer__links-list">
                <li><Link to="/" className="footer__link">Home</Link></li>
                <li><Link to="/prices" className="footer__link">Prices</Link></li>
                <li><Link to="/blog" className="footer__link">Blog</Link></li>
              </ul>
              <ul className="footer__links-list">
                <li><Link to="/free-consultation" className="footer__link">Free Consultation</Link></li>
                <li><Link to="/about" className="footer__link">About Us</Link></li>
                <li><Link to="/privacy-policy" className="footer__link">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Column 2: Contact info */}
          <div className="footer__contact">
            <h3 className="footer__heading">Contact Us</h3>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <span className="footer__contact-icon">✉️</span>
                <a href="mailto:we.onlinecoaching@gmail.com" className="footer__contact-link">
                  we.onlinecoaching@gmail.com
                </a>
              </li>
            </ul>
            
            {/* Social icons */}
            <div className="footer__social">
              <a href="https://www.instagram.com/we.onlinecoaching" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          {/* Column 3: Newsletter and Logo */}
          <div className="footer__newsletter">
            <div className="footer__company">
              <img src={logo} alt="WE Online Coaching" className="footer__logo" />
            </div>
            
            <div className="footer__signup">
              <h3 className="footer__heading">Subscribe to our Newsletter</h3>
              <form className="footer__form" onSubmit={handleSubmit}>
                <div className="footer__form-group">
                  <input 
                    type="email" 
                    className="footer__input" 
                    placeholder="Your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="footer__submit">
                    Subscribe
                  </button>
                </div>
                <p className="footer__form-note">
                  Get weekly fitness tips, nutrition advice, and exclusive offers.
                </p>
              </form>
            </div>
          </div>
        </div>
        
        {/* Copyright bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} WE Online Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
