import React from "react";

import { FaGoogle, FaGithub, FaTwitter } from "react-icons/all";
import authImage from "../../assets/auth.png";

import styles from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={styles.container}>
      <img src={authImage} alt="logo" />
      <p>Login With Social</p>
      <div className={styles.social}>
        <FaGoogle size={28} />
        <FaTwitter size={28} />
        <FaGithub size={28} />
      </div>
      <form className={styles.form}>
        <label htmlFor="name">Username:</label>
        <input type="text" name="username" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="mai" name="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="confirm">Confirm Password:</label>
        <input type="password" name="confirm" id="confirm" />
        <button type="submit"> Sign Up </button>
      </form>
    </div>
  );
};

export default Auth;
