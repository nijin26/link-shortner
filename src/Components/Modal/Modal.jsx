import React from "react";

import { Backdrop } from "./Backdrop";
import styles from "./Modal.module.css";

const Modal = ({ show, close, children }) => {
  return (
    <>
      <Backdrop show={show} clicked={close} />
      <div
        className={styles.Modal}
        style={{
          transform: show ? "translateY(-10vh)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
