import { useState } from "react";
import { Meta } from "@storybook/react";
import { Radio, RadioGroup } from "../main";

const meta: Meta = {
  title: "Forms/Radio",
  component: RadioGroup,
};

export default meta;

export const DefaultRadioGroup = () => {
  const [selected, setSelected] = useState("option1");
  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <Radio value="option1">Deployment Option A</Radio>
      <Radio value="option2">Deployment Option B</Radio>
      <Radio value="option3" disabled>
        Deployment Option C (Disabled)
      </Radio>
    </RadioGroup>
  );
};

export const RowRadioGroup = () => {
  const [selected, setSelected] = useState("column");
  return (
    <RadioGroup value={selected} onChange={setSelected} direction="row">
      <Radio value="row">Horizontal Layout</Radio>
      <Radio value="column">Vertical Layout</Radio>
    </RadioGroup>
  );
};
