import styled from "styled-components";
import { getThemeColors } from "../colors";
import { StyleProps } from "../types/StyleTypes";

export const ButtonStyles = styled.button<StyleProps>`
  display: ${({ $display }) => $display || "flex"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "center"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  background-color: ${({ $backgroundColor, ...props }) =>
    $backgroundColor || getThemeColors(props).primary};
  color: ${({ $fontColor, ...props }) =>
    $fontColor || getThemeColors(props).primaryContrastText};
  padding: ${({ $padding }) => $padding || "10px 24px"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "12px"};
  border: ${({ $border }) => $border || "none"};
  cursor: ${({ $cursor }) => $cursor || "pointer"};
  font-size: ${({ $fontSize }) => $fontSize || "14px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "600"};
  line-height: ${({ $lineHeight }) => $lineHeight || "16px"};
  margin: ${({ $margin }) => $margin || "0"};
  width: ${({ $display }) => ($display === "flex" ? "fit-content" : "auto")};
  white-space: nowrap;
  outline: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover:not(:disabled) {
    background-color: ${({ $backgroundColor, ...props }) =>
      $backgroundColor
        ? $backgroundColor
        : getThemeColors(props).primaryHigh};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
