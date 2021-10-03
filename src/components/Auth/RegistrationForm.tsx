import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { StyledSubmit } from "../styles/AuthPage.styled";

const RegistrationForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

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
      <PasswordInput
        placeholder="Repeat Password"
        value={repeatPassword}
        onChange={(val: string) => setRepeatPassword(val)}
      />
      <StyledSubmit type="submit">Register</StyledSubmit>
    </form>
  );
};

export default RegistrationForm;
