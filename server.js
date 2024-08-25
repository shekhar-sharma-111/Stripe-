const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/payments/create-payment-intent', async (req, res) => {
  try {
    const { amount, fullName, description } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      description: description || '', // Optional description
      payment_method_types: ['card'],
      receipt_email: req.body.email, // Optionally, add an email for the receipt
      metadata: {
        fullName: fullName, // Store full name in metadata
      },
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
