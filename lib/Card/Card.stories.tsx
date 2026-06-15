import { Meta } from "@storybook/react";
import { Card } from "../main";
import { CardProps } from "./helpers";

const meta: Meta = {
  title: "Card",
  component: Card,
};

export default meta;

export const Default = ({ children = "hello" }: CardProps) => {
  return <Card>{children}</Card>;
};

