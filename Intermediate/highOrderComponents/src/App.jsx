import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/satyam").then((res) => {
      res.json().then((json) => {
        console.log(json);
        setArr(json);
      });
    });
  }, []);
  return (
    <div>
      <h1>App</h1>
      <Counter />
      <ul>
        {arr.map((ele, index) => {
          return <li key={index}>{ele}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
