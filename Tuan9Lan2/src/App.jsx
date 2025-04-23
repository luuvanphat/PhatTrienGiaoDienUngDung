// src/App.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount, setStep } from './redux/counterSliceAdvance';  // Counter nâng cao

function App() {
  const dispatch = useDispatch();

  // Lấy giá trị và step từ Redux store
  const { value, step } = useSelector((state) => state.counterAd);

  const [amount, setAmount] = useState(0);  // Để nhập số cho incrementByAmount
  const [newStep, setNewStep] = useState(step);  // Để thay đổi step cho counter nâng cao

  const handleAmountChange = (e) => setAmount(Number(e.target.value));
  const handleStepChange = (e) => setNewStep(Number(e.target.value));

  return (
    <div>
      <h1>Counter nâng cao</h1>
      <p>Value: {value} | Step: {step}</p>
      <button onClick={() => dispatch(increment())}>Tăng theo step</button>
      <button onClick={() => dispatch(decrement())}>Giảm theo step</button>
      <button onClick={() => dispatch(reset())}>Đặt lại</button>

      <div>
        <input 
          type="number" 
          value={newStep} 
          onChange={handleStepChange} 
          placeholder="Nhập bước" 
        />
        <button onClick={() => dispatch(setStep(newStep))}>Cập nhật bước</button>
      </div>

      <div>
        <input 
          type="number" 
          value={amount} 
          onChange={handleAmountChange} 
          placeholder="Nhập số" 
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>Tăng theo số</button>
      </div>
    </div>
  );
}

export default App;
