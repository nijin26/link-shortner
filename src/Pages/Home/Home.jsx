import React, { useState } from "react";
import axios from "axios";

import QRCodeGen from "../../Components/QRCodeGen/QRCodeGen";
import Share from "../../Components/Share/Share";
import Modal from "../../Components/Modal/Modal";

import styles from "./Home.module.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [isShowing, setIsShowing] = useState(false);

  const api = "https://secret-castle-86507.herokuapp.com/api/v1/shorten_url";

  const onShorten = (e) => {
    e.preventDefault();
    axios
      .post(api, { user_url: url })
      .then((res) => {
        setIsShowing(true);
        setResult(res.data.data.shortened_url);
      })
      .catch((err) => console.log(err));
  };

  const closeModalHandler = () => {
    setIsShowing(false);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onShorten}>
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
        <button type="submit" disabled={url === ""}>
          Shorten
        </button>
      </form>
      <Modal show={isShowing} close={closeModalHandler}>
        <div className={styles.resultModal}>
          <QRCodeGen target={result} />
          <input type="text" value={result} />
          <Share target={result} />
        </div>
      </Modal>
    </div>
  );
};

export default Home;
