import React, { useContext } from 'react';
import { CartContext } from './CartProvider';
import '../styling//confirmationpage.css';
import { CheckoutContext, CheckoutProvider } from './CheckoutProvider';

const ConfirmationPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { name, creditCard, email, address } = useContext(CheckoutContext);

  return (
    <CheckoutProvider>
    <div className="confirmation-page">
      <h3>Thank you for your order!</h3>
      <div className="order-details">
        <h4>Order Details:</h4>
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              {product.name} - {product.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="billing-info">
        <h4>Billing Information:</h4>
        <p>Name: {name}</p>
        <p>Credit Card: {creditCard}</p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
      </div>
      <button onClick={clearCart}>Start a New Order</button>
    </div>
    </CheckoutProvider>
  );
};

export default () => (
    <CheckoutProvider>
    <ConfirmationPage />
    </CheckoutProvider>

)
