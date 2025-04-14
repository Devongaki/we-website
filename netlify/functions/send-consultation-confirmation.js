// netlify/functions/send-consultation-confirmation.js
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

// Load environment variables in development
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export const handler = async (event) => {
  // Enable detailed logging
  console.log('Function started');
  console.log('Environment check:', {
    hasApiKey: !!process.env.SENDGRID_API_KEY,
    hasFromEmail: !!process.env.SENDGRID_FROM_EMAIL,
    apiKeyLength: process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY.length : 0
  });

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Set SendGrid API key
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SendGrid API key is missing');
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Parse client data from request body
    const { name, email, phone, ageRange, experience, primaryGoal } = JSON.parse(event.body);
    console.log('Received consultation request:', { name, email, primaryGoal });

    if (!email || !name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email and name are required' }),
      };
    }

    // Prepare email to the client
    const clientMsg = {
      to: email,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: 'WE Fitness'
      },
      subject: 'Your Free Consultation Request Received',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h2 style="color: #000080;">Thank You for Booking a Free Consultation!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for booking a free consultation with WE Fitness. We're excited to help you on your fitness journey!</p>
          
          <div style="background-color: #f7f7f7; border-left: 4px solid #000080; padding: 15px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Your details:</strong></p>
            <ul style="padding-left: 20px;">
              <li>Name: ${name}</li>
              <li>Phone: ${phone}</li>
              <li>Experience Level: ${experience}</li>
              <li>Primary Goal: ${primaryGoal}</li>
            </ul>
          </div>
          
          <p><strong>What happens next:</strong></p>
          <p>We'll contact you within the next 24-48 hours to schedule your consultation at a time that works for you.</p>
          
          <p>During your consultation, we'll discuss:</p>
          <ul>
            <li>Your fitness goals in more detail</li>
            <li>Your current routine and challenges</li>
            <li>How our coaching services can help you achieve your goals</li>
            <li>Answer any questions you might have</li>
          </ul>
          
          <p>If you have any questions before then, please don't hesitate to reach out.</p>
          
          <p style="margin-top: 30px;">Best regards,</p>
          <p style="margin: 0;"><strong>The WE Fitness Team</strong></p>
        </div>
      `
    };

    // Prepare notification email to the business
    const businessMsg = {
      to: process.env.SENDGRID_FROM_EMAIL, // Sending to your business email
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: 'WE Fitness Website'
      },
      subject: 'New Free Consultation Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h2 style="color: #000080;">New Consultation Request</h2>
          
          <p>A new client has requested a free consultation.</p>
          
          <div style="background-color: #f7f7f7; border-left: 4px solid #000080; padding: 15px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Client details:</strong></p>
            <ul style="padding-left: 20px;">
              <li>Name: ${name}</li>
              <li>Email: ${email}</li>
              <li>Phone: ${phone}</li>
              <li>Age Range: ${ageRange}</li>
              <li>Experience Level: ${experience}</li>
              <li>Primary Goal: ${primaryGoal}</li>
            </ul>
          </div>
          
          <p>Please contact the client within the next 24-48 hours to schedule their consultation.</p>
        </div>
      `
    };

    console.log('Attempting to send emails');
    
    // Send both emails
    await Promise.all([
      sgMail.send(clientMsg),
      sgMail.send(businessMsg)
    ]);
    
    console.log('Emails sent successfully');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Consultation request received successfully' }),
    };
  } catch (error) {
    console.error('Function Error:', {
      message: error.message,
      stack: error.stack,
      response: error.response ? {
        body: error.response.body,
        headers: error.response.headers,
        status: error.response.status
      } : null
    });

    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to process consultation request',
        details: error.message,
        response: error.response?.body
      }),
    };
  }
};