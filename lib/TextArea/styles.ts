import styled from "styled-components";
import { getThemeColors } from "../colors";

export const TextAreaWrapper = styled.div<{ $fullWidth: boolean; $disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  font-family: inherit;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => getThemeColors(props).primaryText};
`;

export const StyledTextArea = styled.textarea<{
  $error?: boolean;
  $success?: boolean;
  $resizable: "none" | "both" | "horizontal" | "vertical";
}>`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  resize: ${({ $resizable }) => $resizable};
  border: 2px solid
    ${({ $error, $success, ...props }) => {
      const colors = getThemeColors(props);
      if ($error) return colors.danger;
      if ($success) return colors.success;
      return `${colors.primaryHigh}80`;
    }};
  background-color: ${(props) => getThemeColors(props).surfaceHigh};
  color: ${(props) => getThemeColors(props).primaryText};
  font-size: 15px;
  font-family: inherit;
  line-height: 1.5;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);

  &::placeholder {
    color: ${(props) => getThemeColors(props).secondaryTextHigh}a0;
  }

  &:focus {
    border-color: ${({ $error, $success, ...props }) => {
      const colors = getThemeColors(props);
      if ($error) return colors.danger;
      if ($success) return colors.success;
      return colors.primary;
    }};
    box-shadow: 0 0 0 4px
      ${({ $error, $success, ...props }) => {
        const colors = getThemeColors(props);
        if ($error) return `${colors.danger}20`;
        if ($success) return `${colors.success}20`;
        return `${colors.primary}20`;
      }};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => getThemeColors(props).surfaceDefault};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => getThemeColors(props).danger};
`;
