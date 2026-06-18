import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../main";

const meta: Meta = {
  title: "Layout/Divider",
  component: Divider,
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: "24px" }}>
      <div>Top Text Content Section</div>
      <Divider {...args} />
      <div>Bottom Text Content Section</div>
    </div>
  ),
  args: {
    margin: "24px 0",
  },
};
