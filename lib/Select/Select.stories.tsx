import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../main";

const meta: Meta = {
  title: "Forms/Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { value: "react", label: "React Client Library" },
  { value: "next", label: "Next.js Framework" },
  { value: "vite", label: "Vite Bundling Engine" },
];

export const Default: Story = {
  args: {
    label: "Development Stack",
    placeholder: "Choose frontend tool",
    options,
  },
};

export const Disabled: Story = {
  args: {
    label: "Locked Field",
    placeholder: "Deactivated option selector",
    options,
    disabled: true,
  },
};
