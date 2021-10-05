import { useState } from "react";
import withInputPlaceholder from "../hocs/withInputPlaceholder";
import { StyledPasswordInput, StyledInput } from "../styles/AuthPage.styled";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

interface Props {
  value: string;
  movePlaceholder: boolean;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  placeholder: string;
  placeholderStyle: {};
}

const PasswordInput = ({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  placeholderStyle,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <StyledPasswordInput>
      <span style={placeholderStyle}>{placeholder}</span>
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
