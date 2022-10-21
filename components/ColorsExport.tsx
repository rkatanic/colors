import { useState } from "react";

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
        {colorShades.map((colorShade) => (
          <div className="font-mono text-sm text-neutral-300 ">
            hsl({colorShade.h}, {colorShade.s}%, {colorShade.l}%)
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorsExport;
