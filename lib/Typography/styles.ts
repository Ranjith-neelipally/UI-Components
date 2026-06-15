import styled, { css } from "styled-components";
import { getThemeColors } from "../colors";

const getFontStyles = (variant: string) => {
  switch (variant) {
    case "h1":
      return css`
        font-size: 2.5rem;
        line-height: 1.2;
        letter-spacing: -0.02em;
      `;
    case "h2":
      return css`
        font-size: 2rem;
        line-height: 1.3;
        letter-spacing: -0.01em;
      `;
    case "h3":
      return css`
        font-size: 1.5rem;
        line-height: 1.4;
      `;
    case "h4":
      return css`
        font-size: 1.25rem;
        line-height: 1.4;
      `;
    case "h5":
      return css`
        font-size: 1.125rem;
        line-height: 1.5;
      `;
    case "h6":
      return css`
        font-size: 1rem;
        line-height: 1.5;
      `;
    case "caption":
      return css`
        font-size: 0.75rem;
        line-height: 1.6;
      `;
    case "p":
    case "body":
    default:
      return css`
        font-size: 1rem;
        line-height: 1.6;
      `;
  }
};

const getColor = (colorType: string, props: any) => {
  const colors = getThemeColors(props);
  switch (colorType) {
    case "primary":
      return colors.primaryText;
    case "secondary":
      return colors.secondaryTextHigh;
    case "brand":
      return colors.primary;
    case "success":
      return colors.success;
    case "warning":
      return colors.warning;
    case "danger":
      return colors.danger;
    case "info":
      return colors.info;
    case "inherit":
    default:
      return "inherit";
  }
};

const getWeight = (weight: any) => {
  if (!weight) return "inherit";
  switch (weight) {
    case "normal":
      return 400;
    case "medium":
      return 500;
    case "semibold":
      return 600;
    case "bold":
      return 700;
    default:
      return weight;
  }
};

export const StyledText = styled.span<{
  $variant: string;
  $colorType: string;
  $fontWeight?: string | number;
  $align: string;
  $gutterBottom: boolean;
}>`
  margin: 0;
  text-align: ${({ $align }) => $align};
  color: ${(props) => getColor(props.$colorType, props)};
  font-weight: ${({ $fontWeight }) => getWeight($fontWeight)};
  font-family: inherit;
  margin-bottom: ${({ $gutterBottom, $variant }) =>
    $gutterBottom ? ($variant.startsWith("h") ? "16px" : "12px") : "0"};

  ${({ $variant }) => getFontStyles($variant)}
`;
