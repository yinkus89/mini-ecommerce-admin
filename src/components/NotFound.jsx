import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to dashboard</Link>
    </div>
  );
};

export default NotFound;
