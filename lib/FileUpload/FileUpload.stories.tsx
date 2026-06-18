import { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "../main";

const meta: Meta = {
  title: "Forms/FileUpload",
  component: FileUpload,
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    label: "Telemetry Config JSON",
    accept: ".json",
    multiple: false,
    maxSizeMB: 5,
  },
};

export const Multiple: Story = {
  args: {
    label: "Select System Logs",
    accept: ".log,.txt",
    multiple: true,
    maxSizeMB: 10,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled File Input",
    disabled: true,
  },
};
