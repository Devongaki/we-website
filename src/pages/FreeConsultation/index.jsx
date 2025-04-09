import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/FreeConsultation.css';

const FreeConsultation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ageRange: '',
    experience: 'beginner',
    primaryGoal: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form whenever formData changes
  useEffect(() => {
    const validateForm = () => {
      const requiredFields = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        ageRange: formData.ageRange.trim(),
        experience: formData.experience.trim(),
        primaryGoal: formData.primaryGoal.trim()
      };

      const isValid = Object.values(requiredFields).every(field => field !== '');
      
      // Additional email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = emailRegex.test(formData.email);

      setIsFormValid(isValid && isEmailValid);
    };

    validateForm();
  }, [formData]);

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

    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setShowSuccess(true);
      
      // Redirect to home page after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="consultation">
      {showSuccess && (
        <div className="consultation__success">
          <div className="consultation__success-content">
            <div className="consultation__success-icon">✓</div>
            <h2>Thank You, {formData.name}!</h2>
            <p>Your consultation request has been submitted successfully.</p>
            <p>We will contact you shortly to schedule your free consultation.</p>
            <p className="consultation__success-redirect">Redirecting to homepage...</p>
          </div>
        </div>
      )}
      <div className="container">
        <div className="consultation__content">
          <h1 className="consultation__title">Free Consultation</h1>
          <p className="consultation__description">
            Take the first step towards your strength training journey. Fill out this short questionnaire 
            and we'll get back to you shortly.
          </p>

          <form className="consultation__form" onSubmit={handleSubmit}>
            <div className="form__group">
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

            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form__group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form__group">
              <label htmlFor="ageRange">Age</label>
              <select
                id="ageRange"
                name="ageRange"
                value={formData.ageRange}
                onChange={handleChange}
                required
              >
                <option value="">Select your age range</option>
                <option value="20-29">20-29 years</option>
                <option value="30-39">30-39 years</option>
                <option value="40-49">40-49 years</option>
              </select>
            </div>

            <div className="form__group">
              <label htmlFor="experience">What's your current strength training level?</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="beginner">Beginner (new to strength training)</option>
                <option value="intermediate">Intermediate (have experience but want to improve)</option>
              </select>
            </div>

            <div className="form__group">
              <label htmlFor="primaryGoal">What's your primary goal? *</label>
              <select
                id="primaryGoal"
                name="primaryGoal"
                value={formData.primaryGoal}
                onChange={handleChange}
                required
              >
                 <option value="">Select your primary goal</option>
                <option value="weight-loss">Build Muscle</option>
                <option value="muscle-gain">Weight Loss</option>
                <option value="strength">Build Booty</option>
                <option value="endurance">Build Strength for Mental Health</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className={`button button--primary consultation__submit ${!isFormValid || isSubmitting ? 'button--disabled' : ''}`}
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
            </button>
          </form>
        </div>

        <div className="consultation__info">
          <div className="info-card">
            <h3>What to Expect</h3>
            <ul>
              <li>Personal assessment of your fitness goals</li>
              <li>Discussion of your current fitness level</li>
              <li>Custom program recommendations</li>
              <li>Nutrition guidance overview</li>
              <li>Q&A session with our expert coach</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Why Choose Us</h3>
            <ul>
              <li>Experienced certified trainers</li>
              <li>Personalized approach to fitness</li>
              <li>Flexible scheduling options</li>
              <li>Online convenience</li>
              <li>Proven success track record</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultation; 