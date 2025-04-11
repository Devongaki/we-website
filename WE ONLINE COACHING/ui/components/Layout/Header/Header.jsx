import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/button';
import logo from '../../../assets/WE_Logo.png';
import './Header.css';

// Layout component - handles structural UI elements
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="WE Online Coaching" className="header__logo-img" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="header__desktop">
          <nav className="header__nav">
            <Link to="/" className="header__nav-link">Home</Link>
            <Link to="/prices" className="header__nav-link">Prices</Link>
            <Link to="/blog" className="header__nav-link">Blog</Link>
            <div className="header__auth">
              <Button variant="outline" size="small">Login</Button>
              <Button size="small">Sign Up</Button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="header__menu-btn" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className={`header__menu-icon ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="header__nav--mobile">
          <Link to="/" className="header__nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="/prices" className="header__nav-link" onClick={toggleMenu}>Prices</Link>
          <Link to="/blog" className="header__nav-link" onClick={toggleMenu}>Blog</Link>
          <div className="header__auth">
            <Button variant="outline" size="small" className="header__auth-btn">Login</Button>
            <Button size="small" className="header__auth-btn">Sign Up</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header; 