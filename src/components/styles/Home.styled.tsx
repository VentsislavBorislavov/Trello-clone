import styled from "styled-components";

interface IStyledColorButton {
  isSelected: boolean;
}

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

  h2 {
    color: white;
  }

  & + & {
    margin-left: 30px;
  }
`;

export const StyledTitleInput = styled.input`
  margin: 0;
  font-size: 1.6rem;
  color: white;
  width: 80%;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: background-color 100ms ease-in;

  &:focus {
    outline: 2px solid #ffffffa9;
  }
`;

export const StyledConfirmButton = styled.button`
  position: absolute;
  color: white;
  background-color: transparent;
  border: none;
  font-size: 32px;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  padding: 0;
  line-height: 0;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const StyledColorPicker = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: -40px;
  display: flex;
  padding: 8px 10px;
  border-radius: 20px;
`;

export const StyledColorButton = styled.button<IStyledColorButton>`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  box-shadow: ${({ isSelected }: IStyledColorButton) =>
    isSelected ? "0 0 0 2px white" : "none"};
  & + & {
    margin-left: 18px;
  }
  cursor: pointer;
`;
