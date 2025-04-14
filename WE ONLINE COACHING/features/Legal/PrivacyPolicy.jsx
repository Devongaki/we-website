import React from 'react';
import './legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page privacy-policy">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>Welcome to WE Online Coaching ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our website and services.</p>
        </section>

        <section className="policy-section">
          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Fitness goals and current fitness level</li>
            <li>Health and medical information relevant to fitness training</li>
            <li>Payment information for purchasing our services</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <ul>
            <li>Device information (browser type, IP address)</li>
            <li>Usage data (pages visited, time spent)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To provide and personalize our fitness coaching services</li>
            <li>To communicate with you about your training program</li>
            <li>To process payments and maintain accounts</li>
            <li>To improve our website and services</li>
            <li>To send relevant marketing communications (with your consent)</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Analytics and Tracking</h2>
          <p>We use Google Analytics to understand how visitors interact with our website. This service may collect information about:</p>
          <ul>
            <li>Pages you visit and time spent on each page</li>
            <li>Device and browser information</li>
            <li>Geographic location (country/city level)</li>
            <li>Referral sources</li>
          </ul>
          <p>You can opt-out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
        </section>

        <section className="policy-section">
          <h2>5. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section className="policy-section">
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request transfer of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>7. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or our practices, please contact us at:</p>
          <p>Email: we.onlinecoaching@gmail.com</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;