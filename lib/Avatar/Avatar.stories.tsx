import { Meta } from "@storybook/react";
import { Avatar } from "../main";

const meta: Meta = {
  title: "Avatar",
  component: Avatar,
};

export default meta;

type Story = typeof Avatar;

export const Default: Story = () => <Avatar label="ranjith" />;

export const ImageAvatar: Story = () => (
  <Avatar
    label="ranjith"
    $imageUrl="https://3.img-dpreview.com/files/p/TS600x450~sample_galleries/3002635523/4971879462.jpg"
  />
);
