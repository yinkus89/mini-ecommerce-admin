// src/components/UpdateItem.jsx

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateItem = ({ products, updateProduct }) => {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = products.find(p => p.id === productId);
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [productId, products]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(product.id, product);
        navigate('/'); // Navigate back to the dashboard or products list after update
    };

    if (!product) return <div>Loading...</div>;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Product Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                required
            />
            <label htmlFor="price">Price</label>
            <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
            />
            <button type="submit">Update Product</button>
        </form>
    );
};

// Prop validation
UpdateItem.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    updateProduct: PropTypes.func.isRequired,
};

export default UpdateItem;
