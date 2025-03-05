import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const handleClick = () => {
    setDisplayText(`Hello ${text}`);
  };

  const handleSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  const handleCalculate = () => {
    const n1 = Number(num3);
    const n2 = Number(num4);
    let res;
    switch (operator) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n2 !== 0 ? n1 / n2 : "Không thể chia cho 0";
        break;
      default:
        res = "Lỗi toán tử";
    }
    setResult(res);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập nội dung..."
      />
      <button onClick={handleClick}>Click</button>
      <p>{displayText}</p>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Nhập số thứ nhất (Sum)"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Nhập số thứ hai (Sum)"
      />
      <button onClick={handleSum}>Sum</button>
      <p>Tổng: {sum}</p>

      <h2>Calculator</h2>
      <input
        type="number"
        value={num3}
        onChange={(e) => setNum3(e.target.value)}
        placeholder="Nhập số thứ nhất (Calculator)"
      />
      <input
        type="number"
        value={num4}
        onChange={(e) => setNum4(e.target.value)}
        placeholder="Nhập số thứ hai (Calculator)"
      />
      <div>
        <label>
          <input
            type="radio"
            name="operator"
            value="+"
            checked={operator === "+"}
            onChange={(e) => setOperator(e.target.value)}
          />{" "}
          +
        </label>
        <label>
          <input
            type="radio"
            name="operator"
            value="-"
            checked={operator === "-"}
            onChange={(e) => setOperator(e.target.value)}
          />{" "}
          -
        </label>
        <label>
          <input
            type="radio"
            name="operator"
            value="*"
            checked={operator === "*"}
            onChange={(e) => setOperator(e.target.value)}
          />{" "}
          *
        </label>
        <label>
          <input
            type="radio"
            name="operator"
            value="/"
            checked={operator === "/"}
            onChange={(e) => setOperator(e.target.value)}
          />{" "}
          /
        </label>
      </div>
      <button onClick={handleCalculate}>Tính</button>
      <p>Kết quả: {result}</p>
    </div>
  );
}

export default App;