import styled, { css } from "styled-components";

export interface SpacerStyleProps {
  $x?: string | number;
  $y?: string | number;
  $flex?: string | number;
}

export const StyledSpacer = styled.div<SpacerStyleProps>`
  flex-shrink: 0;

  ${({ $x, $y, $flex }) => {
    const width = $x !== undefined ? (typeof $x === "number" ? `${$x}px` : $x) : undefined;
    const height = $y !== undefined ? (typeof $y === "number" ? `${$y}px` : $y) : undefined;

    return css`
      width: ${width || "auto"};
      height: ${height || "auto"};
      
      ${width && !height && css`display: inline-block;`}
      ${!width && height && css`display: block;`}
      ${$flex !== undefined && css`flex: ${$flex};`}
    `;
  }}
`;
