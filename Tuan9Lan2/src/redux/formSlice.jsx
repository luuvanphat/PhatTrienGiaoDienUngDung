// src/redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weight: 0,
  height: 0,
  result: null,
  taxAmount: 0,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    calculateBMI: (state) => {
      if (state.weight && state.height) {
        const bmi = state.weight / (state.height * state.height);
        state.result = bmi;
      }
    },
    calculateTax: (state, action) => {
      const { income } = action.payload;
      state.taxAmount = income * 0.1;  // Giả sử thuế là 10%
    },
  },
});

export const { updateInput, calculateBMI, calculateTax } = formSlice.actions;
export default formSlice.reducer;
