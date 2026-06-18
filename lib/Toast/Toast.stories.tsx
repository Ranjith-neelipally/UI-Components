import { Meta } from "@storybook/react";
import { ToastProvider, useToast, Button } from "../main";

const meta: Meta = {
  title: "Feedback/Toast",
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;

export const Interactive = () => {
  const { toast } = useToast();

  return (
    <div style={{ display: "flex", gap: "16px", padding: "24px" }}>
      <Button onClick={() => toast.success("Server started successfully", "System Info")}>
        Show Success
      </Button>
      <Button onClick={() => toast.error("Database connection lost", "Critical Alert")}>
        Show Error
      </Button>
      <Button onClick={() => toast.warning("Node C limit exceeded", "Warning")}>
        Show Warning
      </Button>
      <Button onClick={() => toast.info("New updates available", "Notice")}>
        Show Info
      </Button>
    </div>
  );
};
