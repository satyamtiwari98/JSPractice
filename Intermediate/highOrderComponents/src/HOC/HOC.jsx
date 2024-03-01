import { useState } from "react";
const HOC = (Counter) => {
  const EnhancedHOC = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    return (
      <Counter count={count} increment={increment} decrement={decrement} />
    );
  };
  return EnhancedHOC;
};

export default HOC;
