import styled, { css } from "styled-components";
import { getThemeColors } from "../colors";

export const AccordionContainer = styled.div`
  border: 1px solid ${(props) => getThemeColors(props).surfaceHigh};
  border-radius: 8px;
  overflow: hidden;
  font-family: inherit;
  background-color: ${(props) => getThemeColors(props).surfaceDefault};
`;

export const AccordionItemWrapper = styled.div`
  border-bottom: 1px solid ${(props) => getThemeColors(props).surfaceHigh};
  
  &:last-child {
    border-bottom: none;
  }
`;

export const AccordionHeader = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: none;
  border: none;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => getThemeColors(props).primaryText};
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${(props) => getThemeColors(props).surfaceHigh};
  }

  ${({ $isOpen, ...props }) =>
    $isOpen &&
    css`
      background-color: ${getThemeColors(props).surfaceHigh};
      color: ${getThemeColors(props).primary};
    `}
`;

export const AccordionChevron = styled.span<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  color: ${(props) => getThemeColors(props).secondaryTextHigh};

  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const AccordionContentWrapper = styled.div<{ $isOpen: boolean; $maxHeight: number }>`
  overflow: hidden;
  transition: max-height 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
  max-height: ${({ $isOpen, $maxHeight }) => ($isOpen ? `${$maxHeight}px` : "0px")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  background-color: ${(props) => getThemeColors(props).surfaceDefault};
`;

export const AccordionContent = styled.div`
  padding: 16px 20px 20px 20px;
  font-size: 14px;
  line-height: 1.6;
  color: ${(props) => getThemeColors(props).secondaryTextHigh};
`;
