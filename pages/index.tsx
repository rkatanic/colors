import type { NextPage } from "next";
import { useState } from "react";
import Color from "../components/Color";
import ColorPicker from "../components/ColorPicker";
import HexToHSL from "../components/HexToHSL";
import HSLToHexConverter from "../components/HexToHSLConverter";

const Home: NextPage = () => {
  const [hue, setHue] = useState(164); // 0 - 360
  const [saturation, setSaturation] = useState(84); // 0 - 89
  const [lightness, setLightness] = useState(40); // 0 - 40

  const [selectedColor, setSelectedColor] = useState(500);
  const [colors, setColors] = useState({
    50: {
      h: hue,
      s: Math.round(saturation - saturation * 0.0833),
      l: Math.round(lightness + lightness * 1.45),
    },
    100: {
      h: hue,
      s: Math.round(saturation - saturation * 0.0476),
      l: Math.round(lightness + lightness * 1.25),
    },
    200: {
      h: hue,
      s: Math.round(saturation - saturation * 0.0952),
      l: Math.round(lightness + lightness * 1),
    },
    300: {
      h: hue,
      s: Math.round(saturation - saturation * 0.145),
      l: Math.round(lightness + lightness * 0.687),
    },
    400: {
      h: hue,
      s: Math.round(saturation - saturation * 0.238),
      l: Math.round(lightness + lightness * 0.3),
    },
    500: {
      h: hue,
      s: saturation,
      l: lightness,
    },
    600: {
      h: hue,
      s: Math.round(saturation + saturation * 0.119),
      l: Math.round(lightness - lightness * 0.25),
    },
    700: {
      h: hue,
      s: Math.round(saturation + saturation * 0.125),
      l: Math.round(lightness - lightness * 0.4),
    },
    800: {
      h: hue,
      s: Math.round(saturation + saturation * 0.0476),
      l: Math.round(lightness - lightness * 0.5),
    },
    900: {
      h: hue,
      s: Math.round(saturation + saturation * 0.0238),
      l: Math.round(lightness - lightness * 0.576),
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

  const setRandomHue = (): void => {
    const hue = getRandomInt(0, 361);
    const saturation = getRandomInt(0, 89);
    const lightness = getRandomInt(0, 40);

    setHue(hue);
    setLightness(lightness);

    setColors((prevState: any) =>
      Object.keys(prevState)
        .map((colorKey) => ({
          [colorKey]: { ...colors[colorKey], h: hue },
        }))
        .reduce((acc, currentColor) => ({ ...acc, ...currentColor }), {})
    );
  };

  const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex-col m-autopx-4 py-4">
      <div className="m-auto flex flex-col items-end max-w-5xl">
        <div className="flex items-baseline justify-between w-full">
          <div className="text-white border border-neutral-800 rounded p-4">
            <div>
              <div>Palette Hue: {hue}</div>
              <input
                className="w-full"
                type="range"
                min={0}
                max={360}
                value={hue}
                onChange={(e) => setNewHue(+e.target.value)}
              />
            </div>
            <button
              className="text-sm w-full mt-2 bg-neutral-700 hover:bg-neutral-700/70 p-2 rounded shadow-sm px-4"
              type="button"
              onClick={setRandomHue}
            >
              <span className="text-white font-medium">Randomize Color</span>
            </button>
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
