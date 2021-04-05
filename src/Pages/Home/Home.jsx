import React, { useState } from "react";

import QRCodeGen from "../../Components/QRCodeGen/QRCodeGen";
import Share from "../../Components/Share/Share";
import Modal from "../../Components/Modal/Modal";

import styles from "./Home.module.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [isShowing, setIsShowing] = useState(false);

  const onShorten = (e) => {
    e.preventDefault();
    setIsShowing(true);
  };

  const closeModalHandler = () => {
    setIsShowing(false);
  };

  return (
    <div className={styles.container}>
      <form>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <input
          value={url}
          type="text"
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Loooong URL"
        />
        <button onClick={onShorten} disabled={url === ""}>
          Shorten
        </button>
      </form>
      <Modal show={isShowing} close={closeModalHandler}>
        <div className={styles.resultModal}>
          <QRCodeGen target={url} />
          <input type="text" value={url} />
          <Share target={url} />
        </div>
      </Modal>
    </div>
  );
};

export default Home;
