import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartContextProvider } from './context/CartContext';
import { PaymentModalContextProvider } from './context/PaymentModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
    <PaymentModalContextProvider>
      <App />
    </PaymentModalContextProvider>
  </CartContextProvider>
);
