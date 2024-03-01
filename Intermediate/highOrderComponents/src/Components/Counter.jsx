import HOC from "../HOC/HOC";
const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Satyam Tiwari</h1>
      <div>
        <h3>{count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default HOC(Counter);
