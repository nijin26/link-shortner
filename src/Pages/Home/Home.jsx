import React from "react";

import Share from "../../Components/Share/Share";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Loooong URL" />
          <button type="submit"> Shorten </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
