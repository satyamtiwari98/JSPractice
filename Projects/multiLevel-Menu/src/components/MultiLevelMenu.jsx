import { menuItems } from "./menu";
import MenuItem from "./MenuItem";

const MultiLevelMenu = () => {
  console.log(menuItems);
  return (
    <ul>
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default MultiLevelMenu;
