import { hexToHSL } from "../util/utils.ts";

interface Props {
  color: string;
}

const Color = ({ color }: Props) => {
  const { h, s, l } = hexToHSL(color);
  return (
    <div className="text-sm text-white">
      <div className="w-40 h-64" style={{ backgroundColor: color }}></div>
      <div className="border border-neutral-700 p-2">
        <div>{color}</div>
        <div>
          <div>H:{h}</div>
          <div>S:{s}</div>
          <div>L:{l}</div>
        </div>
      </div>
    </div>
  );
};

export default Color;
