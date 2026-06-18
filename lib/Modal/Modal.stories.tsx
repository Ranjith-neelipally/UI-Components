import { useState } from "react";
import { Meta } from "@storybook/react";
import { Modal, Button } from "../main";

const meta: Meta = {
  title: "Feedback/Modal",
  component: Modal,
};

export default meta;

export const DefaultModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "24px" }}>
      <Button onClick={() => setOpen(true)}>Open Modal Dialog</Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Telemetry Sockets Audit"
        footer={<Button onClick={() => setOpen(false)}>Close</Button>}
      >
        <div style={{ padding: "16px", color: "#9ca3af", fontSize: "14px", lineHeight: "1.5" }}>
          This dialog displays live audits of network connections. The backdrop is blurred dynamically.
        </div>
      </Modal>
    </div>
  );
};
