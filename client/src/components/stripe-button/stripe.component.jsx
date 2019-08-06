import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const Stripe = ({ price }) => {
  const onToken = token => {
    console.log('processing');
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: price * 100,
        token,
      },
    })
      .then(res => alert('Payment of $ ' + price + ' successful'))
      .catch(err => console.log(err));
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
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    />
  );
};

export default Stripe;
