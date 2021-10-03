import GoogleButton from "./GoogleButton";
import { HashRouter, Route } from "react-router-dom";
import {
  StyledAuthPage,
  StyledAuth,
  StyledGoogleDiv,
} from "../styles/AuthPage.styled";
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
