import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
import { join } from 'path';
import { promises as fs } from 'fs';

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

    const { email } = JSON.parse(event.body);
    console.log('Received email:', email);

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    // Read the PDF file
    const pdfPath = join(process.cwd(), 'public', 'pdfs', 'beginner-workout-plan.pdf');
    console.log('PDF path:', pdfPath);
    const pdfBuffer = await fs.readFile(pdfPath);
    
    // Convert PDF to base64
    const pdfBase64 = pdfBuffer.toString('base64');
    console.log('PDF converted to base64');

    // Prepare email
    const msg = {
      to: email,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: 'WE Fitness'
      },
      subject: 'Your Free Workout Program',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Your Interest!</h2>
          <p>Here's your free workout program to help you get started on your fitness journey.</p>
          <p>This program is designed for beginners and includes:</p>
          <ul>
            <li>Detailed workout routines</li>
            <li>Exercise descriptions</li>
            <li>Progress tracking guidelines</li>
          </ul>
          <p>If you have any questions, feel free to reach out to us!</p>
          <br>
          <p>Best regards,</p>
          <p>The WE Fitness Team</p>
        </div>
      `,
      attachments: [
        {
          content: pdfBase64,
          filename: 'WE-Fitness-Beginner-Workout-Plan.pdf',
          type: 'application/pdf',
          disposition: 'attachment'
        }
      ]
    };

    console.log('Attempting to send email to:', email);
    // Send email
    await sgMail.send(msg);
    console.log('Email sent successfully');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Workout plan sent successfully' }),
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
        error: 'Failed to send workout plan',
        details: error.message,
        response: error.response?.body
      }),
    };
  }
}; 