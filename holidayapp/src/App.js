import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './components/CartProvider';
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';
import CheckoutPage from './components/CheckoutPage';
import ConfirmationPage from './components/ConfirmationPage';
import Navbar from './components/Navbar';
import ProductProvider, { ProductContext } from './components/ProductProvider';

const App = () => {
  const products = useContext(ProductContext)


  return (
    <ProductProvider>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainPage products={products} />} />
          <Route
            path="/products/:productId"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/checkout/"
            element={<CheckoutPage products={products} />}
          />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </ProductProvider>
  );
};

export default App;
