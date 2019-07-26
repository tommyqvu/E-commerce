import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Stripe = ({ price }) => {
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;
  const onToken = () => {
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN CLothing Ltd'
      billingAddress
      shippingAddress
      panelLabel='Pay Now'
      image='http://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default Stripe;
