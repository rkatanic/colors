import { useState } from "react";
import { convertHSLToHex } from "../util/utils";
import ColorCopy from "./ColorCopy";

const HSLToHex = (): JSX.Element => {
  const [{ h, s, l }, setHsl] = useState({ h: 0, s: 0, l: 0 });

  return (
    <div className="flex-1 bg-gray-900 text-gray-200 lg:mt-4">
      <div className="border-2 border-gray-800">
        <div className="border-b-2 border-gray-800 p-4 text-lg font-medium tracking-wide text-gray-200">
          HSL To Hex
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-start gap-2">
            <input
              type="number"
              min={0}
              max={360}
              value={h}
              className="h-10 border-2 border-gray-800 bg-gray-800/20 p-2 outline-0 placeholder:text-gray-400 focus:border-gray-400"
              onChange={(e) =>
                setHsl((prevState) => ({ ...prevState, h: +e.target.value }))
              }
            />
            <input
              type="number"
              min={0}
              max={100}
              value={s}
              className="h-10 border-2 border-gray-800 bg-gray-800/20 p-2 outline-0 placeholder:text-gray-400 focus:border-gray-400"
              onChange={(e) =>
                setHsl((prevState) => ({ ...prevState, s: +e.target.value }))
              }
            />
            <input
              type="number"
              min={0}
              max={100}
              value={l}
              className="h-10 border-2 border-gray-800 bg-gray-800/20 p-2 outline-0 placeholder:text-gray-400 focus:border-gray-400"
              onChange={(e) =>
                setHsl((prevState) => ({ ...prevState, l: +e.target.value }))
              }
            />
          </div>
          <ColorCopy color={convertHSLToHex(h, s, l)} />
        </div>
      </div>
    </div>
  );
};

export default HSLToHex;
