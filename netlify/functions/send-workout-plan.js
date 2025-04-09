const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the request body
    const { email } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    // Create a transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Read the PDF file
    const pdfPath = path.join(__dirname, '../../public/pdfs/beginner-workout-plan.pdf');
    const pdfContent = fs.readFileSync(pdfPath);

    // Send the email with the PDF attachment
    await transporter.sendMail({
      from: `"WE Online Coaching" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: 'Your Free Beginner Workout Plan',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #004AAD;">Your Free Workout Plan is Here!</h1>
          <p>Thank you for requesting our beginner workout plan. We're excited to help you start your fitness journey!</p>
          <p>You'll find the attached PDF with your 4-week beginner workout plan. This program is designed to help you build a solid foundation and develop good habits.</p>
          <h2 style="color: #004AAD;">What's Included:</h2>
          <ul>
            <li>4-week structured program</li>
            <li>Beginner-friendly exercises with instructions</li>
            <li>Progressive overload principles</li>
            <li>Rest and recovery guidelines</li>
          </ul>
          <p>If you have any questions about the program, feel free to reply to this email.</p>
          <p>Good luck with your fitness journey!</p>
          <p>The WE Online Coaching Team</p>
        </div>
      `,
      attachments: [
        {
          filename: 'beginner-workout-plan.pdf',
          content: pdfContent,
        },
      ],
    });

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Workout plan sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending workout plan:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send workout plan' }),
    };
  }
}; 