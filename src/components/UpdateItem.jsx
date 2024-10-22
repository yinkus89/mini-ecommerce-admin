// src/components/ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductItem = ({ product, deleteProduct }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.imageUrl} alt={product.name} />
      <button onClick={() => deleteProduct(product.id)}>Delete</button>
      <button>
        <Link to={`/products/${product.id}`}>View Details</Link>
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default ProductItem;
