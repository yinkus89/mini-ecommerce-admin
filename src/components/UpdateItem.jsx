// src/components/UpdateItem.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UpdateItem = ({ itemId, onUpdate, initialItemData }) => {
  const [itemData, setItemData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (initialItemData) {
      setItemData(initialItemData);
    }
  }, [initialItemData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(itemId, itemData);
  };

  return (
    <div className="update-item">
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={itemData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={itemData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={itemData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={itemData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

UpdateItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  initialItemData: PropTypes.object.isRequired,
};

export default UpdateItem;
