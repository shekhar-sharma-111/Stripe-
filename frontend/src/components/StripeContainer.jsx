import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51PqXqHLBct7rpMPVYWB1qmhpfORPQ62fKBLTyRlxe6ndjy9b5ZOXW6UeBpD1TS8RZaZ1ERj2SdvsrC7hLGzsvAQT00tzRRmnwe');

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
