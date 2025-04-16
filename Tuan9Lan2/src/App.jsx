// src/App.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/authSlice';

function App() {
  const [username, setUsername] = useState('');
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>{isLoggedIn ? `Chào mừng ${user.username}` : 'Bạn chưa đăng nhập'}</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Đăng xuất</button>
      ) : (
        <>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên"
          />
          <button onClick={handleLogin}>Đăng nhập</button>
        </>
      )}
    </div>
  );
}

export default App;
