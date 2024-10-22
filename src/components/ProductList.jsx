import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json'; // Adjust the path accordingly

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData); // Set state with products data
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product-item" key={product.id}>
                    <img src={product.imageUrl} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
