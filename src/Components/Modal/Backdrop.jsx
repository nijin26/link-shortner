import React from "react";

import styles from "./Modal.module.css";

export const Backdrop = ({ show, clicked }) => {
  return show && <div className={styles.Backdrop} onClick={clicked}></div>;
};
