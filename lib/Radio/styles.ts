import styled from "styled-components";
import { getThemeColors } from "../colors";

export const RadioGroupContainer = styled.div<{ $direction: "row" | "column" }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $direction }) => ($direction === "row" ? "20px" : "12px")};
  font-family: inherit;
`;

export const RadioWrapper = styled.label<{ $disabled?: boolean }>`
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

export const HiddenInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`;

export const StyledRadio = styled.div<{ $checked: boolean; $disabled?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid
    ${({ $checked, ...props }) =>
      $checked ? getThemeColors(props).primary : `${getThemeColors(props).primaryHigh}80`};
  background-color: ${(props) => getThemeColors(props).surfaceHigh};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  position: relative;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => getThemeColors(props).primary};
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
    transform: scale(${({ $checked }) => ($checked ? 1 : 0.8)});
    transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  }

  ${HiddenInput}:focus-visible + & {
    box-shadow: 0 0 0 4px ${(props) => getThemeColors(props).primary}20;
    border-color: ${(props) => getThemeColors(props).primary};
  }

  ${RadioWrapper}:hover:not([disabled]) & {
    border-color: ${(props) => getThemeColors(props).primary};
    &::before {
      background-color: ${({ $checked, ...props }) =>
        $checked ? getThemeColors(props).primaryHigh : `${getThemeColors(props).primary}80`};
    }
  }
`;
