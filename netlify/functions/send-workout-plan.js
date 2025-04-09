const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs').promises;

// Create a transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    // Read the PDF file
    const pdfPath = path.join(__dirname, '../../public/pdfs/beginner-workout-plan.pdf');
    const pdfContent = await fs.readFile(pdfPath);

    // Send email with PDF attachment
    await transporter.sendMail({
      from: `"WE Fitness" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Your Free Workout Program',
      html: `
        <h2>Thank You for Your Interest!</h2>
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
      `,
      attachments: [
        {
          filename: 'WE-Fitness-Beginner-Workout-Plan.pdf',
          content: pdfContent,
        },
      ],
    });

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