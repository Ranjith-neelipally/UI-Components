import styled, { css } from "styled-components";
import { getThemeColors } from "../colors";

const getBadgeColors = (colorType: string, variant: string, props: any) => {
  const colors = getThemeColors(props);
  let baseColor = colors.primary;
  let subtleBg = colors.surfaceHigh;

  switch (colorType) {
    case "success":
      baseColor = colors.success;
      subtleBg = `${colors.success}15`;
      break;
    case "warning":
      baseColor = colors.warning;
      subtleBg = `${colors.warning}15`;
      break;
    case "danger":
      baseColor = colors.danger;
      subtleBg = `${colors.danger}15`;
      break;
    case "info":
      baseColor = colors.info;
      subtleBg = `${colors.info}15`;
      break;
    case "primary":
    default:
      baseColor = colors.primary;
      subtleBg = `${colors.primary}20`;
      break;
  }

  if (variant === "filled") {
    const textFill = colorType === "primary" ? colors.primaryContrastText : "#ffffff";
    return css`
      background-color: ${baseColor};
      color: ${textFill};
      border: 1px solid ${baseColor};
    `;
  }

  if (variant === "outlined") {
    const textOut = colorType === "primary" ? colors.primaryText : baseColor;
    return css`
      background-color: transparent;
      color: ${textOut};
      border: 1.5px solid ${baseColor};
    `;
  }

  // Subtle/default
  const textSubtle = colorType === "primary" ? colors.secondaryTextHigh : baseColor;
  return css`
    background-color: ${subtleBg};
    color: ${textSubtle};
    border: 1px solid transparent;
  `;
};

export const BadgeContainer = styled.span<{
  $variant: string;
  $colorType: string;
  $pill: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({ $pill }) => ($pill ? "9999px" : "6px")};
  line-height: 1;
  white-space: nowrap;
  font-family: inherit;

  ${({ $colorType, $variant, ...props }) => getBadgeColors($colorType, $variant, props)}
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  padding: 0;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
  transition: opacity 0.2s, transform 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
    transform: scale(1.15);
  }
`;
