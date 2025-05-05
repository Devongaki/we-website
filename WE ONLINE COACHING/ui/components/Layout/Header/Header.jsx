import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../Button/Button';
import logo from '../../../assets/WE_Logo.png';
import './Header.css';

// Layout component - handles structural UI elements
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'header__nav-link--active' : '';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="WE Online Coaching" className="header__logo-img" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="header__desktop">
          <nav className="header__nav">
            <Link to="/" className={`header__nav-link ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`header__nav-link ${isActive('/about')}`}>About</Link>
            <Link to="/blog" className={`header__nav-link ${isActive('/blog')}`}>Blog</Link>
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
          <Link to="/" className={`header__nav-link ${isActive('/')}`} onClick={toggleMenu}>Home</Link>
          <Link to="/about" className={`header__nav-link ${isActive('/about')}`} onClick={toggleMenu}>About</Link>
          <Link to="/blog" className={`header__nav-link ${isActive('/blog')}`} onClick={toggleMenu}>Blog</Link>
        </nav>
      )}
    </header>
  );
};

export default Header; 