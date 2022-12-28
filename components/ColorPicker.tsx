import { convertHexToHSL, convertHSLToHex } from "../util/utils";
import ColorCopy from "./ColorCopy";

interface Props {
  color: { h: number; s: number; l: number };
  setColor: ({}: any) => void;
  selectedColor: number;
}

const ColorPicker = ({
  color: { h, s, l },
  setColor,
  selectedColor,
}: Props): JSX.Element => (
  <div className="flex-1 bg-gray-900 text-gray-200">
    <div className="fxlex items-end gap-4  border-2 border-gray-800">
      <div className="border-b-2 border-gray-800 p-4 text-lg font-medium tracking-wide text-gray-200">
        Color Shade - {selectedColor}
      </div>
      <div className="flex gap-4 p-4">
        <div className="flex w-full flex-col text-sm">
          <div className="mb-2">
            <div className="flex justify-between">
              <span className="text-gray-500">H</span> {h}
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
              <span className="text-gray-500">S</span>
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
              <span className="text-gray-500">L</span> {l}
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
        <div className="flex w-full flex-col items-start justify-start gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs text-gray-500">{selectedColor}</span>
            <input
              id="color-picker"
              className="sr-only"
              type="color"
              value={convertHSLToHex(h, s, l)}
              onChange={(e) => setColor(convertHexToHSL(e.target.value))}
            />
            <label
              htmlFor="color-picker"
              className="block h-24 w-24"
              style={{ backgroundColor: `hsl(${h},${s}%,${l}%)` }}
            ></label>
          </div>
          <div className="flex flex-col gap-1">
            <ColorCopy color={`hsl(${h}, ${s}%, ${l}%)`} />
            <ColorCopy color={convertHSLToHex(h, s, l)} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ColorPicker;
