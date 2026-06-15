import styled, { css } from "styled-components";

export interface GridStyleProps {
  $columns?: number;
  $gap?: string | number;
  $alignItems?: string;
  $justifyContent?: string;
}

export const StyledGrid = styled.div<GridStyleProps>`
  display: grid;
  width: 100%;
  
  ${({ $columns = 12, $gap = "16px", $alignItems, $justifyContent }) => {
    const gapVal = typeof $gap === "number" ? `${$gap}px` : $gap;
    return css`
      grid-template-columns: repeat(${$columns}, minmax(0, 1fr));
      gap: ${gapVal};
      align-items: ${$alignItems || "stretch"};
      justify-content: ${$justifyContent || "stretch"};
    `;
  }}
`;

export interface ColStyleProps {
  $span?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  $offset?: number | { sm?: number; md?: number; lg?: number; xl?: number };
}

const getResponsiveSpan = (
  breakpoint: string,
  span?: number,
  offset?: number
) => {
  if (span === undefined && offset === undefined) return null;
  
  const spanStyles = span !== undefined ? `grid-column-end: span ${span};` : "";
  const offsetStyles = offset !== undefined ? `grid-column-start: ${offset + 1};` : "";

  const query = {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  }[breakpoint as "sm" | "md" | "lg" | "xl"];

  return css`
    @media (min-width: ${query}) {
      ${spanStyles}
      ${offsetStyles}
    }
  `;
};

export const StyledCol = styled.div<ColStyleProps>`
  grid-column: span 12; // default span

  ${({ $span, $offset }) => {
    // If $span is a number, apply directly
    if (typeof $span === "number" || typeof $offset === "number") {
      const s = typeof $span === "number" ? $span : undefined;
      const o = typeof $offset === "number" ? $offset : undefined;
      return css`
        ${s !== undefined && css`grid-column-end: span ${s};`}
        ${o !== undefined && css`grid-column-start: ${o + 1};`}
      `;
    }

    // Otherwise treat as responsive object
    const styles = [];
    
    // Default base styles
    const baseSpan = $span?.sm || 12;
    const baseOffset = $offset?.sm;
    styles.push(css`
      grid-column-end: span ${baseSpan};
      ${baseOffset !== undefined && css`grid-column-start: ${baseOffset + 1};`}
    `);

    // Responsive breakpoints
    if ($span?.md !== undefined || $offset?.md !== undefined) {
      styles.push(getResponsiveSpan("md", $span?.md, $offset?.md));
    }
    if ($span?.lg !== undefined || $offset?.lg !== undefined) {
      styles.push(getResponsiveSpan("lg", $span?.lg, $offset?.lg));
    }
    if ($span?.xl !== undefined || $offset?.xl !== undefined) {
      styles.push(getResponsiveSpan("xl", $span?.xl, $offset?.xl));
    }

    return styles;
  }}
`;
