import React from "react";
import { ReactNode } from "react";
import { ButtonStyles } from "./styles";
interface ButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children = "hello world",
  ...props
}): ReactNode => {
  return (
    <>
      <ButtonStyles {...props}>{children}</ButtonStyles>
    </>
  );
};

export default Button;
