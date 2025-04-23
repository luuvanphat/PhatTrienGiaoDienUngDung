import React, { useState } from "react";
import "./AddUserModal.css";

const AddUserModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "view",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Call the onSubmit prop to pass the form data out of the modal
    await onSubmit(formData);
    
    setFormData({
      customerName: "",
      company: "",
      orderValue: "",
      orderDate: "",
      status: "view",
    });
    onClose(); // Close the modal after submitting
    setIsSubmitting(false); // Reset the loading state
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Thêm User Mới</h3>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>CUSTOMER NAME</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Nhập tên user"
                required
              />
            </div>
            <div className="form-group">
              <label>COMPANY</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nhập company"
                required
              />
            </div>
            <div className="form-group">
              <label>ORDER VALUE</label>
              <input
                type="number"
                name="orderValue"
                value={formData.orderValue}
                onChange={handleChange}
                placeholder="Nhập order value"
                required
              />
            </div>
            <div className="form-group">
              <label>ORDER DATE</label>
              <input
                type="date"
                name="orderDate"
                value={formData.orderDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="view">View</option>
                <option value="progress">In-progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="submit-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Thêm User'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
