import styled from "styled-components";
import { getThemeColors } from "../colors";

export const SliderContainer = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  font-family: inherit;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => getThemeColors(props).primaryText};
`;

export const ValueDisplay = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${(props) => getThemeColors(props).primary};
`;

export const StyledRangeInput = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: ${(props) => getThemeColors(props).primaryHigh}40;
  outline: none;
  margin: 10px 0;
  transition: background 0.15s ease-in-out;

  /* Webkit Thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => getThemeColors(props).primary};
    border: 2px solid ${(props) => getThemeColors(props).surfaceHigh};
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.15);
    background: ${(props) => getThemeColors(props).primaryHigh};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-slider-thumb:active {
    transform: scale(1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  /* Firefox Thumb */
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => getThemeColors(props).primary};
    border: 2px solid ${(props) => getThemeColors(props).surfaceHigh};
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.15);
    background: ${(props) => getThemeColors(props).primaryHigh};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    &::-webkit-slider-thumb {
      cursor: not-allowed;
      background: ${(props) => getThemeColors(props).secondaryTextHigh};
    }
    &::-moz-range-thumb {
      cursor: not-allowed;
      background: ${(props) => getThemeColors(props).secondaryTextHigh};
    }
  }
`;
