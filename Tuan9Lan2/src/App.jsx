// src/App.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, editEvent, deleteEvent } from './redux/eventSlice';

function App() {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events);

  const [event, setEvent] = useState({ id: '', name: '', date: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleAddEvent = () => {
    dispatch(addEvent(event));
    setEvent({ id: '', name: '', date: '' });  // Reset form
  };

  const handleEditEvent = (id) => {
    dispatch(editEvent({ id, updatedEvent: event }));
  };

  const handleDeleteEvent = (id) => {
    dispatch(deleteEvent(id));
  };

  return (
    <div>
      <h1>Quản lý sự kiện</h1>
      <input
        type="text"
        name="name"
        value={event.name}
        onChange={handleChange}
        placeholder="Tên sự kiện"
      />
      <input
        type="date"
        name="date"
        value={event.date}
        onChange={handleChange}
      />
      <button onClick={handleAddEvent}>Thêm sự kiện</button>

      <h2>Sự kiện đã thêm</h2>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            {e.name} - {e.date}
            <button onClick={() => handleEditEvent(e.id)}>Sửa</button>
            <button onClick={() => handleDeleteEvent(e.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
