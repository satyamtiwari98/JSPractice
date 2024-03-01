import { useState } from "react";

const MenuItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(props.item.label);
  return (
    <li>
      <span onClick={toggleSubMenu}>{props.item.label}</span>
      {isOpen && props.item.children && (
        <ul>
          {props.item.children.map((childItem, index) => (
            <MenuItem key={index} item={childItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
