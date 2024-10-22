import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; // Adjust the path as necessary


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={() => console.log('Home clicked')}>Home</Link></li>
            <li><Link to="/add-product" onClick={() => console.log('Add Product clicked')}>Add Product</Link></li>
            <li><Link to="/products" onClick={() => console.log('Products clicked')}>Products</Link></li>
            <li><Link to="/about" onClick={() => console.log('About Us clicked')}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => console.log('Contact clicked')}>Contact</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <button className="social-icon" onClick={() => console.log('Facebook clicked')} aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="social-icon" onClick={() => console.log('Twitter clicked')} aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="social-icon" onClick={() => console.log('Instagram clicked')} aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </button>
            <button className="social-icon" onClick={() => console.log('LinkedIn clicked')} aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mini E-Commerce Admin. All rights reserved.</p>
        <a 
          className="github-link" 
          href="https://github.com/yinkus89/mini-ecommerce-admin.git" 
          target="_blank" 
          rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
