import tinycolor from "tinycolor2";

export interface ColorsInterface {
  surfaceDefault: string;
  surfaceHigh: string;
  primary: string;
  primaryHigh: string;
  primaryText: string;
  primaryContrastText: string;
  secondaryTextHigh: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
}

export const generateThemeColors = (
  primaryColor: string,
  overrides?: Partial<ColorsInterface>
): ColorsInterface => {
  const primary = tinycolor(primaryColor);
  const isDark = primary.isDark();
  const { h, s } = primary.toHsl();

  // Dynamically calculate surface and high contrast text colors based on HSL properties
  const surfaceDefault = tinycolor({
    h: Math.max(0, h - 10),
    s: Math.max(0.05, s - 0.3),
    l: 0.84,
  }).toHexString();

  const surfaceHigh = tinycolor({
    h: Math.max(0, h - 10),
    s: Math.max(0.05, s - 0.25),
    l: 0.9,
  }).toHexString();

  const primaryHigh = tinycolor({
    h: Math.max(0, h - 9),
    s: Math.max(0.05, s - 0.28),
    l: 0.75,
  }).toHexString();

  const primaryText = tinycolor({
    h,
    s: Math.min(1.0, s + 0.15),
    l: 0.1,
  }).toHexString();

  const secondaryTextHigh = tinycolor({
    h,
    s: Math.min(1.0, s + 0.17),
    l: 0.28,
  }).toHexString();

  const primaryContrastText = isDark ? "#ffffff" : primaryText;

  return {
    primary: primaryColor,
    primaryText,
    primaryContrastText,
    secondaryTextHigh,
    primaryHigh,
    surfaceDefault,
    surfaceHigh,
    success: "#67C23A",
    warning: "#E6A23C",
    danger: "#F56C6C",
    info: "#909399",
    ...overrides,
  };
};

// Global theme state for runtime customization (fallback when no ThemeProvider is used)
let globalTheme = generateThemeColors("#CCCB75");

export const configureTheme = (
  primaryColor: string,
  overrides?: Partial<ColorsInterface>
): ColorsInterface => {
  globalTheme = generateThemeColors(primaryColor, overrides);
  // Also update ThemeColors reference properties for compatibility
  Object.assign(ThemeColors, globalTheme);
  return globalTheme;
};

export const getThemeColors = (props?: any): ColorsInterface => {
  // If the component is wrapped in styled-components ThemeProvider, use props.theme
  if (props?.theme && props.theme.primary) {
    return props.theme;
  }
  return globalTheme;
};

// Exporting default ThemeColors for backwards compatibility
export const ThemeColors: ColorsInterface = { ...globalTheme };
