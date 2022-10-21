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
    <div className="text-white w-full">
      <div className="mb-2">Selected Color</div>
      <div className="flex gap-4 items-end rounded-md border border-neutral-800 p-4">
        <div className="flex flex-col text-sm w-full">
          <div className="mb-2">
            <div className="flex justify-between">
              <span className="text-neutral-500">H</span> {h}
            </div>
            <input
              className="w-full"
              onChange={(e) => setColor({ h: e.target.value, s, l })}
              type="range"
              min={0}
              max={360}
              value={h}
            />
          </div>
          <div>
            <div className="flex justify-between">
              <span className="text-neutral-500">S</span>
              {s}
            </div>
            <input
              className="w-full"
              onChange={(e) => setColor({ h, s: e.target.value, l })}
              type="range"
              min={0}
              max={100}
              value={s}
            />
          </div>
          <div className="mt-2">
            <div className="flex justify-between">
              <span className="text-neutral-500">L</span> {l}
            </div>
            <input
              className="w-full"
              onChange={(e) => setColor({ h, s, l: e.target.value })}
              type="range"
              min={0}
              max={100}
              value={l}
            />
          </div>
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
        <div className="font-mono text-neutral-300 whitespace-nowrap w-full">
          <div>
            hsl({h}, {s}%, {l}%)
          </div>
          <div>{HSLToHex(h, s, l)}</div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
