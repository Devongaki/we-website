import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/components/Button/Button';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

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
      // Here you would implement actual login functionality
      console.log('Login attempt with:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, always "succeed" but you would check credentials in reality
      // Redirect or update authentication state here
      
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

              <div className="login__options">
                <div className="login__remember">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={isRememberMe}
                    onChange={() => setIsRememberMe(!isRememberMe)}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <Link to="/forgot-password" className="login__forgot">
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                disabled={isSubmitting}
                className="login__button"
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </Button>
            </form>
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
