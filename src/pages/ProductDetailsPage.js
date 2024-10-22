import React from 'react';
import { useParams } from 'react-router-dom'; 
import productsData from '../data/products.json';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const product = productsData.find(prod => prod.id === parseInt(id));

    if (!product) {
        return <div className="not-found">Product not found!</div>;
    }

    return (
        <div className="product-details">
            <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-info">
                <h2 className="product-title">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <button className="view-btn">view details</button>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
