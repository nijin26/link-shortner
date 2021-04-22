import React from "react";

import { FaGoogle, FaGithub, FaTwitter } from "react-icons/all";
import authImage from "../../assets/auth.png";

import { Container, Social, Form, Button } from "../../styles/pages/Auth";

const Auth = () => {
  return (
    <Container>
      <img src={authImage} alt="logo" />
      <p>SignUp With Social</p>
      <Social>
        <FaGoogle size={28} />
        <FaTwitter size={28} />
        <FaGithub size={28} />
      </Social>
      <Form onSubmit={() => console.log("Submited")}>
        <input type="text" name="username" placeholder="Name" />
        <input type="mai" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="confirm" placeholder="Confirm Password" />
        <Button type="submit">Sign Up</Button>
        <p>
          Already a Member ? <b>Login</b>{" "}
        </p>
      </Form>
    </Container>
  );
};

export default Auth;
