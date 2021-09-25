import HomeBoard from "./HomeBoard";
import { StyledBoardsContainer } from "../styles/Home.styled";

const BoardsContainer = () => {
  return (
    <StyledBoardsContainer>
      <HomeBoard color="#863947" />
    </StyledBoardsContainer>
  );
};

export default BoardsContainer;
