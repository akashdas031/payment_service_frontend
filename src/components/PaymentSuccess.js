// src/components/PaymentSuccess.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const { paymentId } = useParams();
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    // Fetch the payment details using the paymentId (you can extend this as per your backend)
    const fetchPaymentDetails = async () => {
      try {
        const response = await fetch(`http://localhost:6578/api/payments/status/${paymentId}`);
        const data = await response.json();
        setPaymentDetails(data);
      } catch (error) {
        console.error("Failed to fetch payment details:", error);
      }
    };

    fetchPaymentDetails();
  }, [paymentId]);

  return (
    <div>
      <h2>Payment Successful</h2>
      {paymentDetails ? (
        <div>
          <p>Payment ID: {paymentDetails.paymentId}</p>
          <p>Order ID: {paymentDetails.orderId}</p>
          <p>Status: {paymentDetails.status}</p>
        </div>
      ) : (
        <p>Loading payment details...</p>
      )}
    </div>
  );
};

export default PaymentSuccess;
