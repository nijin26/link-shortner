import React from "react";

import styles from "./About.module.css";
import { Title, Wrapper } from "../../styles/pages/About";

const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <Wrapper>
          <Title>Design & Developed By Nijin Nazar</Title>
        </Wrapper>
      </div>
    </div>
  );
};

export default About;
