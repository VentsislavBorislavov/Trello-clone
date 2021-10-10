import { BiColorFill } from "react-icons/bi";
import { StyledBoard, StyledTitleInput } from "../styles/Home.styled";

interface Props {
  color: string;
}

const HomeBoard = ({ color }: Props) => {
  return (
    <StyledBoard color={color}>
      <h2>Board Title</h2>
    </StyledBoard>
  );
};

export default HomeBoard;
