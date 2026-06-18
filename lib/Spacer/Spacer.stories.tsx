import { Meta, StoryObj } from "@storybook/react";
import { Spacer } from "../main";

const meta: Meta = {
  title: "Layout/Spacer",
  component: Spacer,
};

export default meta;

type Story = StoryObj<typeof Spacer>;

export const Vertical: Story = {
  render: (args) => (
    <div style={{ padding: "24px" }}>
      <div>Header Block</div>
      <Spacer {...args} />
      <div>Content Block (Separated by Vertical Spacer)</div>
    </div>
  ),
  args: {
    y: 32,
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <div style={{ padding: "24px", display: "flex", alignItems: "center" }}>
      <span>Left Text</span>
      <Spacer {...args} />
      <span>Right Text</span>
    </div>
  ),
  args: {
    x: 24,
  },
};
