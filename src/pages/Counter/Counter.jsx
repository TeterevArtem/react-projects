import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./style.scss"

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = (symbol) => {
    if (symbol === "-") {
      setCount((prevState) => prevState - 1);
    } else {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <div className="counter">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <Button className="minus" symbol="-" handleClick={handleClick}>
          - Минус
        </Button>
        <Button className="plus" symbol="+" handleClick={handleClick}>
          Плюс +
        </Button>
      </div>
      <Link to="/">Home Page</Link>
    </div>
  );
}

export default Counter;
