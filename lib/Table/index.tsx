import React from "react";
import {
  TableWrapper,
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledTh,
  StyledTd,
} from "./styles";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  responsive?: boolean;
}

export const Table = ({ children, responsive = true, ...props }: TableProps) => {
  const tableContent = <StyledTable {...props}>{children}</StyledTable>;

  if (responsive) {
    return <TableWrapper>{tableContent}</TableWrapper>;
  }

  return tableContent;
};

export const Thead = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <StyledThead {...props}>{children}</StyledThead>
);

export const Tbody = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <StyledTbody {...props}>{children}</StyledTbody>
);

interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  striped?: boolean;
}

export const Tr = ({ children, striped = false, ...props }: TrProps) => (
  <StyledTr $striped={striped} {...props}>
    {children}
  </StyledTr>
);

export const Th = ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <StyledTh {...props}>{children}</StyledTh>
);

export const Td = ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <StyledTd {...props}>{children}</StyledTd>
);

export default Table;
