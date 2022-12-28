import { useState } from "react";
import { hexToHSL } from "../util/utils";
import ColorCopy from "./ColorCopy";

const HexToHslConverter = () => {
  const [hex, setHex] = useState("");
  const hsl = hexToHSL(hex);

  return (
    <div className="flex-1 bg-gray-900 text-gray-200">
      <div className="mb-1 border-2  border-gray-800 text-sm">
        <div className="border-b-2 border-gray-800 p-4 text-lg font-medium tracking-wide text-gray-200">
          Hex To HSL
        </div>
        <div className="p-4">
          <input
            onChange={(e) => setHex(e.target.value)}
            type="text"
            value={hex}
            placeholder="eg. #171717"
            className="mb-2 w-full border-2 border-gray-800 bg-gray-800/20 p-2 outline-0 placeholder:text-gray-400 focus:border-gray-400"
          />
          <ColorCopy color={`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`} />
        </div>
      </div>
    </div>
  );
};

export default HexToHslConverter;
