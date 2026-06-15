import styled from "styled-components";
import { getThemeColors } from "../colors";

export const StyledList = styled.ul<{ $ordered?: boolean }>`
  margin: 0;
  padding: 0;
  padding-left: 24px;
  list-style-type: ${({ $ordered }) => ($ordered ? "decimal" : "disc")};
  font-family: inherit;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledListItem = styled.li`
  font-size: 14px;
  line-height: 1.6;
  color: ${(props) => getThemeColors(props).primaryText};
  font-weight: 500;

  &::marker {
    color: ${(props) => getThemeColors(props).primary};
    font-weight: bold;
  }
`;

export const CustomListItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.6;
  color: ${(props) => getThemeColors(props).primaryText};
  font-weight: 500;
`;

export const ItemIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => getThemeColors(props).primary};
  margin-top: 2px;
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
  }
`;
