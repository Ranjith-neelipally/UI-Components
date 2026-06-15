import styled, { css } from "styled-components";
import { getThemeColors } from "../colors";

export const StyledLink = styled.a<{ $variant: "primary" | "secondary" | "subtle" }>`
  font-family: inherit;
  font-size: inherit;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1.5px;
    bottom: -1px;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  ${({ $variant, ...props }) => {
    const colors = getThemeColors(props);
    switch ($variant) {
      case "secondary":
        return css`
          color: ${colors.secondaryTextHigh};
          &::after {
            background-color: ${colors.secondaryTextHigh};
          }
          &:hover {
            color: ${colors.primary};
          }
        `;
      case "subtle":
        return css`
          color: ${colors.secondaryTextHigh}a0;
          font-weight: 400;
          &::after {
            background-color: ${colors.primary};
          }
          &:hover {
            color: ${colors.primary};
          }
        `;
      case "primary":
      default:
        return css`
          color: ${colors.primary};
          &::after {
            background-color: ${colors.primary};
          }
          &:hover {
            color: ${colors.primaryHigh};
          }
        `;
    }
  }}
`;
