import { Meta, StoryObj } from "@storybook/react";
import { ContentWrapper } from "../main";

const meta: Meta = {
  title: "Layout/ContentWrapper",
  component: ContentWrapper,
};

export default meta;

type Story = StoryObj<typeof ContentWrapper>;

export const Default: Story = {
  render: (args) => (
    <ContentWrapper {...args}>
      <div style={{ padding: "16px", backgroundColor: "#1f2937", border: "1px solid rgba(249, 250, 251, 0.08)", borderRadius: "4px" }}>
        Wrapped Content Element A
      </div>
      <div style={{ padding: "16px", backgroundColor: "#1f2937", border: "1px solid rgba(249, 250, 251, 0.08)", borderRadius: "4px" }}>
        Wrapped Content Element B
      </div>
    </ContentWrapper>
  ),
  args: {
    $gap: "16px",
  },
};
