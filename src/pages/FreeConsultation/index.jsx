import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/FreeConsultation.css';
import Select from 'react-select';

// Add these custom styles for React Select
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: 'var(--spacing-sm)',
    borderColor: state.isFocused ? 'var(--color-brand-primary)' : '#e2e8f0',
    borderRadius: 'var(--radius-md)',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(var(--color-brand-primary-rgb), 0.15)' : 'none',
    '&:hover': {
      borderColor: 'var(--color-brand-primary)'
    }
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'var(--color-brand-primary)' : 'white',
    color: state.isSelected ? 'white' : 'var(--color-text-primary)',
    '&:hover': {
      backgroundColor: state.isSelected ? 'var(--color-brand-primary)' : 'var(--color-brand-primary)',
      color: 'white'
    },
    cursor: 'pointer',
    padding: '12px 16px'
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'white',
    boxShadow: 'var(--shadow-md)',
    borderRadius: 'var(--radius-md)'
  })
};

// Add these options for the dropdowns
const ageOptions = [
  { value: '18-24', label: '18-24' },
  { value: '25-34', label: '25-34' },
  { value: '35-44', label: '35-44' },
  { value: '45-54', label: '45-54' },
  { value: '55+', label: '55+' }
];

const levelOptions = [
  { value: 'beginner', label: 'Beginner (new to strength training)' },
  { value: 'intermediate', label: 'Intermediate (some experience)' },
  { value: 'advanced', label: 'Advanced (experienced)' }
];

const goalOptions = [
  { value: 'muscle', label: 'Build Muscle' },
  { value: 'weight-loss', label: 'Weight Loss' },
  { value: 'strength', label: 'Build Strength for Mental Health' },
  { value: 'booty', label: 'Build Booty' },
  { value: 'other', label: 'Other' }
];

const FreeConsultation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ageRange: null,
    experience: 'beginner',
    primaryGoal: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Update validation to handle React Select values
  useEffect(() => {
    const validateForm = () => {
      const requiredFields = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        ageRange: formData.ageRange,
        experience: formData.experience,
        primaryGoal: formData.primaryGoal
      };

      const isValid = Object.values(requiredFields).every(field => {
        // Handle both string and select values
        if (typeof field === 'string') {
          return field !== '';
        }
        return field !== null;
      });
      
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

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData(prev => ({
      ...prev,
      [name]: selectedOption ? selectedOption.value : null
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
              <Select
                id="ageRange"
                name="ageRange"
                options={ageOptions}
                styles={customStyles}
                value={ageOptions.find(option => option.value === formData.ageRange)}
                onChange={(option, meta) => handleSelectChange(option, { name: 'ageRange' })}
                placeholder="Select your age range"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>

            <div className="form__group">
              <label htmlFor="experience">What's your current strength training level?</label>
              <Select
                id="experience"
                name="experience"
                options={levelOptions}
                styles={customStyles}
                value={levelOptions.find(option => option.value === formData.experience)}
                onChange={(option, meta) => handleSelectChange(option, { name: 'experience' })}
                placeholder="Select your training level"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>

            <div className="form__group">
              <label htmlFor="primaryGoal">What's your primary goal? *</label>
              <Select
                id="primaryGoal"
                name="primaryGoal"
                options={goalOptions}
                styles={customStyles}
                value={goalOptions.find(option => option.value === formData.primaryGoal)}
                onChange={(option, meta) => handleSelectChange(option, { name: 'primaryGoal' })}
                placeholder="Select your primary goal"
                className="react-select-container"
                classNamePrefix="react-select"
                required
              />
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