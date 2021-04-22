import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/AuthProvider";
import firebase from "../../utils/firebase";

import Logo from "../../assets/logo_sample.png";
import { AppNavBar, Image, NavLinks } from "../../styles/components/NavBar";

const NavBar = () => {
  const authState = useAuth();

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Signout Succesfull");
      })
      .catch((error) => {
        console.log("Signout Error");
      });
  };

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
        {!authState ? (
          <NavLink to="/auth" exact activeStyle={{ color: "white" }}>
            Sign Up
          </NavLink>
        ) : (
          <a onClick={handleLogout} style={{ color: "white" }}>
            Log Out
          </a>
        )}
      </NavLinks>
    </AppNavBar>
  );
};

export default NavBar;
