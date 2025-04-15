import React from 'react';
import { Link } from 'react-router-dom';
import './legal.css';

const TermsOfService = () => {
  return (
    <div className="legal-page terms-of-service">
      <div className="container">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>Welcome to WE Online Coaching. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.</p>
        </section>

        <section className="policy-section">
          <h2>2. Definitions</h2>
          <ul>
            <li><strong>"Company", "We", "Us", "Our"</strong> refers to WE Online Coaching</li>
            <li><strong>"Services"</strong> refers to our website, coaching programs, and related offerings</li>
            <li><strong>"You", "Your"</strong> refers to the individual accessing or using our Services</li>
            <li><strong>"Content"</strong> refers to text, images, videos, and other materials available through our Services</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Account Registration</h2>
          <p>Some portions of our Services require registration. You agree to provide accurate and complete information and to keep this information updated.</p>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
        </section>

        <section className="policy-section">
          <h2>4. Payment Terms</h2>
          <p>By purchasing our coaching services, you agree to pay all fees associated with your selected plan.</p>
          <p>All payments are processed securely through our payment providers. Fees are non-refundable except as expressly stated in our refund policy.</p>
        </section>

        <section className="policy-section">
          <h2>5. Refund Policy</h2>
          <p>We offer a 14-day satisfaction guarantee for new clients. If you're not satisfied with our Services within the first 14 days, contact us for a full refund.</p>
          <p>After the initial 14-day period, refunds are issued at our discretion and may be prorated based on the services provided.</p>
        </section>

        <section className="policy-section">
          <h2>6. Intellectual Property</h2>
          <p>All Content provided through our Services is owned by or licensed to us and is protected by copyright, trademark, and other intellectual property laws.</p>
          <p>You may not reproduce, distribute, modify, or create derivative works of our Content without our express permission.</p>
        </section>

        <section className="policy-section">
          <h2>7. User Conduct</h2>
          <p>You agree not to use our Services to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Harass, abuse, or harm another person</li>
            <li>Distribute unsolicited promotional material</li>
            <li>Attempt to gain unauthorized access to our systems</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>8. Health Disclaimer</h2>
          <p>Our fitness coaching services are not intended to replace professional medical advice, diagnosis, or treatment. Always consult with a healthcare professional before starting any fitness or nutrition program.</p>
          <p>Results from our coaching programs vary based on individual effort, body composition, and adherence to the program.</p>
        </section>

        <section className="policy-section">
          <h2>9. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our Services.</p>
        </section>

        <section className="policy-section">
          <h2>10. Termination</h2>
          <p>We reserve the right to suspend or terminate your access to our Services for violation of these Terms or for any other reason at our sole discretion.</p>
        </section>

        <section className="policy-section">
          <h2>11. Changes to Terms</h2>
          <p>We may update these Terms at any time. The updated version will be effective as soon as it is posted. We will notify you of any material changes via email or through our Services.</p>
        </section>

        <section className="policy-section">
          <h2>12. Governing Law</h2>
          <p>These Terms are governed by and construed in accordance with the laws of Norway, without regard to its conflict of law principles.</p>
        </section>

        <section className="policy-section">
          <h2>13. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at we.onlinecoaching@gmail.com.</p>
          <p>For privacy-related inquiries, please see our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;