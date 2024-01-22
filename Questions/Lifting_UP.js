// Lifting state up in React refers to the practice of managing state at a higher level in the component tree and
//  passing it down as props to child components. This is done to share state and behavior between components that need to be synchronized or to maintain a single source of truth for the state.

// In React, each component can have its own local state, but there are situations where multiple components need to share the same state or be aware of changes in a common state. In such cases, lifting state up is a useful pattern.

// Here's a basic example to illustrate the concept:

import React, { useState } from "react";

// Child Component
const ChildComponent = ({ value, onInputChange }) => {
  return (
    <div>
      <label>Child Component:</label>
      <input type="text" value={value} onChange={onInputChange} />
    </div>
  );
};

// Parent Component
const ParentComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>Parent Component:</label>
      <ChildComponent value={inputValue} onInputChange={handleInputChange} />
    </div>
  );
};

export default ParentComponent;

// In this example, the ParentComponent maintains the state (inputValue) and passes it down to the ChildComponent as a prop along with a callback function (handleInputChange) to update the state. This way, the state is lifted from the child to the parent, and changes in the input field of the child component trigger updates in the parent component's state.

// Lifting state up helps in creating more maintainable and predictable code, as the state is managed in a centralized location, and changes are propagated down to the relevant components through props.
