import styled from "styled-components";

export const AppModal = styled.div`
  padding: 16px;
  width: 70%;
  position: fixed;
  top: 30%;
  left: 15%;
  z-index: 500;
  background-color: whitesmoke;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  box-sizing: border-box;
  transition: all 0.7s ease-out;
  border-radius: 10px;
  @media (min-width: 600px) {
    .Modal {
      width: 500px;
      left: calc(50% - 250px);
    }
  }
`;

export const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
