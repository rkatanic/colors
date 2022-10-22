import { useState } from "react";
import { hexToHSL } from "../util/utils";
import ColorCopy from "./ColorCopy";

const HexToHSL = () => {
  const [hex, setHex] = useState("");
  const hsl = hexToHSL(hex);

  return (
    <div className="text-white flex-1 lg:mt-8">
      <div className="mb-2">Hex To HSL</div>
      <div className="p-4 border border-neutral-800 rounded text-sm mb-1">
        <input
          onChange={(e) => setHex(e.target.value)}
          type="text"
          value={hex}
          placeholder="eg. #171717"
          className="w-full mb-2 bg-neutral-800 border-0 border p-1.5 px-2 rounded placeholder:text-neutral-500"
        />
        <ColorCopy color={`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`} />
      </div>
    </div>
  );
};

export default HexToHSL;
