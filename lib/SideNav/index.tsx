import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getThemeColors } from "../colors";
import { NavItem } from "../types/NavTypes";

export interface SideNavProps {
  items: NavItem[];
  activeRoute?: string;
  onItemClick?: (item: NavItem) => void;
  collapsed?: boolean;
  className?: string;
}

const SideNavContainer = styled.aside<{ $collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${({ $collapsed }) => ($collapsed ? "64px" : "260px")};
  background-color: ${(props) => getThemeColors(props).surfaceHigh};
  border-right: 1px solid ${(props) => getThemeColors(props).primaryHigh}30;
  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-sizing: border-box;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => getThemeColors(props).primaryHigh}30;
    border-radius: 4px;
  }
`;

const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ItemButton = styled.button<{
  $isActive: boolean;
  $depth: number;
  $disabled?: boolean;
  $collapsed: boolean;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  background: ${({ $isActive, ...props }) =>
    $isActive ? `${getThemeColors(props).primary}18` : "transparent"};
  color: ${({ $isActive, $disabled, ...props }) => {
    if ($disabled) return `${getThemeColors(props).secondaryTextHigh}50`;
    return $isActive ? getThemeColors(props).primaryText : getThemeColors(props).secondaryTextHigh;
  }};
  padding: ${({ $collapsed }) => ($collapsed ? "12px 0" : "10px 16px")};
  padding-left: ${({ $depth, $collapsed }) => ($collapsed ? "0" : `${16 + $depth * 16}px`)};
  justify-content: ${({ $collapsed }) => ($collapsed ? "center" : "flex-start")};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  font-size: 14px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "500")};
  text-align: left;
  transition: all 0.2s ease;
  position: relative;
  outline: none;

  &:hover {
    background: ${({ $isActive, $disabled, ...props }) => {
      if ($disabled) return "transparent";
      return $isActive ? `${getThemeColors(props).primary}22` : `${getThemeColors(props).primary}0a`;
    }};
    color: ${(props) => getThemeColors(props).primaryText};
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10%;
    height: 80%;
    width: 3px;
    background-color: ${(props) => getThemeColors(props).primary};
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transition: opacity 0.2s ease;
    border-radius: 0 4px 4px 0;
  }
`;

const IconContainer = styled.span<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: ${({ $collapsed }) => ($collapsed ? "0" : "12px")};
  flex-shrink: 0;
`;

const LetterAvatar = styled.div<{ $isActive: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: ${({ $isActive, ...props }) =>
    $isActive ? getThemeColors(props).primary : `${getThemeColors(props).primaryHigh}20`};
  color: ${({ $isActive, ...props }) =>
    $isActive ? getThemeColors(props).primaryContrastText : getThemeColors(props).primaryText};
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
`;

const Label = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Badge = styled.span`
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 10px;
  background-color: ${(props) => getThemeColors(props).primary};
  color: ${(props) => getThemeColors(props).primaryContrastText};
  font-weight: 600;
  margin-left: 8px;
`;

const ArrowIcon = styled.svg<{ $isOpen: boolean }>`
  width: 16px;
  height: 16px;
  fill: currentColor;
  transform: rotate(${({ $isOpen }) => ($isOpen ? "90deg" : "0deg")});
  transition: transform 0.2s ease;
  flex-shrink: 0;
  margin-left: 8px;
  opacity: 0.7;
`;

const SubNavContainer = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

const SubNavContent = styled.ul`
  grid-row: 1 / span 1;
  overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

// Helper function to check if active route is a descendant
const hasActiveChild = (item: NavItem, activeRoute?: string): boolean => {
  if (!activeRoute) return false;
  if (item.children) {
    return item.children.some(
      (child) =>
        child.route === activeRoute ||
        child.id === activeRoute ||
        hasActiveChild(child, activeRoute)
    );
  }
  return false;
};

interface SideNavItemProps {
  item: NavItem;
  depth: number;
  activeRoute?: string;
  onItemClick?: (item: NavItem) => void;
  collapsed: boolean;
}

const SideNavItem: React.FC<SideNavItemProps> = ({
  item,
  depth,
  activeRoute,
  onItemClick,
  collapsed,
}) => {
  const isParent = !!item.children && item.children.length > 0;
  const isChildActive = activeRoute ? hasActiveChild(item, activeRoute) : false;
  const isSelfActive = activeRoute ? (item.route === activeRoute || item.id === activeRoute) : !!item.$isActive;

  const [isOpen, setIsOpen] = useState(isChildActive);

  useEffect(() => {
    if (isChildActive) {
      setIsOpen(true);
    }
  }, [isChildActive, activeRoute]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.disabled) return;

    if (isParent) {
      if (collapsed) {
        if (onItemClick) onItemClick(item);
      } else {
        setIsOpen(!isOpen);
      }
    } else {
      if (onItemClick) {
        onItemClick(item);
      }
      if (item.onClick) {
        item.onClick();
      }
    }
  };

  const getFirstTwoLetters = (label: string) => {
    return label.substring(0, 2).toUpperCase();
  };

  return (
    <ItemWrapper>
      <ItemButton
        $isActive={isSelfActive}
        $depth={depth}
        $disabled={item.disabled}
        $collapsed={collapsed}
        onClick={handleClick}
        title={collapsed ? item.label : undefined}
      >
        <IconContainer $collapsed={collapsed}>
          {item.icon ? (
            item.icon
          ) : (
            <LetterAvatar $isActive={isSelfActive}>{getFirstTwoLetters(item.label)}</LetterAvatar>
          )}
        </IconContainer>

        {!collapsed && (
          <>
            <Label>{item.label}</Label>
            {item.badge && <Badge>{item.badge}</Badge>}
            {isParent && (
              <ArrowIcon viewBox="0 0 24 24" $isOpen={isOpen}>
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </ArrowIcon>
            )}
          </>
        )}
      </ItemButton>

      {isParent && !collapsed && (
        <SubNavContainer $isOpen={isOpen}>
          <SubNavContent>
            {item.children!.map((child) => (
              <SideNavItem
                key={child.id}
                item={child}
                depth={depth + 1}
                activeRoute={activeRoute}
                onItemClick={onItemClick}
                collapsed={collapsed}
              />
            ))}
          </SubNavContent>
        </SubNavContainer>
      )}
    </ItemWrapper>
  );
};

export const SideNav: React.FC<SideNavProps> = ({
  items,
  activeRoute,
  onItemClick,
  collapsed = false,
  className,
}) => {
  return (
    <SideNavContainer $collapsed={collapsed} className={className}>
      <NavList>
        {items.map((item) => (
          <SideNavItem
            key={item.id}
            item={item}
            depth={0}
            activeRoute={activeRoute}
            onItemClick={onItemClick}
            collapsed={collapsed}
          />
        ))}
      </NavList>
    </SideNavContainer>
  );
};

export default SideNav;
