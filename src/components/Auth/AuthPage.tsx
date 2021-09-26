import GoogleButton from "./GoogleButton";
import LoginForm from "./LoginForm";
import {
  StyledAuthPage,
  StyledAuth,
  StyledGoogleDiv,
  StyledRegisterText,
} from "../styles/AuthPage.styled";

const AuthPage = () => {
  return (
    <StyledAuthPage>
      <StyledAuth>
        <h2>Login</h2>
        <LoginForm />
        <StyledRegisterText>
          No account? No problem! <span>Sign up</span>
        </StyledRegisterText>
        <StyledGoogleDiv>
          <p>or</p>
          <GoogleButton />
        </StyledGoogleDiv>
      </StyledAuth>
    </StyledAuthPage>
  );
};

export default AuthPage;
