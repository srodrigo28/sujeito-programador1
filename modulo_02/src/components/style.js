import styled from "styled-components"

export const Header = styled.nav`
  width: 100%;
  height: 70px;
  background-color: brown;


  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button.attrs(props => ({ type: props.type || 'button' }))`
  margin-top: 5px;
  padding: 10px;
  font-size: ${ props => `${props.tamanho}px` };
  color: ${ props => props.cor || "BF4F74" };

  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover{
    filter: brightness(.7)
  }
`

export const Nav = styled.ul`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        list-style: none;
        margin: 0 10px;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
        color: white;
        cursor: pointer;
    }
`