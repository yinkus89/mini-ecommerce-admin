// src/pages/Dashboard.js
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import ProductList from '../components/ProductList';

const Dashboard = ({ products, deleteProduct }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

// Define prop types
Dashboard.propTypes = {
  products: PropTypes.array.isRequired, // Expected to be an array
  deleteProduct: PropTypes.func.isRequired, // Expected to be a function
};

export default Dashboard;
