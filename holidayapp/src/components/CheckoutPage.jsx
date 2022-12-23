import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartProvider';
import { CheckoutProvider, useCheckoutContext } from './CheckoutProvider';
import '../styling//checkoutpage.css'

const CheckoutPage = () => {
const navigate = useNavigate();
const { cart, removeFromCart } = useContext(CartContext);
const { name, setName, creditCard, setCreditCard, email, setEmail, address, setAddress } = useCheckoutContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit payment/billing information
    // ...
  
    // Check if all fields are filled out
    const form = event.target;
    if (form.checkValidity()) {
      // Navigate to ConfirmationPage
      navigate(`/confirmation`);
    } else {
      console.log("Fill all fields")
    }
  };
  

  return (
    <div className="checkout-page">
      <h3>Checkout</h3>
      <div className="cart">
        {cart.map(product => (
          <div key={product.id} className="cart-item">
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <button onClick={() => removeFromCart(product)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="payment-form">
        <label>
          Name:
          <input
            required
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Credit Card:
          <input
            required
            type="text"
            name="creditCard"
            value={creditCard}
            onChange={event => setCreditCard(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            required
            type="text"
            name="address"
            value={address}
            onChange={event => setAddress(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default () => (
    <CheckoutProvider> 
 <CheckoutPage/>
 </CheckoutProvider>
)