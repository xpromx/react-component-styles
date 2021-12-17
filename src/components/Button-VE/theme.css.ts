import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    white: "rgb(255, 255, 255)",
    primary: "rgba(5, 150, 105)",
    primaryDark: "rgb(6, 95, 70)",
    secondary: "rgb(37, 99, 235)",
    secondaryDark: "rgb(30, 64, 175)",
    gray: "rgb(75, 85, 99)",
    grayDark: "rgb(31, 41, 55)",
  },
  fontSize: {
    sm: "14px",
    md: "16px",
    lg: "18px",
  },
  spacing: {
    2: "6px",
    3: "8px",
  },
});
