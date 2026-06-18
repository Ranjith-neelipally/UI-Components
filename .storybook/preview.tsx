// @ts-nocheck
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import type { Preview } from "@storybook/react";
import { generateThemeColors, configureTheme } from "../lib/colors";

const FloatingThemeController = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 99999;
  font-family: 'Poppins', sans-serif;
`;

const TriggerButton = styled.button<{ $color: string }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  border: 2px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Panel = styled.div`
  position: absolute;
  top: 54px;
  right: 0;
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
  width: 220px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #f3f4f6;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #9ca3af;
`;

const ColorInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input[type="color"] {
    -webkit-appearance: none;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
    padding: 0;
    
    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    &::-webkit-color-swatch {
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
    }
  }
`;

const ColorHexText = styled.span`
  font-family: monospace;
  font-size: 13px;
  background: rgba(255, 255, 255, 0.08);
  padding: 4px 8px;
  border-radius: 6px;
  flex: 1;
  text-align: center;
`;

const PresetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  margin-top: 4px;
`;

const PresetButton = styled.button<{ $color: string; $active: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  border: 2px solid ${({ $active }) => ($active ? "#ffffff" : "transparent")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.15);
  }
`;

const PRESET_COLORS = [
  "#CCCB75", // Olive (Default)
  "#1A73E8", // Classic Blue
  "#0F9D58", // Emerald Green
  "#FF5722", // Sunset Orange
  "#673AB7", // Rich Purple
  "#E91E63", // Crimson Rose
  "#FFEB3B", // Yellow
  "#00BCD4", // Cyan
  "#8BC34A", // Light Green
  "#9E9E9E", // Grey
];

const ThemeDecorator = (Story: any) => {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("storybook_theme_color") || "#CCCB75";
  });
  const [isOpen, setIsOpen] = useState(false);

  const themeColors = generateThemeColors(color);

  useEffect(() => {
    configureTheme(color);
    localStorage.setItem("storybook_theme_color", color);
  }, [color]);

  return (
    <ThemeProvider theme={themeColors}>
      <div style={{
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: themeColors.surfaceDefault,
        color: themeColors.primaryText,
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}>
        <Story />
      </div>
      <FloatingThemeController>
        <TriggerButton
          $color={color}
          onClick={() => setIsOpen(!isOpen)}
          title="Dynamic Theme Color Engine"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.35857 19.5 5.5 20 5.5 20.5C5.5 21.3284 6.17157 22 7 22H12Z" />
            <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
            <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
            <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
            <circle cx="15.5" cy="14.5" r="1.5" fill="currentColor" />
          </svg>
        </TriggerButton>

        {isOpen && (
          <Panel>
            <Title>Theme Seed Color</Title>
            <ColorInputWrapper>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <ColorHexText>{color.toUpperCase()}</ColorHexText>
            </ColorInputWrapper>
            
            <Title>Presets</Title>
            <PresetsGrid>
              {PRESET_COLORS.map((c) => (
                <PresetButton
                  key={c}
                  $color={c}
                  $active={color.toUpperCase() === c.toUpperCase()}
                  onClick={() => setColor(c)}
                />
              ))}
            </PresetsGrid>
          </Panel>
        )}
      </FloatingThemeController>
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Introduction", "Welcome", "*"],
      },
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;
