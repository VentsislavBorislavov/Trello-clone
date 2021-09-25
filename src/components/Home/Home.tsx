import { HiOutlinePlus } from "react-icons/hi";
import BoardsContainer from "./BoardsContainer";
import { CreateButton, HomeStyled } from "../styles/Home.styled";

const Home = (props: any) => {
  return (
    <HomeStyled>
      <CreateButton>
        <div>
          <HiOutlinePlus />
        </div>
      </CreateButton>

      <BoardsContainer />
    </HomeStyled>
  );
};

export default Home;
