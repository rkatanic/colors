import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Color from "../components/Color";
import ColorPicker from "../components/ColorPicker";
import ColorsExport from "../components/ColorsExport";
import { getRandomInt, HSLToHex } from "../util/utils";
import { FaRandom } from "react-icons/fa";
import ColorCopy from "../components/ColorCopy";
import HSLToHexConverter from "../components/HslToHexConverter";
import HexToHslConverter from "../components/HexToHslConverter";

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
            s:
              getNewSaturationValue(colorKey) < 100
                ? getNewSaturationValue(colorKey)
                : 100,
            l:
              getNewLightnessValue(colorKey) < 100
                ? getNewLightnessValue(colorKey)
                : 100,
          },
        }))
        .reduce((acc, currentColor) => ({ ...acc, ...currentColor }), {})
    );

    function getNewLightnessValue(colorKey: string) {
      return Math.round(lightness + lightness * colors[colorKey].lDelta);
    }

    function getNewSaturationValue(colorKey: string) {
      return Math.round(saturation + saturation * colors[colorKey].sDelta);
    }
  };

  const setNewSaturation = (s: number): void => {
    setSaturation(s);
    setColors((prevState: any) =>
      Object.keys(prevState)
        .map((colorKey) => ({
          [colorKey]: {
            ...colors[colorKey],
            h: hue,
            s:
              getNewSaturationValue(colorKey) < 100
                ? getNewSaturationValue(colorKey)
                : 100,
            l:
              getNewLightnessValue(colorKey) < 100
                ? getNewLightnessValue(colorKey)
                : 100,
          },
        }))
        .reduce((acc, currentColor) => ({ ...acc, ...currentColor }), {})
    );

    function getNewLightnessValue(colorKey: string) {
      return Math.round(lightness + lightness * colors[colorKey].lDelta);
    }

    function getNewSaturationValue(colorKey: string) {
      return Math.round(s + s * colors[colorKey].sDelta);
    }
  };

  const setNewLightness = (l: number): void => {
    setLightness(l);
    setColors((prevState: any) =>
      Object.keys(prevState)
        .map((colorKey) => ({
          [colorKey]: {
            ...colors[colorKey],
            h: hue,
            s:
              getNewSaturationValue(colorKey) < 100
                ? getNewSaturationValue(colorKey)
                : 100,
            l:
              getNewLightnessValue(colorKey) < 100
                ? getNewLightnessValue(colorKey)
                : 100,
          },
        }))
        .reduce((acc, currentColor) => ({ ...acc, ...currentColor }), {})
    );

    function getNewSaturationValue(colorKey: string) {
      return Math.round(saturation + saturation * colors[colorKey].sDelta);
    }

    function getNewLightnessValue(colorKey: string) {
      return Math.round(l + l * colors[colorKey].lDelta);
    }
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
    <div className="relative flex min-h-screen p-4">
      <div className="m-auto flex w-full max-w-6xl flex-col">
        <div className="mb-4 flex w-full flex-col flex-wrap justify-between gap-4 lg:flex-row">
          <ColorPicker
            selectedColor={selectedColor}
            color={colors[selectedColor]}
            setColor={setColor}
          />
          <div className="flex flex-1 items-end gap-4 bg-gray-900 text-gray-200">
            <div className="w-full">
              <div className="border-2 border-gray-800">
                <div className="border-b-2 border-gray-800 p-4 text-lg font-medium tracking-wide text-gray-200">
                  Color Palette
                </div>

                <div className="flex items-end gap-4 p-4">
                  <div className="w-full text-sm">
                    <div className="mb-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">H</span>
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
                        <span className="text-gray-500">S</span> {saturation}
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
                        <span className="text-gray-500">L</span> {lightness}
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
                  <div className="w-full whitespace-nowrap">
                    <button
                      className="mb-8 flex items-center justify-center gap-3 rounded-full border-2 border-gray-200 bg-gray-900 p-2 px-6 text-sm font-medium uppercase tracking-wider text-gray-200 shadow-sm hover:bg-gray-800/50"
                      type="button"
                      onClick={setRandomHue}
                    >
                      <FaRandom />
                      Randomize
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
        </div>

        <div className="flex w-full flex-col md:flex-row">
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
        <div className="mt-4 flex w-full flex-col gap-4 lg:flex-row">
          <ColorsExport colors={colors} />
          <div className="flex w-full flex-wrap items-baseline gap-4 lg:block lg:w-auto">
            <HexToHslConverter />
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
