// src/App.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInput, calculateBMI, calculateTax } from './redux/formSlice';

function App() {
  const dispatch = useDispatch();
  const { weight, height, result, taxAmount } = useSelector((state) => state.form);

  const handleInputChange = (e) => {
    dispatch(updateInput({ field: e.target.name, value: e.target.value }));
  };

  const handleCalculateBMI = () => {
    dispatch(calculateBMI());
  };

  const handleCalculateTax = () => {
    dispatch(calculateTax({ income: weight }));
  };

  return (
    <div>
      <h1>Form Tính Toán BMI và Thuế</h1>
      <div>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={handleInputChange}
          placeholder="Cân nặng (kg)"
        />
        <input
          type="number"
          name="height"
          value={height}
          onChange={handleInputChange}
          placeholder="Chiều cao (m)"
        />
        <button onClick={handleCalculateBMI}>Tính BMI</button>
        {result && <p>BMI của bạn: {result}</p>}
      </div>
      <div>
        <input
          type="number"
          name="income"
          value={weight} // Dùng cân nặng làm thu nhập giả sử
          onChange={handleInputChange}
          placeholder="Thu nhập"
        />
        <button onClick={handleCalculateTax}>Tính Thuế</button>
        {taxAmount && <p>Thuế phải trả: {taxAmount}</p>}
      </div>
    </div>
  );
}

export default App;
