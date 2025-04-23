import React, { useState } from 'react';
import './Modal.css';
import { updateCustomer } from '../../api/customerApi';

const EditModal = ({ customer, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    customerName: customer.customerName,
    company: customer.company,
    orderValue: customer.orderValue,
    status: customer.status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCustomer(customer.id, formData);
      onSave(formData);
      onClose();
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Edit Customer</h3>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Customer Name</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Các trường khác tương tự */}
          
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};