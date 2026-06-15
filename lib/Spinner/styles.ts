import styled, { keyframes } from "styled-components";
import { getThemeColors } from "../colors";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const getSpinnerSize = (size: "sm" | "md" | "lg" | number) => {
  if (typeof size === "number") return `${size}px`;
  switch (size) {
    case "sm":
      return "20px";
    case "lg":
      return "48px";
    case "md":
    default:
      return "32px";
  }
};

const getSpinnerColor = (colorType: string, props: any) => {
  const colors = getThemeColors(props);
  switch (colorType) {
    case "secondary":
      return colors.secondaryTextHigh;
    case "success":
      return colors.success;
    case "warning":
      return colors.warning;
    case "danger":
      return colors.danger;
    case "info":
      return colors.info;
    case "white":
      return "#ffffff";
    case "primary":
    default:
      return colors.primary;
  }
};

export const StyledSpinner = styled.div<{
  $size: "sm" | "md" | "lg" | number;
  $colorType: string;
  $thickness: number;
}>`
  width: ${({ $size }) => getSpinnerSize($size)};
  height: ${({ $size }) => getSpinnerSize($size)};
  border: ${({ $thickness }) => $thickness}px solid ${(props) => getSpinnerColor(props.$colorType, props)}20;
  border-top: ${({ $thickness }) => $thickness}px solid ${(props) => getSpinnerColor(props.$colorType, props)};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  display: inline-block;
`;
