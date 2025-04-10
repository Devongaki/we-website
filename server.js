import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

// Initialize Stripe with the secret key
const stripe = new Stripe('sk_test_51RBDv39vE5ISpIBOJ022EMfY0K8UIq0fFF0lymj66THKttujlZmn1eiGHLhNIOFOd30oSU6L7Sl0lZa5SG7elmp400JvMWsMCW');

const app = express();
const port = process.env.PORT || 5001;

// Enable CORS for all routes
app.use(cors({
  origin: '*', // During development, allow all origins
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Parse JSON bodies
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  try {
    res.json({ message: 'Server is working!' });
  } catch (err) {
    console.error('Test endpoint error:', err);
    res.status(500).json({ error: 'Test endpoint failed' });
  }
});

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    console.log('Received payment intent request:', req.body);
    const { plan, price, signUpFee } = req.body;
    
    if (!plan || !price) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Convert price to cents/øre
    const amount = Math.round((parseFloat(price) + parseFloat(signUpFee || 0)) * 100);
    console.log('Calculated amount:', amount);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'nok',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        plan,
        signUpFee: signUpFee || 0,
      },
    });

    console.log('Payment intent created:', paymentIntent.id);
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Error creating payment intent:', err);
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Test the server with:');
  console.log(`curl http://localhost:${port}/api/test`);
}); 