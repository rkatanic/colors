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
    <div className="text-white w-full mt-4 lg:mt-0">
      <div className="flex whitespace-nowrap overflow-x-auto overflow-y-hidden">
        {TABS.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer p-2 px-4 -mb-[0px] border  ${
              activeTab === tab
                ? "rounded-t-lg bg-neutral-900 border-neutral-800 border-b-transparent text-white"
                : "border-transparent text-neutral-500"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="border border-neutral-800 p-4 rounded-md rounded-tl-none -mt-[1px]">
        {activeTab === TABS[0] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-sm text-neutral-300 ">
              <span className="text-neutral-500">{Object.keys(colors)[i]}</span>{" "}
              : "hsl({colorShade.h}, {colorShade.s}%, {colorShade.l}%)"
              {i !== 9 && ","}
            </div>
          ))}
        {activeTab === TABS[1] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-sm text-neutral-300 ">
              <span className="text-neutral-500">{Object.keys(colors)[i]}</span>{" "}
              : {HSLToHex(colorShade.h, colorShade.s, colorShade.l)}"
              {i !== 9 && ","}
            </div>
          ))}
        {activeTab === TABS[2] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-sm text-neutral-300 ">
              <span className="text-neutral-500">
                --color-{Object.keys(colors)[i]}
              </span>
              : hsl({colorShade.h}, {colorShade.s}%, {colorShade.l}%);
            </div>
          ))}
        {activeTab === TABS[3] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-sm text-neutral-300 ">
              <span className="text-neutral-500">
                --color-{Object.keys(colors)[i]}
              </span>
              : {HSLToHex(colorShade.h, colorShade.s, colorShade.l)};
            </div>
          ))}
        {activeTab === TABS[4] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-sm text-neutral-300 ">
              <span className="text-neutral-500">
                $color-{Object.keys(colors)[i]}
              </span>
              : hsl({colorShade.h}, {colorShade.s}%, {colorShade.l}%);
            </div>
          ))}

        {activeTab === TABS[5] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-sm text-neutral-300 ">
              <span className="text-neutral-500">
                $color-{Object.keys(colors)[i]}
              </span>
              : {HSLToHex(colorShade.h, colorShade.s, colorShade.l)};
            </div>
          ))}
      </div>
    </div>
  );
};

export default ColorsExport;
