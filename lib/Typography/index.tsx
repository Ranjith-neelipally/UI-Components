import React from "react";
import { StyledText } from "./styles";

export interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "body" | "caption" | "span";
  colorType?: "primary" | "secondary" | "brand" | "success" | "warning" | "danger" | "info" | "inherit";
  fontWeight?: "normal" | "medium" | "semibold" | "bold" | number;
  align?: "left" | "center" | "right" | "justify";
  gutterBottom?: boolean;
  children: React.ReactNode;
  as?: React.ElementType;
}

export const Typography = ({
  variant = "body",
  colorType = "primary",
  fontWeight,
  align = "left",
  gutterBottom = false,
  children,
  as,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  const getAsElement = (): React.ElementType => {
    if (as) return as;
    switch (variant) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
      case "p":
      case "span":
        return variant;
      case "caption":
        return "span";
      case "body":
      default:
        return "p";
    }
  };

  return (
    <StyledText
      as={getAsElement()}
      $variant={variant}
      $colorType={colorType}
      $fontWeight={fontWeight}
      $align={align}
      $gutterBottom={gutterBottom}
      {...props}
    >
      {children}
    </StyledText>
  );
};

// Specialized shorthand helpers
export const Heading = ({
  level = 1,
  ...props
}: Omit<TypographyProps, "variant"> & { level?: 1 | 2 | 3 | 4 | 5 | 6 }) => {
  const variant = `h${level}` as TypographyProps["variant"];
  return <Typography variant={variant} fontWeight="bold" {...props} />;
};

export const Paragraph = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="p" colorType="secondary" {...props} />
);

export const Caption = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="caption" colorType="secondary" fontWeight="medium" {...props} />
);

export const HighlightText = (props: Omit<TypographyProps, "variant">) => (
  <Typography variant="span" colorType="brand" fontWeight="semibold" {...props} />
);

export default Typography;
