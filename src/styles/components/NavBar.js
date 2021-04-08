import styled from "styled-components";

export const AppNavBar = styled.nav`
  background: dodgerblue;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.div`
  margin-left: 30px;
  height: 100px;
  display: flex;
  align-items: center;

  & > img {
    width: 80px;
  }
`;

export const NavLinks = styled.div`
  width: 200px;
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;

  & > a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
