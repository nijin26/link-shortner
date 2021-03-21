import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo_sample.png";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.image}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={styles.NavLinks}>
        <NavLink to="/" exact activeClassName={styles.active}>
          Create
        </NavLink>
        <NavLink to="/about" exact activeClassName={styles.active}>
          About
        </NavLink>
        <NavLink to="/auth" exact activeClassName={styles.active}>
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
