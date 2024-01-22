import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

export const contextObj = createContext();
const myInfo = {
  name: "satyam",
  age: 23,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <contextObj.Provider value={myInfo}>
    <App />
  </contextObj.Provider>
);
