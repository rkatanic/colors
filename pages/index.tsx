import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Color from "../components/Color";
import ColorPicker from "../components/ColorPicker";
import ColorsExport from "../components/ColorsExport";
import HexToHSL from "../components/HexToHSL";
import HSLToHexConverter from "../components/HexToHSLConverter";
import { getRandomInt, HSLToHex } from "../util/utils";
import { FiRepeat } from "react-icons/fi";
import ColorCopy from "../components/ColorCopy";

const Home: NextPage = ({ HUE, SATURATION, LIGHTNESS }: any): JSX.Element => {
  const [hue, setHue] = useState(HUE);
  const [saturation, setSaturation] = useState(SATURATION);
  const [lightness, setLightness] = useState(LIGHTNESS);

  const [selectedColor, setSelectedColor] = useState(500);
  const [colors, setColors] = useState({
    50: {
      h: hue,
      s: Math.round(saturation - saturation * 0.0833),
      l: Math.round(lightness + lightness * 1.45),
      sDelta: -0.0833,
      lDelta: 1.45,
    },
    100: {
      h: hue,
      s: Math.round(saturation - saturation * 0.0476),
      l: Math.round(lightness + lightness * 1.25),
      sDelta: -0.0476,
      lDelta: 1.25,
    },
    200: {
      h: hue,
      s: Math.round(saturation - saturation * 0.0952),
      l: Math.round(lightness + lightness * 1),
      sDelta: -0.0952,
      lDelta: 1,
    },
    300: {
      h: hue,
      s: Math.round(saturation - saturation * 0.145),
      l: Math.round(lightness + lightness * 0.687),
      sDelta: -0.145,
      lDelta: 0.687,
    },
    400: {
      h: hue,
      s: Math.round(saturation - saturation * 0.238),
      l: Math.round(lightness + lightness * 0.3),
      sDelta: -0.238,
      lDelta: 0.3,
    },
    500: {
      h: hue,
      s: saturation,
      l: lightness,
      sDelta: 0,
      lDelta: 0,
    },
    600: {
      h: hue,
      s: Math.round(saturation + saturation * 0.119),
      l: Math.round(lightness - lightness * 0.25),
      sDelta: 0.119,
      lDelta: -0.25,
    },
    700: {
      h: hue,
      s: Math.round(saturation + saturation * 0.125),
      l: Math.round(lightness - lightness * 0.4),
      sDelta: 0.125,
      lDelta: -0.4,
    },
    800: {
      h: hue,
      s: Math.round(saturation + saturation * 0.0476),
      l: Math.round(lightness - lightness * 0.5),
      sDelta: 0.0476,
      lDelta: -0.5,
    },
    900: {
      h: hue,
      s: Math.round(saturation + saturation * 0.0238),
      l: Math.round(lightness - lightness * 0.576),
      sDelta: 0.0238,
      lDelta: -0.576,
    },
  } as any);
  const setColor = (color: any): void => {
    setColors((prevState: any) => ({
      ...prevState,
      [selectedColor]: { ...prevState[selectedColor], ...color },
    }));
  };

  const selectColor = (colorNumber: number): void => {
    setSelectedColor(colorNumber);
  };

  const setNewHue = (h: number): void => {
    setHue(h);
    setColors((prevState: any) =>
      Object.keys(prevState)
        .map((colorKey) => ({
          [colorKey]: {
            ...colors[colorKey],
            h,
            s: Math.round(saturation + saturation * colors[colorKey].sDelta),
            l: Math.round(lightness + lightness * colors[colorKey].lDelta),
          },
        }))
        .reduce((acc, currentColor) => ({ ...acc, ...currentColor }), {})
    );
  };

  const setNewSaturation = (s: number): void => {
    setSaturation(s);
    setColors((prevState: any) =>
      Object.keys(prevState)
        .map((colorKey) => ({
          [colorKey]: {
            ...colors[colorKey],
            h: hue,
            s: Math.round(s + s * colors[colorKey].sDelta),
            l: Math.round(lightness + lightness * colors[colorKey].lDelta),
          },
        }))
        .reduce((acc, currentColor) => ({ ...acc, ...currentColor }), {})
    );
  };

  const setNewLightness = (l: number): void => {
    setLightness(l);
    setColors((prevState: any) =>
      Object.keys(prevState)
        .map((colorKey) => ({
          [colorKey]: {
            ...colors[colorKey],
            h: hue,
            s: Math.round(saturation + saturation * colors[colorKey].sDelta),
            l: Math.round(l + l * colors[colorKey].lDelta),
          },
        }))
        .reduce((acc, currentColor) => ({ ...acc, ...currentColor }), {})
    );
  };

  const setRandomHue = (): void => {
    const hue = getRandomInt(0, 361);
    const saturation = getRandomInt(0, 89);
    const lightness = getRandomInt(10, 40);

    setHue(hue);
    setSaturation(saturation);
    setLightness(lightness);

    setColors((prevState: any) =>
      Object.keys(prevState)
        .map((colorKey) => ({
          [colorKey]: {
            ...colors[colorKey],
            h: hue,
            s: Math.round(saturation + saturation * colors[colorKey].sDelta),
            l: Math.round(lightness + lightness * colors[colorKey].lDelta),
          },
        }))
        .reduce((acc, currentColor) => ({ ...acc, ...currentColor }), {})
    );
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex p-4">
      <div className="m-auto flex flex-col max-w-6xl w-full">
        <div className="flex flex-col gap-4 justify-between w-full mb-4 flex-wrap lg:flex-row">
          <ColorPicker
            selectedColor={selectedColor}
            color={colors[selectedColor]}
            setColor={setColor}
          />
          <div className="text-white flex gap-4 items-end flex-1">
            <div className="w-full">
              <div className="mb-2">Color Palette</div>
              <div className="flex gap-4 items-end border border-neutral-800 rounded p-4">
                <div className="text-sm w-full">
                  <div className="mb-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">H</span>
                      {hue}
                    </div>
                    <input
                      className="w-full"
                      type="range"
                      min={0}
                      max={360}
                      value={hue}
                      onChange={(e) => setNewHue(+e.target.value)}
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">S</span> {saturation}
                    </div>
                    <input
                      className="w-full"
                      type="range"
                      min={0}
                      max={100}
                      value={saturation}
                      onChange={(e) => setNewSaturation(+e.target.value)}
                    />
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">L</span> {lightness}
                    </div>
                    <input
                      className="w-full"
                      type="range"
                      min={0}
                      max={100}
                      value={lightness}
                      onChange={(e) => setNewLightness(+e.target.value)}
                    />
                  </div>
                </div>
                <div className="whitespace-nowrap w-full">
                  <button
                    className="flex items-center justify-center gap-2 text-sm w-full mb-4 bg-neutral-700 hover:bg-neutral-700/70 p-2 rounded shadow-sm px-4"
                    type="button"
                    onClick={setRandomHue}
                  >
                    <FiRepeat />
                    <span className="text-white font-medium">
                      Random Palete
                    </span>
                  </button>
                  <div className="flex flex-col gap-1">
                    <ColorCopy
                      color={`hsl(${hue}, ${saturation}%, ${lightness}%)`}
                    />
                    <ColorCopy color={HSLToHex(hue, saturation, lightness)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:flex-row">
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
        <div className="flex flex-col items-baseline gap-4 w-full lg:flex-row">
          <ColorsExport colors={colors} />
          <div className="w-full flex gap-4 items-baseline flex-wrap lg:block lg:w-auto">
            <HexToHSL />
            <HSLToHexConverter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getInitialProps = (): {
  HUE: number;
  SATURATION: number;
  LIGHTNESS: number;
} => {
  const HUE = getRandomInt(0, 361);
  const SATURATION = getRandomInt(0, 89);
  const LIGHTNESS = getRandomInt(10, 41);
  return { HUE, SATURATION, LIGHTNESS };
};
