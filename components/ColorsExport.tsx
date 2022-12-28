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
    <div className="mt-4 w-full border-2 border-gray-800 bg-gray-900 text-white lg:mt-0">
      <div className="flex overflow-x-auto whitespace-nowrap border-b-2 border-gray-800 py-4">
        {TABS.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative cursor-pointer px-4 before:absolute before:left-0 before:-bottom-4 before:h-[2px] before:w-full hover:text-gray-200 ${
              activeTab === tab
                ? "text-gray-200 before:bg-gray-50"
                : "text-gray-400 hover:before:bg-gray-700"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="-tl-none -mt-[1px] p-4">
        {activeTab === TABS[0] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-gray-300 ">
              <span className="text-gray-500">{Object.keys(colors)[i]}</span> :
              &quot;hsl({colorShade.h}, {colorShade.s}%, {colorShade.l}
              %)&quot;
              {i !== 9 && ","}
            </div>
          ))}
        {activeTab === TABS[1] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-gray-300 ">
              <span className="text-gray-500">{Object.keys(colors)[i]}</span> :
              &quot;{HSLToHex(colorShade.h, colorShade.s, colorShade.l)}&quot;
              {i !== 9 && ","}
            </div>
          ))}
        {activeTab === TABS[2] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-gray-300 ">
              <span className="text-gray-500">
                --color-{Object.keys(colors)[i]}
              </span>
              : hsl({colorShade.h}, {colorShade.s}%, {colorShade.l}%);
            </div>
          ))}
        {activeTab === TABS[3] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-gray-300 ">
              <span className="text-gray-500">
                --color-{Object.keys(colors)[i]}
              </span>
              : {HSLToHex(colorShade.h, colorShade.s, colorShade.l)};
            </div>
          ))}
        {activeTab === TABS[4] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-gray-300 ">
              <span className="text-gray-500">
                $color-{Object.keys(colors)[i]}
              </span>
              : hsl({colorShade.h}, {colorShade.s}%, {colorShade.l}%);
            </div>
          ))}

        {activeTab === TABS[5] &&
          colorShades.map((colorShade, i) => (
            <div key={i} className="font-mono text-gray-300 ">
              <span className="text-gray-500">
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
