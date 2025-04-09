import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/FreeConsultation.css';

const FreeConsultation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fitnessGoal: '',
    experience: 'beginner',
    preferredTime: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      
      // Redirect to success page or show success message
      navigate('/consultation-success');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="consultation">
      <div className="container">
        <div className="consultation__content">
          <h1 className="consultation__title">Free Consultation</h1>
          <p className="consultation__description">
            Take the first step towards your fitness goals. Fill out this short questionnaire 
            and we'll get back to you within 24 hours to schedule your free consultation.
          </p>

          <form className="consultation__form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form__group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
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
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form__group">
              <label htmlFor="fitnessGoal">Primary Fitness Goal *</label>
              <select
                id="fitnessGoal"
                name="fitnessGoal"
                value={formData.fitnessGoal}
                onChange={handleChange}
                required
              >
                <option value="">Select your primary goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="strength">Strength Training</option>
                <option value="endurance">Endurance</option>
                <option value="general-fitness">General Fitness</option>
              </select>
            </div>

            <div className="form__group">
              <label htmlFor="experience">Fitness Experience Level *</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className="form__group">
              <label htmlFor="preferredTime">Preferred Consultation Time</label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
              >
                <option value="">Select preferred time</option>
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 5PM)</option>
                <option value="evening">Evening (5PM - 8PM)</option>
              </select>
            </div>

            <div className="form__group">
              <label htmlFor="message">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about any specific concerns, injuries, or goals you'd like to discuss"
                rows="4"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="button button--primary button--large consultation__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
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