import { NavItems } from "../../main";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "NavItems",
  component: NavItems,
};

export default meta;

type Story = StoryObj<typeof NavItems>;

export const Default: Story = {
  args: {
    navItems: [
      {
        id: "string",
        label: "string",
        className: "string",
      },
      {
        id: "string",
        label: "string2",
        className: "string",
      },
    ],
  },
};
