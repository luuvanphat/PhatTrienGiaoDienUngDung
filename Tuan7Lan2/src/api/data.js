// src/api/data.js

// Hàm lấy dữ liệu (giả lập)
export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1, // thêm ID để dễ dàng cập nhật
          customerName: "Elizabeth Lee",
          company: "AvatarSystems",
          orderValue: 359,
          orderDate: "10/07/2023",
          status: "View"
        },
        {
          id: 2,
          customerName: "Carlos Garcia",
          company: "SmoonsShift",
          orderValue: 747,
          orderDate: "24/07/2023",
          status: "View"
        },
        {
          id: 3,
          customerName: "Elizabeth Bailey",
          company: "Prime Time Telecom",
          orderValue: 564,
          orderDate: "08/08/2023",
          status: "In-progress"
        },
        {
          id: 4,
          customerName: "Ryan Brown",
          company: "OmnTech Corporation",
          orderValue: 641,
          orderDate: "31/08/2023",
          status: "In-progress"
        },
        {
          id: 5,
          customerName: "Ryan Young",
          company: "DataStream Inc.",
          orderValue: 789,
          orderDate: "01/05/2023",
          status: "Completed"
        },
        {
          id: 6,
          customerName: "Halley Adams",
          company: "FlowRush",
          orderValue: 922,
          orderDate: "10/06/2023",
          status: "Completed"
        }
      ]);
    }, 1000); // Giả lập độ trễ
  });
};

// Hàm gửi PUT request để cập nhật dữ liệu
export const updateData = async (updatedRow) => {
  try {
    const response = await fetch(`https://api.example.com/data/${updatedRow.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRow),
    });

    if (!response.ok) {
      throw new Error('Failed to update data');
    }
    return await response.json(); // trả về dữ liệu đã được cập nhật từ API
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};
