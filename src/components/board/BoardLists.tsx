import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { StyledAddList, StyledBoardLists } from "../styles/Board.styled";
import List from "./List";

const BoardLists = () => {
  return (
    <StyledBoardLists>
      <List />
      <StyledAddList>
        <AiOutlinePlus /> Add another list
      </StyledAddList>
    </StyledBoardLists>
  );
};

export default BoardLists;
