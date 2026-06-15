import styled from "styled-components";
import { getThemeColors } from "../colors";

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh}30;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: inherit;
  text-align: left;
  background-color: ${(props) => getThemeColors(props).surfaceHigh};
`;

export const StyledThead = styled.thead`
  background-color: ${(props) => getThemeColors(props).surfaceDefault};
  border-bottom: 2px solid ${(props) => getThemeColors(props).primaryHigh}40;
`;

export const StyledTbody = styled.tbody`
  & > tr:not(:last-child) {
    border-bottom: 1px solid ${(props) => getThemeColors(props).primaryHigh}15;
  }
`;

export const StyledTr = styled.tr<{ $striped?: boolean }>`
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${(props) => getThemeColors(props).primary}08;
  }

  ${({ $striped, ...props }) =>
    $striped &&
    `
    &:nth-child(even) {
      background-color: ${getThemeColors(props).surfaceDefault}50;
    }
  `}
`;

export const StyledTh = styled.th`
  padding: 14px 18px;
  font-size: 13px;
  font-weight: 700;
  color: ${(props) => getThemeColors(props).primaryText};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const StyledTd = styled.td`
  padding: 14px 18px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => getThemeColors(props).secondaryTextHigh};
`;
