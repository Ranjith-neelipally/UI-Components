import styled, { css, keyframes } from "styled-components";
import { getThemeColors } from "../colors";

export const SelectWrapper = styled.div<{ $fullWidth: boolean; $disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  font-family: inherit;
  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => getThemeColors(props).primaryText};
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelectTrigger = styled.div<{
  $error?: boolean;
  $success?: boolean;
  $isOpen?: boolean;
  $disabled?: boolean;
}>`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 2px solid
    ${({ $error, $success, $isOpen, ...props }) => {
      const colors = getThemeColors(props);
      if ($error) return colors.danger;
      if ($success) return colors.success;
      if ($isOpen) return colors.primary;
      return `${colors.primaryHigh}80`;
    }};
  background-color: ${(props) => getThemeColors(props).surfaceHigh};
  color: ${(props) => getThemeColors(props).primaryText};
  font-size: 15px;
  font-family: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-in-out;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
  user-select: none;

  &:focus {
    outline: none;
  }

  ${({ $isOpen, $error, $success, ...props }) =>
    $isOpen &&
    css`
      box-shadow: 0 0 0 4px
        ${() => {
          const colors = getThemeColors(props);
          if ($error) return `${colors.danger}20`;
          if ($success) return `${colors.success}20`;
          return `${colors.primary}20`;
        }};
    `}
`;

export const DropdownChevron = styled.span<{ $isOpen: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  color: ${(props) => getThemeColors(props).secondaryTextHigh};

  svg {
    width: 18px;
    height: 18px;
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const OptionsMenu = styled.ul`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background-color: ${(props) => getThemeColors(props).surfaceHigh};
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh}80;
  border-radius: 12px;
  margin: 0;
  padding: 6px 0;
  list-style-type: none;
  max-height: 240px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  animation: ${slideDown} 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => getThemeColors(props).primaryHigh}80;
    border-radius: 3px;
  }
`;

export const OptionItem = styled.li<{ $isSelected: boolean }>`
  padding: 10px 16px;
  font-size: 14px;
  font-weight: ${({ $isSelected }) => ($isSelected ? "600" : "500")};
  color: ${({ $isSelected, ...props }) =>
    $isSelected ? getThemeColors(props).primaryContrastText : getThemeColors(props).primaryText};
  background-color: ${({ $isSelected, ...props }) =>
    $isSelected ? getThemeColors(props).primary : "transparent"};
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s;

  &:hover {
    background-color: ${({ $isSelected, ...props }) =>
      $isSelected ? getThemeColors(props).primary : `${getThemeColors(props).primary}15`};
    color: ${({ $isSelected, ...props }) =>
      $isSelected ? getThemeColors(props).primaryContrastText : getThemeColors(props).primary};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => getThemeColors(props).danger};
`;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  flex: 1;
  margin-right: 8px;
`;

