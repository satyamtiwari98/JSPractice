import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [toggle, setToggle] = useState(null);

  const handleSingleSelection = (id) => {
    if (toggle == true) {
      setSelected(null);
      setToggle(null);
    } else {
      setSelected(id);
      setToggle(true);
    }
  };
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data Found</div>
        )}
      </div>
      <h1>Satyam</h1>
    </div>
  );
};

export default Accordian;
