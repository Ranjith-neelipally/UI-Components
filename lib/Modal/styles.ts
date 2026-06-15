import styled, { keyframes } from "styled-components";
import { getThemeColors } from "../colors";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.25s ease-out forwards;
`;

export const ModalContainer = styled.div<{ size: "sm" | "md" | "lg" | "xl" }>`
  background-color: ${(props) => getThemeColors(props).surfaceHigh};
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh}80;
  border-radius: 16px;
  width: 90%;
  max-width: ${({ size }) => {
    switch (size) {
      case "sm":
        return "400px";
      case "lg":
        return "800px";
      case "xl":
        return "1140px";
      case "md":
      default:
        return "600px";
    }
  }};
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: ${slideUp} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  overflow: hidden;
  font-family: inherit;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${(props) => getThemeColors(props).primaryHigh}40;

  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => getThemeColors(props).primaryText};
  }
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
  color: ${(props) => getThemeColors(props).secondaryTextHigh};
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  outline: none;

  &:hover {
    color: ${(props) => getThemeColors(props).primaryText};
    background-color: ${(props) => getThemeColors(props).primaryHigh}40;
    transform: rotate(90deg);
  }
`;

export const ModalBody = styled.div`
  padding: 24px;
  overflow-y: auto;
  font-size: 16px;
  line-height: 1.6;
  color: ${(props) => getThemeColors(props).secondaryTextHigh};
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  background-color: ${(props) => getThemeColors(props).surfaceDefault};
  border-top: 1px solid ${(props) => getThemeColors(props).primaryHigh}40;
`;
