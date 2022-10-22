import { useState } from "react";
import { HSLToHex } from "../util/utils";

interface Props {
  colors: any;
}
const TABS = [
  "HSL .json",
  "Hex .json",
  "HSL .css",
  "Hex .css",
  "HSL .scss",
  "Hex .scss",
];

const ColorsExport = ({ colors }: Props): JSX.Element => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const colorShades = Object.keys(colors).map((key) => colors[key]);

  return (
    <div className="text-white w-full">
      <div className="flex">
        {TABS.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer p-2 px-4 -mb-[1px] ${
              activeTab === tab
                ? "border border-b-neutral-900 rounded-t-md bg-neutral-900 border-neutral-800 text-white"
                : "border border-transparent text-neutral-500"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="border border-neutral-800 p-4 rounded-md rounded-tl-none">
        {activeTab === TABS[0] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-sm text-neutral-300 ">
              hsl({colorShade.h}, {colorShade.s}%, {colorShade.l}%)
            </div>
          ))}
        {activeTab === TABS[1] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-sm text-neutral-300 ">
              {HSLToHex(colorShade.h, colorShade.s, colorShade.l)}
            </div>
          ))}
        {activeTab === TABS[2] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-sm text-neutral-300 ">
              --color-{Object.keys(colors)[i]}: hsl({colorShade.h},{" "}
              {colorShade.s}%, {colorShade.l}%);
            </div>
          ))}
        {activeTab === TABS[3] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-sm text-neutral-300 ">
              --color-{Object.keys(colors)[i]}:{" "}
              {HSLToHex(colorShade.h, colorShade.s, colorShade.l)};
            </div>
          ))}
        {activeTab === TABS[4] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-sm text-neutral-300 ">
              $color-{Object.keys(colors)[i]}: hsl({colorShade.h},{" "}
              {colorShade.s}%, {colorShade.l}%);
            </div>
          ))}

        {activeTab === TABS[5] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-sm text-neutral-300 ">
              $color-{Object.keys(colors)[i]}:{" "}
              {HSLToHex(colorShade.h, colorShade.s, colorShade.l)};
            </div>
          ))}
      </div>
    </div>
  );
};

export default ColorsExport;
