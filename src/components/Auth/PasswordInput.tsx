import { useState } from "react";
import withInputPlaceholder from "../hocs/withInputPlaceholder";
import { StyledPasswordInput, StyledInput } from "../styles/AuthPage.styled";
import { spanStyle } from "./EmailInput";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

interface Props {
  value: string;
  movePlaceholder: boolean;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const PasswordInput = ({
  value,
  onChange,
  onFocus,
  onBlur,
  movePlaceholder,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledPasswordInput>
      <span style={movePlaceholder ? spanStyle : {}}>Password</span>
      <StyledInput
        onFocus={onFocus}
        onBlur={onBlur}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      )}
    </StyledPasswordInput>
  );
};

export default withInputPlaceholder(PasswordInput);
