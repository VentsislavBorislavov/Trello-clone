import { Link } from "react-router-dom";
import { StyledRegisterText } from "../styles/AuthPage.styled";
import RegistrationForm from "./RegistrationForm";

const Register = () => {
  return (
    <>
      <h2>Create account</h2>
      <RegistrationForm />
      <StyledRegisterText>
        You have an account? <Link to="/#login">Log in</Link>
      </StyledRegisterText>
    </>
  );
};

export default Register;
