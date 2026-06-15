import React, { forwardRef } from "react";
import { StyledLink } from "./styles";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "subtle";
  external?: boolean;
  children: React.ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, variant = "primary", external = false, ...props }, ref) => {
    const extraProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <StyledLink ref={ref} $variant={variant} {...extraProps} {...props}>
        {children}
        {external && (
          <svg
            style={{ width: "14px", height: "14px", display: "inline-block" }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        )}
      </StyledLink>
    );
  }
);

Link.displayName = "Link";

export default Link;
