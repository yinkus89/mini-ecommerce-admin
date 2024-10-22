// src/components/ProductList.js
import React from 'react';
import productData from '../data/products.json'; // Adjust the path according to your file structure
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productData.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h3>{product.name}</h3>
              <img src={product.imageUrl} alt={product.name} />
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
