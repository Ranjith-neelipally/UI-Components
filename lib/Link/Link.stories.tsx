import { Meta, StoryObj } from "@storybook/react";
import { Link } from "../main";

const meta: Meta = {
  title: "Navigation/Link",
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "Primary Brand Link",
    href: "#",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Muted Link",
    href: "#",
    variant: "secondary",
  },
};

export const External: Story = {
  args: {
    children: "Visit External Site",
    href: "https://google.com",
    external: true,
  },
};
