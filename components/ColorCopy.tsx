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
      <span className="whitespace-nowrap font-mono text-sm text-gray-300">
        {color}
      </span>

      <button onClick={handleTextCopy} type="button" disabled={isCopied}>
        {isCopied ? (
          <FiCheck size="0.75rem" className="stroke-emerald-400" />
        ) : (
          <FiCopy
            size="0.75rem"
            className="stroke-gray-400 hover:stroke-white"
          />
        )}
      </button>
    </div>
  );
};

export default ColorCopy;
