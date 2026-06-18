import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../main";

const meta: Meta = {
  title: "Data Display/Badge",
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Filled: Story = {
  args: {
    children: "Approved Status",
    variant: "filled",
    colorType: "success",
  },
};

export const Outlined: Story = {
  args: {
    children: "Pending Review",
    variant: "outlined",
    colorType: "warning",
  },
};

export const Subtle: Story = {
  args: {
    children: "Debug Log",
    variant: "subtle",
    colorType: "primary",
  },
};

export const Pilled: Story = {
  args: {
    children: "16 Active Sockets",
    variant: "filled",
    colorType: "info",
    pill: true,
  },
};
