// src/components/PaymentError.js
import React from 'react';

const PaymentError = () => {
  return (
    <div className="payment-status">
      <h2>Payment Failed</h2>
      <p>There was an issue processing your payment. Please try again.</p>
    </div>
  );
};

export default PaymentError;
