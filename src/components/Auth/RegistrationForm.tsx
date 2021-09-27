import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { StyledSubmit } from "../styles/AuthPage.styled";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <EmailInput
        placeholder="Email"
        value={email}
        onChange={(val: any) => setEmail(val)}
      />
      <PasswordInput
        placeholder="Password"
        value={password}
        onChange={(val: any) => setPassword(val)}
      />
      <PasswordInput
        placeholder="Repeat Password"
        value={password}
        onChange={(val: any) => setPassword(val)}
      />
      <StyledSubmit type="submit">Register</StyledSubmit>
    </form>
  );
};

export default RegistrationForm;
