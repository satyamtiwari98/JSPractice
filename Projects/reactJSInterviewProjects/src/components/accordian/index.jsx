import React, { useState } from "react";
import data from "./data";
import "./styles.css";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  //   const [toggle, setToggle] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    // if (toggle == true) {
    //   setSelected(null);
    //   setToggle(null);
    // } else {
    setSelected(id);
    // setToggle(true);
    // }
  };

  const handleMultiSelection = (id) => {
    let cpyMultiple = [...multiple];
    const findindexOfCurrentId = cpyMultiple.indexOf(id);
    console.log(findindexOfCurrentId);
    findindexOfCurrentId
      ? cpyMultiple.push(id)
      : cpyMultiple.splice(findindexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  };
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
