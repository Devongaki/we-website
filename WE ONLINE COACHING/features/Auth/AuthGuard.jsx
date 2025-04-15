import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// This component protects routes that require authentication
const AuthGuard = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, you would check your auth system
    // For now, we'll use localStorage as a simple example
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();

    // This is just for development/testing
    // In production, you would remove this and implement proper auth
    if (!localStorage.getItem('authToken')) {
      localStorage.setItem('authToken', 'test-token-for-development');
      console.log('Development auth token created for testing');
    }
  }, []);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="auth-loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: window.location.pathname }} />;
  }

  // If authenticated, render the protected component
  return children;
};

export default AuthGuard;
