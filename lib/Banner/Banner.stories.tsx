import { Meta, StoryObj } from "@storybook/react";
import { Banner } from "../main";

const meta: Meta = {
  title: "Feedback/Banner",
  component: Banner,
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  args: {
    title: "Scheduled Maintenance Notification",
    variant: "info",
    children: "Database clusters will experience scaling operations tonight at 02:00 GMT.",
  },
};

export const Success: Story = {
  args: {
    title: "Deployment Successful",
    variant: "success",
    children: "Vite static bundle successfully built and synced to edge CDN caching nodes.",
  },
};

export const Warning: Story = {
  args: {
    title: "Sockets Buffer Warnings",
    variant: "warning",
    children: "Kubernetes Node-C reached 85% allocated network memory boundaries.",
  },
};

export const Danger: Story = {
  args: {
    title: "Kubernetes Cluster Failure",
    variant: "danger",
    children: "Node-B has terminated socket processes. Automated failover triggers engaged.",
  },
};
