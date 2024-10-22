// src/components/UpdateItem.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateItem = ({ products, updateProduct }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(prod => prod.id === parseInt(id));
    
    const [formData, setFormData] = useState({
        name: product ? product.name : '',
        description: product ? product.description : '',
        price: product ? product.price : '',
        imageUrl: product ? product.imageUrl : '',
        category: product ? product.category : '',
        inStock: product ? product.inStock : false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { id: parseInt(id), ...formData };
        updateProduct(updatedProduct);
        navigate('/'); // Redirect to the dashboard after updating
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Product</h2>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} required />
            </div>
            <div>
                <label>Image URL:</label>
                <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
            </div>
            <div>
                <label>Category:</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} required />
            </div>
            <div>
                <label>In Stock:</label>
                <input type="checkbox" name="inStock" checked={formData.inStock} onChange={handleChange} />
            </div>
            <button type="submit">Update Product</button>
        </form>
    );
};

// Define PropTypes
UpdateItem.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            imageUrl: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            inStock: PropTypes.bool.isRequired,
        })
    ).isRequired,
    updateProduct: PropTypes.func.isRequired,
};

export default UpdateItem;
