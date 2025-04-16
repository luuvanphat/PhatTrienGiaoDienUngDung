import React from 'react';
import './Overview.css';

const StatCard = ({ title, value, changePercentage, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-content">
        
        <div className="stat-text">
          <h5>{title}</h5>
          <div className="stat-value">${value.toLocaleString()}</div>
          <div className="stat-change">
            <span className="percentage" style={{ color: '#10B981' }}>
            ▲{changePercentage > 0 ? '+' : ''}{changePercentage}%
            </span>
            <span className="period-text"> period of change</span>
          </div>
        </div>
        <img src={icon} alt={title} className="stat-icon" />
      </div>
    </div>
  );
};

export default StatCard;