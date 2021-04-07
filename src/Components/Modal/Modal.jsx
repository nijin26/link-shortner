import React from "react";

import { AppModal, BackDrop } from "../../styles/components/Modal";

const Modal = ({ show, close, children }) => {
  return (
    <>
      {show && <BackDrop onClick={close}></BackDrop>}
      <AppModal
        style={{
          transform: show ? "translateY(-10vh)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </AppModal>
    </>
  );
};

export default Modal;
