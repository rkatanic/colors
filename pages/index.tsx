import type { NextPage } from "next";
import { useState } from "react";
import Color from "../components/Color";
import ColorPicker from "../components/ColorPicker";
import HexToHSL from "../components/HexToHSL";
import HSLToHexConverter from "../components/HexToHSLConverter";
import { HSLToHex } from "../util/utils";

const Home: NextPage = () => {
  const [hue, setHue] = useState(214);
  const [selectedColor, setSelectedColor] = useState(500);
  const [colors, setColors] = useState({
    50: {
      h: hue,
      s: 42,
      l: 88,
    },
    100: {
      h: hue,
      s: 42,
      l: 82,
    },
    200: {
      h: hue,
      s: 60,
      l: 76,
    },
    300: {
      h: hue,
      s: 70,
      l: 64,
    },
    400: {
      h: hue,
      s: 70,
      l: 52,
    },
    500: {
      h: hue,
      s: 70,
      l: 45,
    },
    600: {
      h: hue,
      s: 70,
      l: 34,
    },
    700: {
      h: hue,
      s: 69,
      l: 22,
    },
    800: {
      h: hue,
      s: 66,
      l: 12,
    },
    900: {
      h: hue,
      s: 56,
      l: 8,
    },
  } as any);
  const setColor = (color: any): void => {
    setColors((prevState: any) => ({ ...prevState, [selectedColor]: color }));
  };

  const selectColor = (colorNumber: number): void => {
    setSelectedColor(colorNumber);
  };

  const setNewHue = (h: number): void => {
    setHue(h);
    setColors((prevState: any) =>
      Object.keys(prevState)
        .map((colorKey) => ({ [colorKey]: { ...colors[colorKey], h } }))
        .reduce((acc, currentColor) => ({ ...acc, ...currentColor }), {})
    );
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex-col m-auto px-4 py-4">
      <div className="m-auto flex flex-col items-end max-w-5xl">
        <div className="flex items-baseline justify-between w-full">
          <div className="text-white">
            <div>H: {hue}</div>
            <input
              type="range"
              min={0}
              max={360}
              value={hue}
              onChange={(e) => setNewHue(+e.target.value)}
            />
          </div>
          <ColorPicker
            selectedColor={selectedColor}
            color={colors[selectedColor]}
            setColor={setColor}
          />
        </div>

        <div className="flex">
          <Color
            selectedColor={selectedColor}
            selectColor={selectColor}
            shade={50}
            color={colors[50]}
          />
          <Color
            selectedColor={selectedColor}
            selectColor={selectColor}
            shade={100}
            color={colors[100]}
          />
          <Color
            selectedColor={selectedColor}
            selectColor={selectColor}
            shade={200}
            color={colors[200]}
          />
          <Color
            selectedColor={selectedColor}
            selectColor={selectColor}
            shade={300}
            color={colors[300]}
          />
          <Color
            selectedColor={selectedColor}
            selectColor={selectColor}
            shade={400}
            color={colors[400]}
          />
          <Color
            selectedColor={selectedColor}
            selectColor={selectColor}
            shade={500}
            color={colors[500]}
          />
          <Color
            selectedColor={selectedColor}
            selectColor={selectColor}
            shade={600}
            color={colors[600]}
          />
          <Color
            selectedColor={selectedColor}
            selectColor={selectColor}
            shade={700}
            color={colors[700]}
          />
          <Color
            selectedColor={selectedColor}
            selectColor={selectColor}
            shade={800}
            color={colors[800]}
          />
          <Color
            selectedColor={selectedColor}
            selectColor={selectColor}
            shade={900}
            color={colors[900]}
          />
        </div>
        <HexToHSL />
        <HSLToHexConverter />
      </div>
    </div>
  );
};

export default Home;
