import React from "react";
import { GREEN, RED, BLUE } from "../../constants/colors";
import { StyledColorPicker, StyledColorButton } from "../styles/Home.styled";

interface Props {
  changeColor(color: string): void;
  selectedColor: string;
}

const colors = [GREEN, RED, BLUE];

const BoardColorPicker = ({ changeColor, selectedColor }: Props) => {
  return (
    <StyledColorPicker>
      {colors.map((col) => (
        <StyledColorButton
          color={col}
          key={col}
          isSelected={col === selectedColor}
          onClick={() => changeColor(col)}
        ></StyledColorButton>
      ))}
    </StyledColorPicker>
  );
};

export default BoardColorPicker;
