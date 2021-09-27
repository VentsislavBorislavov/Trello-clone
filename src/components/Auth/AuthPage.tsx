import GoogleButton from "./GoogleButton";
import { HashRouter, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import {
  StyledAuthPage,
  StyledAuth,
  StyledGoogleDiv,
  StyledRegisterText,
} from "../styles/AuthPage.styled";
import RegistrationForm from "./RegistrationForm";
import Login from "./Login";
import Register from "./Register";

const AuthPage = () => {
  return (
    <StyledAuthPage>
      <StyledAuth>
        <HashRouter hashType="noslash">
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </HashRouter>
        <StyledGoogleDiv>
          <p>or</p>
          <GoogleButton />
        </StyledGoogleDiv>
      </StyledAuth>
    </StyledAuthPage>
  );
};

export default AuthPage;
