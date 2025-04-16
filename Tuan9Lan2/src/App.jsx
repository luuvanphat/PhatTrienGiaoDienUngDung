// src/App.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './redux/themeSlice';

function App() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={theme}>
      <h1>{theme === 'light' ? 'Chế độ sáng' : 'Chế độ tối'}</h1>
      <button onClick={toggleMode}>Chuyển đổi chế độ</button>
    </div>
  );
}

export default App;
