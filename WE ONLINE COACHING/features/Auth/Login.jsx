import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../../ui/components/Button/Button';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/dashboard';
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

  // Hardcoded test account (kept in code but not displayed on page)
  const testAccount = {
    email: 'test@example.com',
    password: 'password123'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Check against hardcoded test account
      if (formData.email === testAccount.email && formData.password === testAccount.password) {
        // Store auth token in localStorage
        localStorage.setItem('authToken', 'test-token-for-dashboard');
        localStorage.setItem('userName', 'Test User');
        
        // Redirect to dashboard or the page they were trying to access
        navigate(from);
      } else {
        // For development, also allow any email with the test password
        if (formData.password === testAccount.password) {
          localStorage.setItem('authToken', 'test-token-for-dashboard');
          localStorage.setItem('userName', formData.email.split('@')[0]);
          
          navigate(from);
        } else {
          throw new Error('Invalid credentials');
        }
      }
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="login__card">
            <div className="login__header">
              <h1 className="login__title">Welcome Back</h1>
              <p className="login__subtitle">
                Login to access your personalized training program
              </p>
            </div>

            {error && (
              <div className="login__error">
                {error}
              </div>
            )}

            <form className="login__form" onSubmit={handleSubmit}>
              <div className="form__group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form__options">
                <div className="form__remember">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={isRememberMe}
                    onChange={() => setIsRememberMe(!isRememberMe)}
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <Link to="/forgot-password" className="form__forgot">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="button button--primary login__button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="login__footer">
              <p>
                Don't have an account?{' '}
                <Link to="/register" className="login__link">
                  Sign up now
                </Link>
              </p>
            </div>
          </div>

          <div className="login__benefits">
            <h2>Benefits of Your Account</h2>
            <ul className="login__benefits-list">
              <li><span className="icon">🏋️</span> Access your personalized workout plan</li>
              <li><span className="icon">📊</span> Track your progress over time</li>
              <li><span className="icon">🥗</span> View customized nutrition recommendations</li>
              <li><span className="icon">📅</span> Schedule sessions with your coach</li>
              <li><span className="icon">💬</span> Message your coach anytime</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
