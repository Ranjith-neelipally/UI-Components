import React from "react";
import { StyledGrid, StyledCol } from "./styles";

export interface GridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: string | number;
  alignItems?: string;
  justifyContent?: string;
}

export interface ColProps {
  children: React.ReactNode;
  span?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  offset?: number | { sm?: number; md?: number; lg?: number; xl?: number };
}

export const Grid = ({
  children,
  columns = 12,
  gap = "16px",
  alignItems,
  justifyContent,
}: GridProps) => {
  return (
    <StyledGrid
      $columns={columns}
      $gap={gap}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
    >
      {children}
    </StyledGrid>
  );
};

export const Col = ({ children, span, offset }: ColProps) => {
  return (
    <StyledCol $span={span} $offset={offset}>
      {children}
    </StyledCol>
  );
};

export default Grid;
