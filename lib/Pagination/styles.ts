import styled from "styled-components";
import { getThemeColors } from "../colors";

export const PaginationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: inherit;
`;

export const PageButton = styled.button<{ $isActive?: boolean; $isNavigation?: boolean }>`
  min-width: 36px;
  height: 36px;
  padding: 0 6px;
  border-radius: 8px;
  border: 1px solid
    ${({ $isActive, ...props }) =>
      $isActive ? getThemeColors(props).primary : `${getThemeColors(props).primaryHigh}30`};
  background-color: ${({ $isActive, ...props }) =>
    $isActive ? getThemeColors(props).primary : getThemeColors(props).surfaceHigh};
  color: ${({ $isActive, ...props }) =>
    $isActive ? getThemeColors(props).primaryContrastText : getThemeColors(props).primaryText};
  font-size: 14px;
  font-weight: ${({ $isActive }) => ($isActive ? "700" : "500")};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover:not(:disabled) {
    background-color: ${({ $isActive, ...props }) =>
      $isActive ? getThemeColors(props).primaryHigh : `${getThemeColors(props).primary}15`};
    border-color: ${(props) => getThemeColors(props).primary};
    color: ${({ $isActive, ...props }) =>
      $isActive ? getThemeColors(props).primaryContrastText : getThemeColors(props).primary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    border-color: ${(props) => getThemeColors(props).primaryHigh}10;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const EllipsisSpan = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: ${(props) => getThemeColors(props).secondaryTextHigh};
  font-weight: 500;
  user-select: none;
`;
