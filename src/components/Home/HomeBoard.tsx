import { BiColorFill } from "react-icons/bi";
import { StyledBoard } from "../styles/Home.styled";

interface Props {
  color: string;
}

const HomeBoard = ({ color }: Props) => {
  return (
    <StyledBoard color={color}>
      <button>
        <BiColorFill />
      </button>
      <h2>Title</h2>
    </StyledBoard>
  );
};

export default HomeBoard;
