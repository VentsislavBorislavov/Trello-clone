import { Link } from "react-router-dom";
import { GrClipboard } from "react-icons/gr";
import { StyledNav, AuthButton } from "./styles/Nav.styled";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/">
          <GrClipboard /> Ductive Boards
        </Link>
      </h1>
      <div>
        <p>Logged User</p>
        <AuthButton to={{ pathname: "/auth", hash: "#login" }}>
          Log in
        </AuthButton>
      </div>
    </StyledNav>
  );
};

export default Nav;
