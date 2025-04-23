import React, { useState } from 'react';
import './Modal.css';
import { createCustomer } from '../../api/customerApi';

const AddUserModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    company: '',
    orderValue: '',
    status: 'view'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCustomer = await createCustomer(formData);
      onAdd(newCustomer);
      onClose();
    } catch (error) {
      console.error('Create failed:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add New Customer</h3>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Các trường tương tự EditModal nhưng không có giá trị mặc định */}
          
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};