import { useState } from "react";
import { hexToHSL } from "../util/utils";

const ColorConverter = () => {
  const [hex, setHex] = useState("");
  const hsl = hexToHSL(hex);

  return (
    <div className="mt-8 text-white">
      <div className="mb-2">Hex To HSL</div>
      <div className="p-4 border border-neutral-800 rounded text-sm">
        <input
          onChange={(e) => setHex(e.target.value)}
          type="text"
          value={hex}
          placeholder="eg. #171717"
          className="bg-neutral-800 border-0 border p-1.5 px-2 rounded placeholder:text-neutral-500"
        />
        <div className="mt-2">
          hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
        </div>
      </div>
    </div>
  );
};

export default ColorConverter;
