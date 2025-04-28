import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// This component protects routes that require authentication
const AuthGuard = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
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

  // If not authenticated, redirect to homepage instead of login page
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // If authenticated, render the protected component
  return children;
};

export default AuthGuard;
