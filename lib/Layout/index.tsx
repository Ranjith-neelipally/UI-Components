import styled from "styled-components";
import { getThemeColors } from "../colors";

const formatSize = (value: string | number | undefined, defaultValue: string): string => {
  if (value === undefined) return defaultValue;
  return typeof value === "number" ? `${value}px` : value;
};

export interface ContainerProps {
  $gap?: string | number;
  $padding?: string | number;
  $flexDirection?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "column"};
  gap: ${({ $gap }) => formatSize($gap, "24px")};
  width: 100%;
  padding: ${({ $padding }) => formatSize($padding, "12px")};
  overflow-y: auto;
  box-sizing: border-box;
`;

export interface HeaderPanelProps {
  $backgroundColor?: string;
  $borderRadius?: string | number;
  $padding?: string | number;
  $gap?: string | number;
}

export const HeaderPanel = styled.div<HeaderPanelProps>`
  background-color: ${({ $backgroundColor, ...props }) =>
    $backgroundColor || getThemeColors(props).surfaceHigh};
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh}40;
  border-radius: ${({ $borderRadius }) => formatSize($borderRadius, "16px")};
  padding: ${({ $padding }) => formatSize($padding, "24px")};
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => formatSize($gap, "16px")};
`;

export interface ThemeSelectorWrapperProps {
  $backgroundColor?: string;
  $padding?: string | number;
  $gap?: string | number;
  $borderRadius?: string | number;
}

export const ThemeSelectorWrapper = styled.div<ThemeSelectorWrapperProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ $gap }) => formatSize($gap, "20px")};
  background-color: ${({ $backgroundColor, ...props }) =>
    $backgroundColor || getThemeColors(props).surfaceDefault};
  padding: ${({ $padding }) => formatSize($padding, "16px")};
  border-radius: ${({ $borderRadius }) => formatSize($borderRadius, "12px")};
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh}20;
`;

export const PresetColorButton = styled.button<{ $color: string; $isActive: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  border: 3px solid ${({ $isActive, ...props }) => ($isActive ? getThemeColors(props).primaryText : "transparent")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.15);
  }
`;

export const SwatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 12px;
  margin-top: 8px;
`;

export const SwatchCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh}30;
  background-color: ${(props) => getThemeColors(props).surfaceDefault};
  text-align: center;
  font-size: 11px;
`;

export const SwatchColor = styled.div<{ $color: string }>`
  height: 60px;
  background-color: ${({ $color }) => $color};
  border-bottom: 1px solid ${(props) => getThemeColors(props).primaryHigh}20;
`;

export const SwatchDetails = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${(props) => getThemeColors(props).primaryText};
  font-weight: 600;

  span {
    font-size: 10px;
    color: ${(props) => getThemeColors(props).secondaryTextHigh};
    font-weight: normal;
  }
`;

export interface ComponentBoxProps {
  $backgroundColor?: string;
  $borderRadius?: string | number;
  $padding?: string | number;
  $gap?: string | number;
  $border?: string;
}

export const ComponentBox = styled.div<ComponentBoxProps>`
  background-color: ${({ $backgroundColor, ...props }) =>
    $backgroundColor || getThemeColors(props).surfaceHigh};
  border: ${({ $border, ...props }) =>
    $border || `1px solid ${getThemeColors(props).primaryHigh}30`};
  border-radius: ${({ $borderRadius }) => formatSize($borderRadius, "16px")};
  padding: ${({ $padding }) => formatSize($padding, "20px")};
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => formatSize($gap, "16px")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
`;

export interface BoxHeaderProps {
  $borderBottom?: string;
  $paddingBottom?: string | number;
  $marginBottom?: string | number;
}

export const BoxHeader = styled.div<BoxHeaderProps>`
  border-bottom: ${({ $borderBottom, ...props }) =>
    $borderBottom || `1px solid ${getThemeColors(props).primaryHigh}20`};
  padding-bottom: ${({ $paddingBottom }) => formatSize($paddingBottom, "10px")};
  margin-bottom: ${({ $marginBottom }) => formatSize($marginBottom, "6px")};
`;

export interface FlexRowProps {
  $gap?: string | number;
  $alignItems?: string;
  $justifyContent?: string;
  $flexWrap?: string;
}

export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  flex-wrap: ${({ $flexWrap }) => $flexWrap || "wrap"};
  gap: ${({ $gap }) => formatSize($gap, "12px")};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
`;
