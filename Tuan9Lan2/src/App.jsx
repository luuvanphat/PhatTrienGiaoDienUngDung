// src/App.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './redux/cartSlice';

function App() {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState(1);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id: Date.now(), name: productName, quantity: productQuantity }));
    setProductName('');
    setProductQuantity(1);
  };

  return (
    <div>
      <h1>Giỏ hàng</h1>
      <p>Tên sản phẩm</p>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Tên sản phẩm"
      />
      <p>Số lượng</p>
      <input
        type="number"
        value={productQuantity}
        onChange={(e) => setProductQuantity(Number(e.target.value))}
        min="1"
        placeholder="Số lượng"
      />
      <p></p>
      <button onClick={handleAddToCart}>Thêm vào giỏ</button>
      <p>Giỏ hàng:  </p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => dispatch(removeItem(item.id))}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
