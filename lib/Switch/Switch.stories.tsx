import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../main";

const meta: Meta = {
  title: "Forms/Switch",
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    children: "Require TLS Encryptions",
  },
};

export const Disabled: Story = {
  args: {
    children: "Locked Setting Option",
    disabled: true,
  },
};

export const Interactive = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)}>
      TLS Active: {String(enabled)}
    </Switch>
  );
};
