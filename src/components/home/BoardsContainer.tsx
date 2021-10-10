import HomeBoard from "./HomeBoard";
import { StyledBoardsContainer } from "../styles/Home.styled";
import NewBoard from "./NewBoard";
import { useContext, useState } from "react";
import { NewNoteContext } from "./Home";

const BoardsContainer = () => {
  const creatingBoard = useContext(NewNoteContext);
  return (
    <StyledBoardsContainer>
      {creatingBoard && <NewBoard />}
      <HomeBoard color="#863947" />
    </StyledBoardsContainer>
  );
};

export default BoardsContainer;
