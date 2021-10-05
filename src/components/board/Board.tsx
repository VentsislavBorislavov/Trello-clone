import React from "react";
import List from "./List";
import { AiOutlinePlus } from "react-icons/ai";
import { StyledBoard, StyledAddList } from "../styles/Board.styled";
import BoardLists from "./BoardLists";

const Board = () => {
  return (
    <StyledBoard>
      <h1>Board Name</h1>
      <BoardLists />
    </StyledBoard>
  );
};

export default Board;
