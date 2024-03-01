import { useContext, useReducer } from "react";
const reduceFn = (count, action) => {
  switch (action) {
    case "Increment":
      return count + 1;
    case "Decrement":
      return count - 1;
    default:
      return count;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reduceFn, 0);

  return (
    <div>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <hr></hr>
    </div>
  );
};

export default Counter;
