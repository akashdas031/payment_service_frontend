// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentForm from './components/PaymentForm';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentError from './components/PaymentError';
import './styles/paymentForm.css';
import './styles/paymentStatus.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentForm />} />
        <Route path="/payment-success/:paymentId" element={<PaymentSuccess />} />
        <Route path="/payment-error" element={<PaymentError />} />
      </Routes>
    </Router>
  );
};

export default App;
