// src/redux/counterSliceAdvance.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  step: 1,  // Mặc định step là 1
};

const counterSliceAdvance = createSlice({
  name: 'counterAd',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.step;  // Tăng theo step
    },
    decrement: (state) => {
      state.value -= state.step;  // Giảm theo step
    },
    reset: (state) => {
      state.value = 0;  // Đặt lại giá trị
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;  // Tăng theo số nhập vào
    },
    setStep: (state, action) => {
      state.step = action.payload;  // Cập nhật bước
    },
  },
});

export const { increment, decrement, reset, incrementByAmount, setStep } = counterSliceAdvance.actions;
export default counterSliceAdvance.reducer;
