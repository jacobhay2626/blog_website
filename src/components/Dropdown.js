function Dropdown({ submenus, dropdown }) {
    return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}> {/** Use dropdown prop to dynamically add a class name when dropdown is clicked */}
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;