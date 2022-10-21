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
    <div
      className="text-sm text-white w-full"
      onClick={() => selectColor(shade)}
    >
      <span className="text-neutral-500 mb-1 text-xs">{shade}</span>
      <div
        className="h-24"
        style={{ backgroundColor: `hsl(${h},${s}%,${l}%)` }}
      ></div>
      <div
        className={`w-full h-1 rounded-md mt-1 ${
          shade === selectedColor && "bg-white"
        }`}
      ></div>
    </div>
  );
};

export default Color;
