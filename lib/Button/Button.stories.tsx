import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../main";

const meta: Meta = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Hello World",
  },
};

export const DefaultClr: Story = {
  args: {
    children: "Hello World clr",
  },
};
