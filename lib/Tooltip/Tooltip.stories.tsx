import { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Button } from "../main";

const meta: Meta = {
  title: "Feedback/Tooltip",
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: (args) => (
    <div style={{ padding: "64px 24px", display: "flex", justifyContent: "center" }}>
      <Tooltip {...args}>
        <Button>Hover Over Me</Button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "Additional diagnostic information displayed on hover",
    position: "top",
    delay: 200,
  },
};

export const Right: Story = {
  render: (args) => (
    <div style={{ padding: "64px 24px", display: "flex", justifyContent: "center" }}>
      <Tooltip {...args}>
        <Button>Hover Over Me</Button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "Tooltip on the right side",
    position: "right",
  },
};
