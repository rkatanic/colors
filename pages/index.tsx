import type { NextPage } from "next";
import { useState } from "react";
import Color from "../components/Color";
import ColorPicker from "../components/ColorPicker";
import { adjust } from "/util/utils.ts";

const Home: NextPage = () => {
  const [color, setColor] = useState("#22c55e");
  return (
    <div className="h-screen bg-neutral-900 flex flex-col items-center justify-center">
      <ColorPicker color={color} setColor={setColor} />
      <div className="flex">
        <Color color={adjust(color, 120)} />
        <Color color={adjust(color, 80)} />
        <Color color={adjust(color, 50)} />
        <Color color={adjust(color, 30)} />
        <Color color={color} />
        <Color color={adjust(color, -35)} />
        <Color color={adjust(color, -75)} />
        <Color color={adjust(color, -100)} />
        <Color color={adjust(color, -130)} />
        <Color color={adjust(color, -145)} />
      </div>
    </div>
  );
};

export default Home;
