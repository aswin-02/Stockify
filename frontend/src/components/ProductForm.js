import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * ProductForm component for creating or editing a product.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.selectedProduct - The selected product object for editing.
 * @param {Function} props.onSave - The function to be called when the form is submitted.
 * @param {Function} props.onCancel - The function to be called when the form is cancelled.
 * @returns {JSX.Element} The ProductForm component.
 */
const ProductForm = ({ selectedProduct, onSave, onCancel }) => {
  // State variable to track form visibility
  const [setShowForm] = useState(false);

  // State variable to store form data
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: ''
  });

  // Update form data when selectedProduct prop changes
  useEffect(() => {
    if (selectedProduct) {
      setFormData(selectedProduct);
    } else {
      setFormData({
        name: '',
        description: '',
        price: '',
        quantity: ''
      });
    }
  }, [selectedProduct]);

  /**
   * Handle form input change.
   * 
   * @param {Object} e - The event object.
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handle form submission.
   * 
   * @param {Object} e - The event object.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedProduct) {
        await axios.patch(`http://localhost:3000/products/${selectedProduct.product_id}`, formData);
      } else {
        await axios.post('http://localhost:3000/products', formData);
      }
      onSave();
      setFormData({
        name: '',
        description: '',
        price: '',
        quantity: ''
      });
    } catch (error) {
      console.error('Error saving product:', error.response ? error.response.data : error.message);
    }
  };

  /**
   * Handle form cancellation.
   */
  const handleCancel = () => {
    setShowForm(false); // Hide the form when "Cancel" button is clicked
    setFormData({
      name: '',
      description: '',
      price: '',
      quantity: ''
    });
    onCancel();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='d-flex mt-2'>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price.toString()}
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity.toString()}
            onChange={handleChange}
            required
          />
          <button className='btn btn-primary' type="submit">add</button>
          <button className='btn btn-danger' type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
