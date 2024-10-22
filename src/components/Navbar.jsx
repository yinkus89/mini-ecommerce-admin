// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Mini E-commerce Admin</h1>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/products">View Products</Link></li>
        <li><Link to="/edit-product/:id">Edit Product</Link></li> {/* Placeholder for product ID */}
      </ul>
    </nav>
  );
};

export default Navbar;
