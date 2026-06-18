import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "../main";

const meta: Meta = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

const items = [
  { label: "Home", href: "/" },
  { label: "Library", href: "/library" },
  { label: "Breadcrumbs", href: "/library/breadcrumbs" },
];

export const Default: Story = {
  args: {
    items,
    separator: "/",
  },
};

export const CustomSeparator: Story = {
  args: {
    items,
    separator: ">",
  },
};
