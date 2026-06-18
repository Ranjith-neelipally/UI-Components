import { Meta, StoryObj } from "@storybook/react";
import { Grid, Col } from "../main";

const meta: Meta = {
  title: "Layout/Grid",
  component: Grid,
};

export default meta;

type Story = StoryObj<typeof Grid>;

const boxStyle = {
  padding: "16px",
  backgroundColor: "#1f2937",
  border: "1px solid rgba(249, 250, 251, 0.08)",
  borderRadius: "4px",
  textAlign: "center" as const,
  color: "#f9fafb"
};

export const DefaultGrid: Story = {
  render: (args) => (
    <Grid {...args}>
      <Col span={1}>
        <div style={boxStyle}>Col A (span 1)</div>
      </Col>
      <Col span={1}>
        <div style={boxStyle}>Col B (span 1)</div>
      </Col>
      <Col span={1}>
        <div style={boxStyle}>Col C (span 1)</div>
      </Col>
    </Grid>
  ),
  args: {
    columns: 3,
    gap: "16px",
    alignItems: "stretch",
  },
};

export const SpannedColumns: Story = {
  render: (args) => (
    <Grid {...args}>
      <Col span={4}>
        <div style={boxStyle}>Span 4</div>
      </Col>
      <Col span={8}>
        <div style={boxStyle}>Span 8</div>
      </Col>
    </Grid>
  ),
  args: {
    columns: 12,
    gap: "12px",
  },
};
