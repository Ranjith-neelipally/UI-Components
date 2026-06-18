import { Meta, StoryObj } from "@storybook/react";
import { RootContainer } from "../main";

const meta: Meta = {
  title: "Layout/RootContainer",
  component: RootContainer,
};

export default meta;

type Story = StoryObj<typeof RootContainer>;

export const Default: Story = {
  render: (args) => (
    <RootContainer {...args}>
      <div style={{ padding: "24px", textAlign: "center" }}>
        <h3>Application Core Viewport</h3>
        <p>This container stretches to fill full-screen viewport dimensions.</p>
      </div>
    </RootContainer>
  ),
  args: {
    $flexDirection: "column",
    $padding: "24px",
  },
};
