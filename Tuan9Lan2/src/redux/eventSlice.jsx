// src/redux/eventSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    editEvent: (state, action) => {
      const { id, updatedEvent } = action.payload;
      const eventIndex = state.events.findIndex((event) => event.id === id);
      if (eventIndex >= 0) {
        state.events[eventIndex] = { ...state.events[eventIndex], ...updatedEvent };
      }
    },
    deleteEvent: (state, action) => {
      const eventId = action.payload;
      state.events = state.events.filter((event) => event.id !== eventId);
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
