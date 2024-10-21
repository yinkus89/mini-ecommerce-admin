// src/pages/Dashboard.js
import React from 'react';
import ProductList from '../components/ProductList';

const Dashboard = ({ products, deleteProduct }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default Dashboard;
