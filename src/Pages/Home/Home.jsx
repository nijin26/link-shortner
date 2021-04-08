import React, { useState } from "react";
import axios from "axios";

import QRCodeGen from "../../Components/QRCodeGen/QRCodeGen";
import Share from "../../Components/Share/Share";
import Modal from "../../Components/Modal/Modal";
import Spinner from "../../Components/Spinner/Spinner";

import styles from "./Home.module.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const api = "https://secret-castle-86507.herokuapp.com/api/v1/shorten_url";

  const onShorten = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(api, { user_url: url })
      .then((res) => {
        setResult(res.data.data.shortened_url);
        setIsShowing(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
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
          {isLoading ? <Spinner /> : "Shorten"}
        </button>
      </form>
      <Modal show={isShowing} close={closeModalHandler}>
        <div className={styles.resultModal}>
          <QRCodeGen target={result} />
          <a href={`http://${result}`} target="_blank">
            {result}
          </a>
          <Share target={result} />
        </div>
      </Modal>
    </div>
  );
};

export default Home;
