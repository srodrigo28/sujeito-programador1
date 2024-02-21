import styled from "styled-components"

export const Header = styled.nav`
  width: 100%;
  height: 70px;
  background-color: brown;


  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Nav = styled.ul`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
      color: white;
      padding: 10px;
      margin: 0 10px;
      font-size: 20px;
      
      cursor: pointer;
      font-weight: bold;
      text-decoration: none;
    }
`