import { useState } from "react";
import { Meta } from "@storybook/react";
import { Slider } from "../main";

const meta: Meta = {
  title: "Forms/Slider",
  component: Slider,
};

export default meta;

export const DefaultSlider = () => {
  const [val, setVal] = useState(42);
  return (
    <div style={{ maxWidth: "320px" }}>
      <Slider
        label="Cluster Nodes Limit"
        value={val}
        min={0}
        max={100}
        onChange={(e) => setVal(parseInt(e.target.value, 10))}
      />
    </div>
  );
};

export const DisabledSlider = () => (
  <div style={{ maxWidth: "320px" }}>
    <Slider label="Read Only Bandwidth" value={15} disabled />
  </div>
);
