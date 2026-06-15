import React from "react";
import { BadgeContainer, CloseButton } from "./styles";

export interface BadgeProps {
  variant?: "filled" | "outlined" | "subtle";
  colorType?: "primary" | "success" | "warning" | "danger" | "info";
  pill?: boolean;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const Badge = ({
  variant = "subtle",
  colorType = "primary",
  pill = false,
  onClose,
  children,
  ...props
}: BadgeProps & React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <BadgeContainer $variant={variant} $colorType={colorType} $pill={pill} {...props}>
      {children}
      {onClose && (
        <CloseButton
          onClick={(e) => {
            e.stopPropagation();
            onClose(e);
          }}
          aria-label="Remove badge"
        >
          &times;
        </CloseButton>
      )}
    </BadgeContainer>
  );
};

export default Badge;
