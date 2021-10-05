import { FcGoogle } from "react-icons/fc";
import { StyledGoogleButton } from "../styles/AuthPage.styled";

const GoogleButton = () => {
  return (
    <StyledGoogleButton>
      <span>
        <FcGoogle />
      </span>
      Continue With Google
    </StyledGoogleButton>
  );
};

export default GoogleButton;
