import styled from "styled-components";
import { NavItemProps, TopNavBarProps } from "./helpers";
import { getThemeColors } from "../colors";

export const TopNavigationBar = styled.nav<TopNavBarProps>`
  background-color: ${({ $backgroundColor, ...props }) =>
    $backgroundColor || getThemeColors(props).surfaceHigh};
  display: flex;
  padding: 16px 24px;
  font-family: inherit;
  border-radius: 12px;
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh};
  justify-content: ${({ $navLoaction }) =>
    $navLoaction !== "side" && "space-between"};
  flex-direction: ${({ $navLoaction }) =>
    $navLoaction === "side" ? "column" : "row"};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);

  gap: ${({ $navLoaction }) => $navLoaction === "side" && "32px"};
  width: ${({ $navLoaction }) => $navLoaction === "side" && "20%"};
  max-width: ${({ $navLoaction }) => $navLoaction === "side" && "250px"};
  h1 {
    margin: 0;
  }

  .main-section {
    display: flex;
    align-items: center;
    gap: ${({ $navLoaction }) => ($navLoaction === "side" ? "12px" : "8px")};

    .topNavIcon {
      max-width: 45px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "default")};
    }
  }

  .navlinks-section {
    display: flex;
    align-items: center;
    overflow-x: auto;
    width: ${({ $navLoaction }) => $navLoaction === "side" && "100%"};
    .hamburger {
      display: none;
      color: ${(props) => getThemeColors(props).primaryText};
    }
    @media screen and (max-width: 768px) {
      .hamburger {
        display: block;
        border: none;
        background-color: transparent;
      }
    }
  }
`;

export const NavHeaderComponent = styled.div<TopNavBarProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  .header {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ $navbarHeaderTextColor, ...props }) =>
      $navbarHeaderTextColor || getThemeColors(props).primaryText};
    line-height: 16px;
    letter-spacing: 0.25px;
  }
  .description {
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ $navbarHeaderDescColor, ...props }) =>
      $navbarHeaderDescColor || getThemeColors(props).secondaryTextHigh};
    line-height: 14px;
    letter-spacing: 0.25px;
  }
`;

export const NavList = styled.ul<TopNavBarProps>`
  display: flex;
  gap: 16px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-direction: ${({ $navLoaction }) =>
    $navLoaction === "side" ? "column" : "row"};
  flex: 1;

  li {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.button<NavItemProps>`
  white-space: nowrap;
  background-color: ${({ $isActive, $navItemactiveColor, ...props }) =>
    $isActive
      ? $navItemactiveColor || getThemeColors(props).primary
      : "transparent"};
  padding: 10px 24px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${({ $isActive, $navItemActiveTextColor, ...props }) =>
    $isActive
      ? $navItemActiveTextColor || getThemeColors(props).primaryContrastText
      : getThemeColors(props).secondaryTextHigh};
  cursor: pointer;
  outline: none;
  border: none;
  flex: 1;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ $navItemHoverColor, $isActive, ...props }) =>
      $isActive
        ? $navItemHoverColor || getThemeColors(props).primaryHigh
        : `${getThemeColors(props).primary}20`};
    color: ${({ $isActive, $navItemActiveTextColor, ...props }) =>
      $isActive
        ? $navItemActiveTextColor || getThemeColors(props).primaryContrastText
        : getThemeColors(props).primaryText};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => getThemeColors(props).primaryHigh};
    color: #ffffff;
    opacity: 0.5;
  }
`;

export const MobileNavBar = styled.ul<TopNavBarProps>`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: ${({ $backgroundColor, ...props }) =>
    $backgroundColor || getThemeColors(props).surfaceHigh};
  height: 100dvh;
  box-shadow: -5px 0px 12px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh};
  border-radius: 12px 0 0 12px;
  z-index: 1000;

  .wrapper {
    padding: 16px 24px;
    gap: 12px;
    display: flex;
    flex-direction: column;
  }

  .close-icon {
    display: flex;
    padding: 16px;
    width: fit-content;
    cursor: pointer;
    color: ${(props) => getThemeColors(props).primaryText};
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
