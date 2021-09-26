import { BiColorFill } from "react-icons/bi";
import { StyledBoard, StyledTitleInput } from "../styles/Home.styled";
import { useState } from "react";

interface Props {
  color: string;
}

const HomeBoard = ({ color }: Props) => {
  const [boardTitle, setBoardTitle] = useState("Title");

  return (
    <StyledBoard color={color}>
      <button>
        <BiColorFill />
      </button>
      <StyledTitleInput
        type="text"
        value={boardTitle}
        onChange={(e) => setBoardTitle(e.target.value)}
      />
    </StyledBoard>
  );
};

export default HomeBoard;
