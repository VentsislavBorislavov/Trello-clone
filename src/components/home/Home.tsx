import { HiOutlinePlus } from "react-icons/hi";
import BoardsContainer from "./BoardsContainer";
import { CreateButton, HomeStyled } from "../styles/Home.styled";
import React, { useState } from "react";

export const NewNoteContext = React.createContext(false);

const Home = (props: any) => {
  const [creatingBoard, setCreatingBoard] = useState<boolean>(false);

  return (
    <NewNoteContext.Provider value={creatingBoard}>
      <HomeStyled>
        <CreateButton onClick={() => setCreatingBoard(!creatingBoard)}>
          <div>
            <HiOutlinePlus />
          </div>
        </CreateButton>

        <BoardsContainer />
      </HomeStyled>
    </NewNoteContext.Provider>
  );
};

export default Home;
