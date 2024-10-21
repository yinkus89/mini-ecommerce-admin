// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" onClick={(e) => { e.preventDefault(); console.log('Home clicked'); }}>
                Home
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" onClick={(e) => { e.preventDefault(); console.log('Add Product clicked'); }}>
                Add Product
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" onClick={(e) => { e.preventDefault(); console.log('Products clicked'); }}>
                Products
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" onClick={(e) => { e.preventDefault(); console.log('About Us clicked'); }}>
                About Us
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" onClick={(e) => { e.preventDefault(); console.log('Contact clicked'); }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <button className="social-icon" onClick={() => console.log('Facebook clicked')}>
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="social-icon" onClick={() => console.log('Twitter clicked')}>
              <i className="fab fa-twitter"></i>
            </button>
            <button className="social-icon" onClick={() => console.log('Instagram clicked')}>
              <i className="fab fa-instagram"></i>
            </button>
            <button className="social-icon" onClick={() => console.log('LinkedIn clicked')}>
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
