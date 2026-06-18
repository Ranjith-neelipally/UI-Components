import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../main";

const meta: Meta = {
  title: "Forms/TextArea",
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    label: "Terminal Sockets Dump Output",
    placeholder: "Diagnostic logs write here...",
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    label: "System Configuration Backup File",
    value: "server {\n  listen 80;\n  server_name localhost;\n}",
    disabled: true,
    rows: 6,
  },
};
