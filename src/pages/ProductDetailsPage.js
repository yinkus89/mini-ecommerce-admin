   // src/pages/ProductDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../data/products.json';

const ProductDetailsPage = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const productId = parseInt(id); // Convert ID to a number

    // Find the product from productData using the ID
    const product = productData.find(product => product.id === productId);

    if (!product) {
        return <div>Product not found</div>; // Handle case where product is not found
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <p>Description: {product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Category: {product.category}</p>
            <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default ProductDetailsPage;
    