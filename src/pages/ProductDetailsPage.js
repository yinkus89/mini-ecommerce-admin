// src/pages/ProductDetailsPage.jsx
import React from 'react';
import UpdateItem from '../components/UpdateItem';

const ProductDetailsPage = ({ product }) => {
  const handleUpdateItem = (itemId, updatedData) => {
    console.log(`Updated Item ID: ${itemId}`, updatedData);
    // Perform the update logic here, such as making an API call to update the product.
  };

  return (
    <div>
      <h1>Product Details</h1>
      {/* Other product details here */}
      <UpdateItem 
        itemId={product.id} 
        onUpdate={handleUpdateItem} 
        initialItemData={product} 
      />
    </div>
  );
};

export default ProductDetailsPage;
