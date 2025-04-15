import { useState } from 'react';
import './legal.css';

const DataRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requestType: 'access',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Here you would send the request to your backend
      // For now we'll just simulate an API call
      await new Promise(r => setTimeout(r, 1000));
      
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        requestType: 'access',
        message: ''
      });
    } catch (err) {
      setError('Failed to submit your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="legal-page data-request">
      <div className="container">
        <h1>Personal Data Request</h1>
        
        <p className="legal-intro">
          Under the General Data Protection Regulation (GDPR) and other privacy laws, 
          you have the right to access, correct, or request deletion of your personal data.
          Please use this form to submit your request.
        </p>

        {showSuccess ? (
          <div className="success-message">
            <h3>Request Submitted Successfully</h3>
            <p>We have received your request and will process it within 30 days. We'll contact you at the email address you provided.</p>
          </div>
        ) : (
          <form className="data-request-form" onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="requestType">Request Type</label>
              <select
                id="requestType"
                name="requestType"
                value={formData.requestType}
                onChange={handleChange}
                required
              >
                <option value="access">Access my data</option>
                <option value="rectify">Correct my data</option>
                <option value="delete">Delete my data</option>
                <option value="restrict">Restrict processing</option>
                <option value="portability">Data portability</option>
                <option value="object">Object to processing</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DataRequest;
