import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { StyledSubmit } from "../styles/AuthPage.styled";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <EmailInput value={email} onChange={(val: any) => setEmail(val)} />
      <PasswordInput
        value={password}
        onChange={(val: any) => setPassword(val)}
      />
      <StyledSubmit type="submit">Continue</StyledSubmit>
    </form>
  );
};

export default LoginForm;
