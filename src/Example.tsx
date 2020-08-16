import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Checkout } from './Checkout';

const { REACT_APP_PUBLISHABLE_KEY } = process.env;

if (!REACT_APP_PUBLISHABLE_KEY) {
  throw new Error('REACT_APP_PUBLISHABLE_KEY not set');
}

const stripePromise = loadStripe(REACT_APP_PUBLISHABLE_KEY);

export const Example = () => {

  return (
    <Elements stripe={stripePromise}>
      <h1>Example</h1>
      <Checkout />
    </Elements>
  );
};
