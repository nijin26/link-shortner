import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo_sample.png";
import { AppNavBar, Image, NavLinks } from "../../styles/components/NavBar";
const NavBar = () => {
  return (
    <AppNavBar>
      <Image>
        <img src={Logo} alt="Logo" />
      </Image>
      <NavLinks>
        <NavLink to="/" exact activeStyle={{ color: "white" }}>
          Create
        </NavLink>
        <NavLink to="/about" exact activeStyle={{ color: "white" }}>
          About
        </NavLink>
        <NavLink to="/auth" exact activeStyle={{ color: "white" }}>
          Login
        </NavLink>
      </NavLinks>
    </AppNavBar>
  );
};

export default NavBar;
