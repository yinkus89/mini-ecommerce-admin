import React from 'react';

const ProductItem = ({ product, deleteProduct }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.imageUrl} alt={product.name} />
      <button onClick={() => deleteProduct(product.id)}>Delete</button>
      <button>
        <a href={`/products/${product.id}`}>View Details</a>
      </button>
    </div>
  );
};

export default ProductItem;
