import { StyledRegisterText } from "../styles/AuthPage.styled";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <LoginForm />
      <StyledRegisterText>
        No account? No problem! <Link to="/#register">Sign up</Link>
      </StyledRegisterText>
    </>
  );
};

export default Login;
