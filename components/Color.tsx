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
}: Props): JSX.Element => (
  <div className="w-full text-sm text-white" onClick={() => selectColor(shade)}>
    <span className="mb-1 text-xs text-gray-500">{shade}</span>
    <div
      className="h-16 md:h-24"
      style={{ backgroundColor: `hsl(${h},${s}%,${l}%)` }}
    ></div>
    <div
      className={`mt-1 h-1  w-full ${shade === selectedColor && "bg-white"}`}
    ></div>
  </div>
);

export default Color;
