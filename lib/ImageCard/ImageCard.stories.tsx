import { Meta, StoryObj } from "@storybook/react";
import { ImageCard } from "../main";

const meta: Meta = {
  title: "Data Display/ImageCard",
  component: ImageCard,
};

export default meta;

type Story = StoryObj<typeof ImageCard>;

export const Default: Story = {
  args: {
    title: "Docker Telemetry Dashboard",
    subtitle: "Cloud Container Monitoring",
    description: "Inspect cpu cores load and monitor active websocket connections dynamically.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600",
  },
};
