import { Link } from 'react-router-dom';
import './ErrorPage.css';

const NotFound = () => {
  return (
    <div className="error-page not-found">
      <div className="container">
        <div className="error-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          
          <div className="error-actions">
            <Link to="/" className="button button--primary">
              Go to Homepage
            </Link>
          </div>
          
          <div className="error-suggestions">
            <h3>You might be looking for:</h3>
            <ul>
              <li><Link to="/prices">Our Pricing Plans</Link></li>
              <li><Link to="/free-consultation">Free Consultation</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
