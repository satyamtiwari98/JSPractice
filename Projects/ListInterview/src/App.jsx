import { useState } from "react";
import "./App.css";
// import Counter from "./Counter";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";

// const satyamContext = createContext();

function App() {
  // const arr = [
  //   "John",
  //   "Emma",
  //   "Michael",
  //   "Sophia",
  //   "William",
  //   "Olivia",
  //   "James",
  //   "Amelia",
  //   "Benjamin",
  //   "Isabella",
  // ];
  // const [list, setList] = useState([...arr]);
  // const [showX, setShowX] = useState([]);

  // const handleX = (eleToRomove) => {
  //   console.log(`handleX ${eleToRomove}`);
  //   setList(list.filter((el, index) => eleToRomove !== el));
  //   if (showX.includes(eleToRomove)) {
  //     setShowX(showX.filter((el, index) => eleToRomove !== el));
  //   }
  // };

  // const handleClick = (indexT) => {
  //   console.log(`handleClick ${indexT}`);
  //   if (showX.includes(indexT)) {
  //     setShowX(showX.filter((el, index) => indexT !== el));
  //   } else {
  //     setShowX([indexT, ...showX]);
  //   }

  //   console.log(showX);
  // };

  return (
    <div>
      {/* <ul>
        {list.map((ele, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                value={ele}
                onChange={() => handleClick(ele)}
              />
              {ele}
              {/* {console.log(index)} */}
      {/* 
              {showX.includes(ele) ? (
                <button onClick={() => handleX(ele)}>X</button>
              ) : null}
            </li>
          );
        })}
      </ul>
      <Counter /> */}{" "}
      */
      <Provider store={store}>
        <div>
          <h1>Redux Counter Example</h1>
          <Counter />
        </div>
      </Provider>
    </div>
  );
}

export default App;
