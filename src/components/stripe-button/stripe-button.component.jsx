import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Gv4pvEzUxFJ0HIMBWAot8DblULWVE6TMQbm1UUbmxz5eBL9BlHvgLFSrZIadu2D8NPpR5xZSyoK7axg1o62OTLE00sieNBMFF';
  const onToken = (token) => {
    console.log('token ', token);
    alert('Payment Successful');
  };
  return <StripeCheckout label="Pay Now" name="CRWN Clothing Ltd." billingAddress shippingAddress image="https://svgshare.com/i/CUz.svg" description={`Your total is $${price}`} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey} />;
};

export default StripeCheckoutButton;
