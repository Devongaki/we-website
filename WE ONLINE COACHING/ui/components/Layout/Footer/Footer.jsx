// WE ONLINE COACHING/ui/components/Layout/Footer/Footer.jsx
import { Link } from 'react-router-dom';
import logo from '../../../assets/WE_Logo.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer__grid">
          <div className="footer__company">
            <img src={logo} alt="WE Online Coaching" className="footer__logo" />
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="footer__links">
            <h3 className="footer__heading" style={{ color: "white", fontWeight: 700 }}>Quick Links</h3>
            <div className="footer__links-columns">
              <ul className="footer__links-list">
                <li><Link to="/" className="footer__link" style={{ color: "white" }}>Home</Link></li>
                <li><Link to="/prices" className="footer__link" style={{ color: "white" }}>Prices</Link></li>
                <li><Link to="/blog" className="footer__link" style={{ color: "white" }}>Blog</Link></li>
              </ul>
              <ul className="footer__links-list">
                <li><Link to="/free-consultation" className="footer__link" style={{ color: "white" }}>Free Consultation</Link></li>
                <li><Link to="/about" className="footer__link" style={{ color: "white" }}>About Us</Link></li>
                <li><Link to="/privacy" className="footer__link" style={{ color: "white" }}>Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Column 3: Contact info */}
          <div className="footer__contact">
            <h3 className="footer__heading" style={{ color: "white", fontWeight: 700 }}>Contact Us</h3>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <span className="footer__contact-icon" style={{ color: "white" }}>📱</span>
                <a href="tel:+4791234567" className="footer__contact-link" style={{ color: "white" }}>
                  +47 411 79 860
                </a>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon" style={{ color: "white" }}>✉️</span>
                <a href="mailto:info@weonlinecoaching.com" className="footer__contact-link" style={{ color: "white" }}>
                we.onlinecoaching@gmail.com
                </a>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon" style={{ color: "white" }}>📸</span>
                <a href="https://www.instagram.com/we.onlinecoaching?igsh=MW5iODZrNG5xbzEyZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="footer__contact-link" style={{ color: "white" }}>
                  @weonlinecoaching
                </a>
              </li>
            </ul>
            
            {/* Social icons */}
            <div className="footer__social" style={{ marginTop: "1.5rem" }}>
              <a href="https://www.instagram.com/we.onlinecoaching?igsh=MW5iODZrNG5xbzEyZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="footer__social-link" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com/weonlinecoaching" target="_blank" rel="noopener noreferrer" className="footer__social-link" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Divider */}
        {/* <div className="footer__divider"></div> */}
        
        {/* CTA Section integrated into footer */}
        {/* <div className="footer__cta">
          <h2 className="footer__cta-title">Ready to Start Your Transformation?</h2>
          <div className="footer__cta-buttons">
            <Link to="/get-started" className="button button--primary button--large" style={{ backgroundColor: "white", color: "#000080", border: "2px solid white" }}>
              Get Started Now
            </Link>
            <Link to="/free-consultation" className="button button--outline button--large" style={{ color: "white", border: "2px solid white" }}>
              Book Free Consultation
            </Link>
          </div>
        </div> */}
        
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