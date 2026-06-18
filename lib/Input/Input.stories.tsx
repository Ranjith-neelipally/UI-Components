import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../main";

const meta: Meta = {
  title: "Forms/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Host Name",
    placeholder: "e.g. localhost",
  },
};

export const WithError: Story = {
  args: {
    label: "SSH Port",
    placeholder: "e.g. 22",
    error: "Port 22 is already allocated inside this network node.",
  },
};

export const Success: Story = {
  args: {
    label: "Database Connection",
    placeholder: "Postgres Connection Established",
    success: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Audit Sockets Address",
    value: "10.0.1.25",
    disabled: true,
  },
};
