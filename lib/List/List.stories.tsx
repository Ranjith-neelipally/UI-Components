import { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "../main";

const meta: Meta = {
  title: "Data Display/List",
  component: List,
};

export default meta;

type Story = StoryObj<typeof List>;

export const Unordered: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem>Inspect kubernetes socket health checks.</ListItem>
      <ListItem>Clear redis buffer index cache.</ListItem>
      <ListItem>Deploy static portfolio screen updates.</ListItem>
    </List>
  ),
  args: {
    ordered: false,
  },
};

export const Ordered: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem>Establish SSH terminal session.</ListItem>
      <ListItem>Build production React bundle.</ListItem>
      <ListItem>Flush cached CDN indexes.</ListItem>
    </List>
  ),
  args: {
    ordered: true,
  },
};
