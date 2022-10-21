import { useState } from "react";
import { HSLToHex } from "../util/utils";

const HSLToHexConverter = () => {
  const [{ h, s, l }, setHsl] = useState({ h: 0, s: 0, l: 0 });

  return (
    <div className="text-white mt-4">
      <div className="mb-2">HSL To Hex</div>
      <div className="border border-neutral-800 rounded p-4">
        <div className="flex gap-2">
          <input
            type="number"
            min={0}
            max={360}
            value={h}
            className="border-0 bg-neutral-800 rounded p-1.5 px-2 text-sm w-16"
            onChange={(e) =>
              setHsl((prevState) => ({ ...prevState, h: +e.target.value }))
            }
          />
          <input
            type="number"
            min={0}
            max={100}
            value={s}
            className="border-0 bg-neutral-800 rounded p-1.5 px-2 text-sm w-16"
            onChange={(e) =>
              setHsl((prevState) => ({ ...prevState, s: +e.target.value }))
            }
          />
          <input
            type="number"
            min={0}
            max={100}
            value={l}
            className="border-0 bg-neutral-800 rounded p-1.5 px-2 text-sm w-16"
            onChange={(e) =>
              setHsl((prevState) => ({ ...prevState, l: +e.target.value }))
            }
          />
        </div>
        <div className="mt-4 text-sm">{HSLToHex(h, s, l)}</div>
      </div>
    </div>
  );
};

export default HSLToHexConverter;