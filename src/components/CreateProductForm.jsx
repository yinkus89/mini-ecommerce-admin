// src/components/CreateProduct.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateProduct = ({ addProduct }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
        setProduct({ name: '', description: '', price: '' }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Product Name:</label>
            <input type="text" id="name" name="name" value={product.name} onChange={handleChange} required />
            
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value={product.description} onChange={handleChange} required />
            
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" value={product.price} onChange={handleChange} required />
            
            <button type="submit">Add Product</button>
        </form>
    );
};

// Prop validation
CreateProduct.propTypes = {
    addProduct: PropTypes.func.isRequired,
};

export default CreateProduct;
