import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.445);
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    padding: 10px;
    border: 3px solid transparent;
    border-radius: 50px;
    background: rgb(226, 226, 3);
    color: black;
    font-weight: bold;
    transition: 0.3s ease-in;

    &:hover {
      border: 3px solid rgb(169, 180, 8);
    }
  }
`;

export const Container = styled.div`
  position: relative;
  width: max-content;
  height: max-content;
  margin-top: 20px;

  &:hover ${Overlay} {
    opacity: 1;
  }
`;
