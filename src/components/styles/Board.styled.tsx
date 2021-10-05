import styled from "styled-components";

export const StyledBoard = styled.div`
  width: 96%;
  margin: auto;
`;

export const StyledBoardLists = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledList = styled.div`
  width: 270px;
  background-color: #ebecf0;
  padding: 10px;
  display: inline-block;
  margin-right: 20px;

  & > h3 {
    margin: 0;
    margin-bottom: 20px;
  }
`;

export const StyledListItem = styled.div`
  background-color: white;
  margin-bottom: 10px;
  h4 {
    padding: 12px 10px;
    font-size: 14px;
    margin: 0;
  }
`;

export const StyledAddButton = styled.button`
  border: none;
  display: flex;
  justify-items: center;
  font-size: 14px;
  cursor: pointer;
  padding: 6px 6px;
  text-align: left;
  font-weight: 500;
`;

export const StyledAddItem = styled(StyledAddButton)`
  background-color: transparent;
  width: 100%;

  span {
    display: inline-block;
    font-size: 16px;
    margin-right: 6px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

// TODO change the style of this button when the theme system is done
export const StyledAddList = styled(StyledAddButton)`
  display: inline-block;
`;
