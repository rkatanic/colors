import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

interface Props {
  color: string;
}

const ColorCopy = ({ color }: Props): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);

  const handleTextCopy = (): void => {
    setIsCopied(true);
    navigator.clipboard.writeText(color);
    setTimeout(() => setIsCopied(false), 500);
  };

  return (
    <div className="flex items-center gap-2.5">
      <span className="text-sm text-neutral-300 font-mono whitespace-nowrap">
        {color}
      </span>

      <button onClick={handleTextCopy} type="button" disabled={isCopied}>
        {isCopied ? (
          <FiCheck size="0.75rem" className="stroke-emerald-400" />
        ) : (
          <FiCopy
            size="0.75rem"
            className="stroke-neutral-400 hover:stroke-white"
          />
        )}
      </button>
    </div>
  );
};

export default ColorCopy;
