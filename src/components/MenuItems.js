import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function MenuItems ({ items }) {

    // state variable and updater to toggle the dropdown buttons state on click
    const [dropdown, setDropdown] = useState(false); 
    let ref = useRef(); /** access the DOM elements of the dropdown by passing a reference object to the target node */

    /** Check if a dropdown is open then check if the DOM node being clicked is outside of the dropdown. then close the dropdown. */
    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);

       /** invoked when the mouse pointer moves onto a menu item, opening the dropdown. */
       const onMouseEnter = () => {
            setDropdown(true);
       }; 


       /** Called when mouse leaves menu item */
       const onMouseLeave = () => {
            setDropdown(false); 
       };

       const closeDropdown = () => {
        dropdown && setDropdown(false); 
       }; 
    
  return (
    <li 
    className="menu-items" 
    ref={ref}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={closeDropdown}>
      {items.submenu ? (
        <>
          <button 
            type="button" 
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)} // dynamically add value to aria-expanded to indicate if dropdown box is expanded or collapsed. 
           >
            {items.title}{" "}
          </button>
          <Dropdown 
            submenus={items.submenu}
            dropdown={dropdown}/> 
        </>
      ) : (
        <Link href={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;