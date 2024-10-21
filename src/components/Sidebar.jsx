// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={{ width: '200px', float: 'left', padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h3>Admin Menu</h3>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
