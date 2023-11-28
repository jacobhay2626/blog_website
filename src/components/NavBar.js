import { menuItemsData } from "../MenuItemsData";
import MenuItems from "./MenuItems"; 

function Navbar() {
    return (
      <nav className="desktop-nav">
        <ul className="menus">
            {menuItemsData.map((menu, index) => {
                return <MenuItems items={menu} key={index}/>
            })}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;