import styled from "styled-components";
import { getThemeColors } from "../colors";

export const BreadcrumbsNav = styled.nav`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: 14px;
`;

export const BreadcrumbsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const BreadcrumbItem = styled.li<{ $isLast: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ $isLast, ...props }) =>
    $isLast ? getThemeColors(props).primaryText : getThemeColors(props).secondaryTextHigh};
  font-weight: ${({ $isLast }) => ($isLast ? "600" : "400")};

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.15s;

    &:hover {
      color: ${(props) => getThemeColors(props).primary};
      text-decoration: underline;
    }
  }
`;

export const BreadcrumbSeparator = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 8px;
  color: ${(props) => getThemeColors(props).secondaryTextHigh}80;
  user-select: none;

  svg {
    width: 14px;
    height: 14px;
  }
`;
