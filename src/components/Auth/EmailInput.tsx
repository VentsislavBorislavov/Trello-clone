import { StyledInput, StyledEmail } from "../styles/AuthPage.styled";
import { CSSProperties } from "styled-components";
import withInputPlaceholder from "../hocs/withInputPlaceholder";

interface Props {
  value: string;
  movePlaceholder: boolean;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  placeholder: string;
}

const EmailInput = ({
  value,
  onChange,
  onFocus,
  onBlur,
  movePlaceholder,
  placeholder,
}: Props) => {
  return (
    <StyledEmail>
      <span style={movePlaceholder ? spanStyle : {}}>{placeholder}</span>
      <StyledInput
        onFocus={onFocus}
        onBlur={onBlur}
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </StyledEmail>
  );
};

export const spanStyle: CSSProperties = {
  top: 2,
  fontSize: 14,
  transform: "translateY(0)",
};

export default withInputPlaceholder(EmailInput);
