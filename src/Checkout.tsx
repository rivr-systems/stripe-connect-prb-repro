import React, {useState, useEffect} from 'react';
import {PaymentRequestButtonElement, useStripe} from '@stripe/react-stripe-js';
import { PaymentRequest } from '@stripe/stripe-js';

export const Checkout = () => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(null);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'GB',
        currency: 'gbp',
        total: {
          label: 'Total',
          amount: 1099,
        },
      });

      pr.canMakePayment().then(result => {
        if (result) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe]);

  if (paymentRequest) {
    return <PaymentRequestButtonElement options={{paymentRequest}} />;
  }

  // Use a traditional checkout form.
  return <span>{'Loading'}</span>;
}