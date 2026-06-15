import styled, { css } from "styled-components";
import { getThemeColors } from "../colors";

export type BannerVariant = "info" | "success" | "warning" | "danger";

export const BannerContainer = styled.div<{ $variant: BannerVariant; $sticky?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 24px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  transition: all 0.25s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);

  ${({ $sticky }) =>
    $sticky &&
    css`
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      border-radius: 0;
    `}

  ${({ $variant, ...props }) => {
    const colors = getThemeColors(props);
    let bg = "";
    let border = "";

    switch ($variant) {
      case "success":
        bg = `${colors.success}15`; // hex opacity for about 8% opacity
        border = colors.success;
        break;
      case "warning":
        bg = `${colors.warning}15`;
        border = colors.warning;
        break;
      case "danger":
        bg = `${colors.danger}15`;
        border = colors.danger;
        break;
      case "info":
      default:
        bg = `${colors.info}15`;
        border = colors.info;
        break;
    }

    return css`
      background-color: ${bg};
      border-left: 4px solid ${border};
      color: ${colors.primaryText};
      
      strong {
        color: ${border};
      }
    `;
  }}
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

export const BannerIcon = styled.div<{ $variant: BannerVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  color: ${({ $variant, ...props }) => {
    const colors = getThemeColors(props);
    if ($variant === "success") return colors.success;
    if ($variant === "warning") return colors.warning;
    if ($variant === "danger") return colors.danger;
    return colors.info;
  }};
`;

export const BannerCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => getThemeColors(props).secondaryTextHigh};
  opacity: 0.7;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.15s;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
