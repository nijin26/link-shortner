import styled from "styled-components";

export const Title = styled.h1`
  font-size: 14px;
  text-align: center;
  color: ${(props) => (props.white ? "white" : "dodgerblue")};
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: orangered;
`;
