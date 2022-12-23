import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/mainpage.css';
import { ProductContext } from '../components/ProductProvider';

const MainPage = () => {
    const navigate = useNavigate();
    const products = useContext(ProductContext)
    console.log(products)


    const handleClick = (productId) => {
        navigate(`/products/${productId}`);
    };

    return (
        <div style={{ display: 'flex', justifyContent: "center", flexWrap: 'wrap' }}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    navigate={handleClick}
                />
            ))}
        </div>
    );
};

const ProductCard = ({ product, navigate }) => (
    <div className="product-card">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <img src={product.image} alt={product.name} />
        <button onClick={() => navigate(product.id)}>
            View Product
        </button>
    </div>
);

export default MainPage;
