import { AiOutlinePlus } from "react-icons/ai";
import ListItem from "./ListItem";
import { StyledList, StyledAddItem } from "../styles/Board.styled";

const List = () => {
  return (
    <StyledList>
      <h3>List Title</h3>
      <ListItem />
      <StyledAddItem>
        <span>
          <AiOutlinePlus />
        </span>
        Add a Card
      </StyledAddItem>
    </StyledList>
  );
};

export default List;
