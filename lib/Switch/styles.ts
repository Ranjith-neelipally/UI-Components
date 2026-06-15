import styled from "styled-components";
import { getThemeColors } from "../colors";

export const SwitchWrapper = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => getThemeColors(props).primaryText};
  user-select: none;
`;

export const HiddenInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`;

export const StyledTrack = styled.div<{ $checked: boolean; $disabled?: boolean }>`
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ $checked, ...props }) =>
    $checked ? getThemeColors(props).primary : `${getThemeColors(props).primaryHigh}40`};
  position: relative;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  padding: 0 2px;

  ${HiddenInput}:focus-visible + & {
    box-shadow: 0 0 0 4px ${(props) => getThemeColors(props).primary}20;
  }

  ${SwitchWrapper}:hover:not([disabled]) & {
    background-color: ${({ $checked, ...props }) =>
      $checked ? getThemeColors(props).primaryHigh : `${getThemeColors(props).primaryHigh}60`};
  }
`;

export const StyledThumb = styled.div<{ $checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => getThemeColors(props).surfaceHigh};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $checked }) => ($checked ? "translateX(20px)" : "translateX(0)")};
`;
