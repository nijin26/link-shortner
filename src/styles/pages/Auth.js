import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: 30px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 1px 1px 12px #ccc;
  flex: 1 1;
  border-radius: 12px;
  font-size: 1.8rem;

  & > img {
    width: 80%;
  }

  @media (min-width: 600px) {
    width: 500px;

    & > img {
      width: 350px;
    }
  }
`;

export const Social = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
  flex: 1 1;
  height: 30px;
`;

export const Form = styled.form`
  width: 80%;
  margin-top: 20px;
  margin-bottom: 25px;
  align-self: center;

  & > input {
    width: 100%;
    padding: 8px;
    margin: 10px auto;
    font-size: 16px;
    border-radius: 8px;
    outline: none;
    border: none;
    box-shadow: 0.5px 1px 8px #ccc;
  }
`;

export const Button = styled.form`
  width: 50%;
  margin: 30px 25%;
  padding: 8px;
  border-radius: 8px;
  outline: none;
  border: none;
  box-shadow: 0.5px 1px 8px #ccc;
`;
