
import React, { useState } from "react";
import menuData from "../data/menu.json";

const MenuList = () => {
  const [order, setOrder] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null); 

  const addToOrder = (dish) => {
    setOrder((prevOrder) => [...prevOrder, dish]);
  };

  const showDetails = (dish) => {
    setSelectedDish(dish); 
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Thực đơn</h2>
      <div className="row">
        {menuData.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p>{item.description}</p>
                <p><strong>Giá:</strong> {item.price} VND</p>
                <button
                  className="btn btn-info"
                  onClick={() => showDetails(item)} 
                >
                  Xem chi tiết
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => addToOrder(item)} 
                >
                  Thêm vào đặt món
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {}
      {selectedDish && (
        <div className="mt-5">
          <hr />
          <h3>Thông tin chi tiết món ăn</h3>
          <p><strong>Tên món:</strong> {selectedDish.name}</p>
          <p><strong>Mô tả:</strong> {selectedDish.description}</p>
          <p><strong>Giá:</strong> {selectedDish.price} VND</p>
        </div>
      )}
      <hr />
      <div className="mt-5">
        <hr />
        <h3>Danh sách đặt món</h3>
        {order.length > 0 ? (
          <ul>
            {order.map((dish, index) => (
              <li key={index}>{dish.name} - {dish.price} VND</li>
            ))}
          </ul>
        ) : (
          <p>Chưa có món nào trong danh sách đặt món.</p>
        )}
      </div>
      <hr />
    </div>
  );
};

export default MenuList;

