import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { StyledSubmit } from "../styles/AuthPage.styled";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form>
      <EmailInput
        placeholder="Email"
        value={email}
        onChange={(val: string) => setEmail(val)}
      />
      <PasswordInput
        placeholder="Password"
        value={password}
        onChange={(val: string) => setPassword(val)}
      />
      <StyledSubmit type="submit">Continue</StyledSubmit>
    </form>
  );
};

export default LoginForm;
