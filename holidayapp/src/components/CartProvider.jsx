import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(p => p !== product));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;