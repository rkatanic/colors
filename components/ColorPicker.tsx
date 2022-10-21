import { useState } from "react";

interface Props {
  color: string;
  setColor: (color: string) => void;
}

const ColorPicker = ({ color, setColor }: Props) => {
  return (
    <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
};

export default ColorPicker;
