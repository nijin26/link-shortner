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
        <input type="text" name="username" placeholder="Name" />
        <input type="mai" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="confirm" placeholder="Confirm Password" />
        <button type="submit" className={styles.btn}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Auth;
