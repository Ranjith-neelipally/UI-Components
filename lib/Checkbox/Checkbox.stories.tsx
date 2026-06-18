import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../main";

const meta: Meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    children: "Accept standard developer agreement guidelines",
  },
};

export const Disabled: Story = {
  args: {
    children: "Locked option choice",
    disabled: true,
  },
};

export const InteractiveState = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
      Checked state: {String(checked)}
    </Checkbox>
  );
};
