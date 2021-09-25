import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    padding: 0 20px;
    h1{
        margin: 0;
        font-size: 18px;

        a{
            color: black;
            text-decoration: none;
        }
    }

    & > div{
        display: flex;
        align-items: center;
        p{
            margin-right: 12px;
        }
    }
    
`

export const AuthButton = styled(Link)`
  font-size: 16px;
  padding: 4px 14px;
  background-color: #C4C4C4;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover{
      filter: brightness(1.1);
  }
`;
