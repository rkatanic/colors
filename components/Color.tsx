interface Props {
  color: { h: number; s: number; l: number };
  shade: number;
  selectedColor: number;
  selectColor: (colorNumber: number) => void;
}

const Color = ({
  color: { h, s, l },
  shade,
  selectedColor,
  selectColor,
}: Props) => {
  return (
    <div className="text-sm text-white" onClick={() => selectColor(shade)}>
      <span className="text-neutral-500 text-xs">{shade}</span>
      <div
        className={`w-full h-1 rounded-md mb-1 ${
          shade === selectedColor && "bg-white"
        }`}
      ></div>
      <div
        className="w-24 h-24"
        style={{ backgroundColor: `hsl(${h},${s}%,${l}%)` }}
      ></div>
      <div className="border border-neutral-800 p-2">
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
