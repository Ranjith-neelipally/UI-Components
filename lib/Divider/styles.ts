import styled, { css } from "styled-components";
import { getThemeColors } from "../colors";

export interface DividerStyleProps {
  $orientation?: "horizontal" | "vertical";
  $thickness?: string | number;
  $color?: string;
  $margin?: string | number;
}

export const StyledDivider = styled.div<DividerStyleProps>`
  display: flex;
  border: none;
  
  ${({ $orientation = "horizontal", $thickness = "1px", $color, $margin = "16px 0", ...props }) => {
    const defaultColor = getThemeColors(props).surfaceHigh;
    const resolvedColor = $color || defaultColor;
    const thicknessVal = typeof $thickness === "number" ? `${$thickness}px` : $thickness;
    const marginVal = typeof $margin === "number" ? `${$margin}px` : $margin;

    if ($orientation === "vertical") {
      return css`
        width: ${thicknessVal};
        height: auto;
        align-self: stretch;
        background-color: ${resolvedColor};
        margin: ${marginVal === "16px 0" ? "0 16px" : marginVal};
      `;
    }

    return css`
      height: ${thicknessVal};
      width: 100%;
      background-color: ${resolvedColor};
      margin: ${marginVal};
    `;
  }}
`;
