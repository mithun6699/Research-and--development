import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#f15B2A" };
  return (
    <>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/python" activeStyle={activeStyle}>
        Python
      </NavLink>
      {" | "}
      <NavLink to="/js" activeStyle={activeStyle}>
        JavaScript
      </NavLink>
      {" | "}
      <NavLink to="/react" activeStyle={activeStyle}>
        ReactJs
      </NavLink>
      {" | "}
      <NavLink to="/ml" activeStyle={activeStyle}>
        ML
      </NavLink>
    </>
  );
};

export default Header;
