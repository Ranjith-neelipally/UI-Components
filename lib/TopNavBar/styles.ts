import styled from "styled-components";
import { NavItemProps, TopNavBarProps } from "./helpers";

export const TopNavigationBar = styled.nav<TopNavBarProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  padding: 16px 24px;
  font-family: "Nunito", sans-serif;
  border-radius: 12px;
  border: 1px solid #cac7b5;
  justify-content: space-between;

  h1 {
    margin: 0;
  }

  .left-section {
    display: flex;
    align-items: center;
    gap: 8px;

    .topNavIcon {
      max-width: 45px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "default")};
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    overflow-x: auto;
    .hamburger {
      display: none;
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
    color: ${({ $navbarHeaderTextColor }) => $navbarHeaderTextColor};
    line-height: 16px;
    letter-spacing: 0.25px;
  }
  .description {
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ $navbarHeaderDescColor }) => $navbarHeaderDescColor};
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.button<NavItemProps>`
  white-space: nowrap;
  background-color: ${({ $isActive, $navItemactiveColor }) =>
    $isActive ? $navItemactiveColor : `${$navItemactiveColor}10`};
  padding: 10px 24px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  font-weight: normal;
  color: ${({ $isActive, $navItemActiveTextColor }) =>
    $isActive ? $navItemActiveTextColor : "black"};
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background-color: ${({ $navItemHoverColor, $isActive }) =>
      $isActive ? $navItemHoverColor : `${$navItemHoverColor}50`};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #cac7b5;
    color: #ffffff;
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
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  height: 100dvh;
  box-shadow: -5px 0px 12px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #cac7b5;
  border-radius: 12px 0 0 12px;

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
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
