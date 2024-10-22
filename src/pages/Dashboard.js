// src/pages/Dashboard.js
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import ProductList from '../components/ProductList';

const Dashboard = ({ products, deleteProduct }) => {
  return (
      <div>
          <h1>Product Dashboard</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {products.map((product) => (
                  <ProductList
                      key={product.id}
                      product={product}
                      deleteProduct={deleteProduct}
                  />
              ))}
          </div>
      </div>
  );
};
// Define prop types
Dashboard.propTypes = {
  products: PropTypes.array.isRequired, // Expected to be an array
  deleteProduct: PropTypes.func.isRequired, // Expected to be a function
};

export default Dashboard;
