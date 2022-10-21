import { useState } from "react";
import { hexToHSL, HSLToHex } from "../util/utils";

interface Props {
  color: { h: number; s: number; l: number };
  setColor: ({}: any) => void;
  selectedColor: number;
}

const ColorPicker = ({
  color: { h, s, l },
  setColor,
  selectedColor,
}: Props) => {
  return (
    <div className="text-white flex items-end gap-4 mb-4">
      <div className="flex flex-col text-sm">
        <span> H: {h}</span>
        <input
          onChange={(e) => setColor({ h: e.target.value, s, l })}
          type="range"
          min={0}
          max={360}
          value={h}
        />
        <span> S: {s}</span>
        <input
          onChange={(e) => setColor({ h, s: e.target.value, l })}
          type="range"
          min={0}
          max={100}
          value={s}
        />
        <span>L: {l}</span>
        <input
          onChange={(e) => setColor({ h, s, l: e.target.value })}
          type="range"
          min={0}
          max={100}
          value={l}
        />
      </div>
      <div>
        <span className="text-neutral-500 text-xs">{selectedColor}</span>
        <input
          id="color-picker"
          className="sr-only"
          type="color"
          value={HSLToHex(h, s, l)}
          onChange={(e) => setColor(hexToHSL(e.target.value))}
        />
        <label
          htmlFor="color-picker"
          className="block w-24 h-24"
          style={{ backgroundColor: `hsl(${h},${s}%,${l}%)` }}
        ></label>
      </div>
    </div>
  );
};

export default ColorPicker;
