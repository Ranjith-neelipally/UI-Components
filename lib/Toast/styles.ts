import styled, { keyframes } from "styled-components";
import { getThemeColors } from "../colors";

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
  max-width: 380px;
  width: 100%;
  pointer-events: none;
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%) translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
`;

export const ToastItem = styled.div<{ $type: "success" | "warning" | "error" | "info" }>`
  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background-color: ${(props) => getThemeColors(props).surfaceHigh};
  border-radius: 12px;
  border-left: 5px solid
    ${({ $type, ...props }) => {
      const colors = getThemeColors(props);
      if ($type === "success") return colors.success;
      if ($type === "warning") return colors.warning;
      if ($type === "error") return colors.danger;
      return colors.info;
    }};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  animation: ${slideIn} 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  font-family: inherit;
`;

export const ToastIcon = styled.div<{ $type: "success" | "warning" | "error" | "info" }>`
  flex-shrink: 0;
  color: ${({ $type, ...props }) => {
    const colors = getThemeColors(props);
    if ($type === "success") return colors.success;
    if ($type === "warning") return colors.warning;
    if ($type === "error") return colors.danger;
    return colors.info;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToastContent = styled.div`
  flex: 1;
`;

export const ToastTitle = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => getThemeColors(props).primaryText};
`;

export const ToastMessage = styled.p`
  margin: 4px 0 0 0;
  font-size: 13px;
  color: ${(props) => getThemeColors(props).secondaryTextHigh};
  line-height: 1.4;
`;

export const ToastCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => getThemeColors(props).secondaryTextHigh};
  opacity: 0.7;
  padding: 0;
  margin-top: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: opacity 0.15s;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
