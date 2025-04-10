const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  // Check if Stripe key is configured
  if (!process.env.STRIPE_SECRET_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Stripe key not configured. Please set STRIPE_SECRET_KEY in environment variables.' 
      })
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { plan, price, signUpFee } = JSON.parse(event.body);
    
    // Calculate the total amount in cents (Stripe expects amounts in cents)
    const totalAmount = (parseFloat(price) + parseFloat(signUpFee || 0)) * 100;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: 'nok',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        plan,
        signUpFee: signUpFee || 0,
      },
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
    };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: error.message,
        details: 'Please ensure STRIPE_SECRET_KEY is properly configured.'
      }),
    };
  }
}; 