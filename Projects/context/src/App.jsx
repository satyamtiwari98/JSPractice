import { useContext } from "react";
import "./App.css";
import { contextObj } from "./main";

function App() {
  const myinfo = useContext(contextObj);
  return (
    <div>
      <h1>Hi {myinfo.name}</h1>
      <h3>Your age is {myinfo.age}</h3>
    </div>
  );
}

export default App;
