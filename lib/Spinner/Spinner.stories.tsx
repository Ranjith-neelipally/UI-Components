import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../main";

const meta: Meta = {
  title: "Feedback/Spinner",
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "md",
    colorType: "primary",
    thickness: 3,
  },
};

export const SmallSuccess: Story = {
  args: {
    size: "sm",
    colorType: "success",
    thickness: 2,
  },
};

export const LargeDanger: Story = {
  args: {
    size: "lg",
    colorType: "danger",
    thickness: 4,
  },
};
