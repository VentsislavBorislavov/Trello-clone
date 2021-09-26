import styled from "styled-components";

export const CreateButton = styled.button`
  background: transparent;
  border: none;
  font-size: 120px;
  display: flex;
  place-content: center;
  padding: 0px;
  box-shadow: 0px 0px 0px 5px black;
  border-radius: 30px;
  line-height: 0;
  cursor: pointer;
  div {
    transition: all 100ms ease-in;
  }
  &:hover > div {
    transform: rotate(90deg);
  }
`;

export const HomeStyled = styled.div`
  width: 90%;
  min-height: calc(100vh - 56px);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBoardsContainer = styled.div`
  flex-basis: 80%;
  margin-left: 40px;
  display: flex;
  flex-wrap: wrap;
`;
export const StyledBoard = styled.div`
  width: 272px;
  height: 140px;
  background-color: ${({ color }) => color};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;

  button {
    position: absolute;
    top: 6px;
    left: 6px;
    padding: 2px;
    line-height: 0;
    font-size: 1.6em;
    color: white;
    background-color: #0000001c;
    cursor: pointer;
    border: none;
    border-radius: 50%;

    &:hover {
      background-color: #0000004b;
    }
  }
`;

export const StyledTitleInput = styled.input`
  margin: 0;
  font-size: 2rem;
  color: white;
  width: 80%;
  border: none;
  background-color: transparent;
  text-align: center;
  transition: background-color 100ms ease-in;

  &:focus {
    background-color: rgba(0, 0, 0, 0.4);
    outline: 2px solid #ffffffa9;
  }
`;
