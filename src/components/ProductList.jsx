// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, deleteProduct }) => {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.name} style={{ width: '50px' }} /></td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity > 0 ? product.quantity : 'Out of Stock'}</td>
              <td>
                <Link to={`/products/${product.id}`}>View</Link> | 
                <Link to={`/edit-product/${product.id}`}>Edit</Link> | 
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
