import { Link } from "react-router-dom";
import { StyledNav, AuthButton } from "./styles/Nav.styled";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/">Ductive Boards</Link>
      </h1>
      <div>
        <p>Logged User</p>
        <AuthButton>Log in</AuthButton>
      </div>
    </StyledNav>
  );
};

export default Nav;
