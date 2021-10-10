import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  StyledTitleInput,
  StyledBoard,
  StyledConfirmButton,
} from "../styles/Home.styled";
import * as color from "../../constants/colors";
import BoardColorPicker from "./BoardColorPicker";

const NewBoard = () => {
  const [boardTitle, setBoardTitle] = useState<string>("Title");
  const [boardColor, setBoardColor] = useState<string>(color.GREEN);

  const changeColor = (color: string) => {
    setBoardColor(color);
  };

  return (
    <StyledBoard color={boardColor}>
      <BoardColorPicker changeColor={changeColor} selectedColor={boardColor} />
      <StyledTitleInput
        type="text"
        value={boardTitle}
        onChange={(e) => setBoardTitle(e.target.value)}
      />
      <StyledConfirmButton>
        <AiOutlineCheckCircle />
      </StyledConfirmButton>
    </StyledBoard>
  );
};

export default NewBoard;
