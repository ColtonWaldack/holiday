import React, {useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from './CartProvider';
import { ProductContext } from '../components/ProductProvider';
import '../styling/productpage.css';

const ProductPage = () => {
  const products = useContext(ProductContext)
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.filter(p => p.id == productId)[0];
  const { addToCart, cart } = useContext(CartContext);

  // Check if the product is already in the cart
  const inCart = cart.includes(product);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleCheckout = () => {
    navigate(`/checkout`);
  };

  if (product) {
    return (
        <div className="product-page">
        <h3>{product.name}</h3>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        {!inCart && (
          <button onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
        <button onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    );
  } else {
    return <div>Product not found</div>;
  }
};

export default ProductPage;
