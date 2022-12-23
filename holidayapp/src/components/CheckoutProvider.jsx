import React, { createContext, useContext, useState } from 'react';

export const CheckoutContext = createContext();

const CheckoutProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  return (
    <CheckoutContext.Provider
      value={{
        name,
        setName,
        creditCard,
        setCreditCard,
        email,
        setEmail,
        address,
        setAddress,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

const useCheckoutContext = () => useContext(CheckoutContext);

export { CheckoutProvider, useCheckoutContext };
