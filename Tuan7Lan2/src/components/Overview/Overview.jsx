import React, { useState, useEffect } from 'react';
import StatCard from './StatCard';
import { fetchTurnover, fetchProfit, fetchNewCustomers } from '../../services/api';
import './Overview.css';

const Overview = () => {
  const [data, setData] = useState({
    turnover: 0,
    profit: 0,
    newCustomers: 0,
    loading: true
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [turnover, profit, newCustomers] = await Promise.all([
          fetchTurnover(),
          fetchProfit(),
          fetchNewCustomers()
        ]);
        setData({
          turnover: turnover.value,
          profit: profit.value,
          newCustomers: newCustomers.value,
          loading: false
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(prev => ({ ...prev, loading: false }));
      }
    };
    fetchData();
  }, []);

  if (data.loading) return <div className="loading">Loading...</div>;

  return (
    
    <div className="overview-container">

      <StatCard 
        title="Turnover" 
        value={data.turnover} 
        changePercentage={-5.32} 
        icon="/img/Lab_05/Button 1509.png"  // Đường dẫn icon
      />
      <StatCard 
        title="Profit" 
        value={data.profit} 
        changePercentage={-5.32} 
        icon="/img/Lab_05/Button 1529.png" 
      />
      <StatCard 
        title="New customer" 
        value={data.newCustomers} 
        changePercentage={-6.84} 
        icon="/img/Lab_05/Button 1530.png" 
      />
    </div>
  );
};

export default Overview;