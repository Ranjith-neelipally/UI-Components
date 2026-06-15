import styled, { css, keyframes } from "styled-components";
import { getThemeColors } from "../colors";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const TriggerContainer = styled.div`
  display: inline-flex;
`;

export const TooltipTip = styled.div<{ $position: "top" | "bottom" | "left" | "right" }>`
  position: absolute;
  border-radius: 8px;
  padding: 6px 12px;
  color: ${(props) => getThemeColors(props).surfaceHigh};
  background-color: ${(props) => getThemeColors(props).primaryText};
  font-size: 13px;
  font-weight: 500;
  font-family: inherit;
  white-space: nowrap;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 100;
  pointer-events: none;
  animation: ${fadeIn} 0.15s ease-out forwards;

  /* Arrows */
  &::before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: -6px;
  }

  ${({ $position, ...props }) => {
    const textColor = getThemeColors(props).primaryText;
    switch ($position) {
      case "top":
        return css`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 10px;
          &::before {
            top: 100%;
            border-top-color: ${textColor};
          }
        `;
      case "bottom":
        return css`
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 10px;
          &::before {
            bottom: 100%;
            border-bottom-color: ${textColor};
          }
        `;
      case "left":
        return css`
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-right: 10px;
          &::before {
            left: 100%;
            top: 50%;
            margin-top: -6px;
            margin-left: 0;
            border-left-color: ${textColor};
          }
        `;
      case "right":
        return css`
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 10px;
          &::before {
            right: 100%;
            top: 50%;
            margin-top: -6px;
            margin-left: -12px;
            border-right-color: ${textColor};
          }
        `;
    }
  }}
`;
