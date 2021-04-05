import styled from "styled-components";

const Footer = styled.footer`
  background: ${(props) => props.theme.secondory};
  color:${props => props.theme.fc};
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export default Footer;
