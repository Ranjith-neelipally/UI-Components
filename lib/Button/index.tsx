import React from "react";
import { ButtonStyles } from "./styles";
import { StyleProps } from "../types/StyleTypes";

export interface ButtonProps extends StyleProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  id?: string;
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  children = "hello world",
  type = "button",
  ...props
}) => {
  return (
    <ButtonStyles type={type} {...props}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
