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
  placeholderStyle: {};
}

const EmailInput = ({
  value,
  onChange,
  onFocus,
  onBlur,
  movePlaceholder,
  placeholderStyle,
  placeholder,
}: Props) => {
  return (
    <StyledEmail>
      <span style={placeholderStyle}>{placeholder}</span>
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

export default withInputPlaceholder(EmailInput);
