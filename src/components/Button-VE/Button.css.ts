import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const base = style({
  padding: `${vars.spacing[3]} ${vars.spacing[2]}`,
  borderRadius: "3px",
});

export const disabled = style({
  opacity: "50%",
  cursor: "not-allowed",
});

export const variants = styleVariants({
  primary: {
    background: vars.color.primary,
    color: vars.color.white,
  },
  secondary: {
    background: vars.color.secondary,
    color: vars.color.white,
  },
  default: {
    background: vars.color.gray,
    color: vars.color.white,
  },
});

export const variantsHover = styleVariants({
  primary: {
    ":hover": {
      backgroundColor: vars.color.primaryDark,
    },
  },
  secondary: {
    ":hover": {
      backgroundColor: vars.color.secondaryDark,
    },
  },
  default: {
    ":hover": {
      backgroundColor: vars.color.grayDark,
    },
  },
});

export const variantsOutline = styleVariants({
  primary: {
    border: `1px solid ${vars.color.primary}`,
    color: vars.color.primary,
    ":hover": {
      borderColor: vars.color.primaryDark,
      color: vars.color.primaryDark,
    },
  },
  secondary: {
    border: `1px solid ${vars.color.secondary}`,
    color: vars.color.secondary,
    ":hover": {
      borderColor: vars.color.secondaryDark,
      color: vars.color.secondaryDark,
    },
  },
  default: {
    border: `1px solid ${vars.color.gray}`,
    color: vars.color.gray,
    ":hover": {
      borderColor: vars.color.grayDark,
      color: vars.color.grayDark,
    },
  },
});

export const variantsOutlineHover = styleVariants({
  primary: {
    ":hover": {
      borderColor: vars.color.primaryDark,
      color: vars.color.primaryDark,
    },
  },
  secondary: {
    ":hover": {
      borderColor: vars.color.secondaryDark,
      color: vars.color.secondaryDark,
    },
  },
  default: {
    ":hover": {
      borderColor: vars.color.grayDark,
      color: vars.color.grayDark,
    },
  },
});

export const sizes = styleVariants({
  sm: { fontSize: vars.fontSize.sm },
  md: { fontSize: vars.fontSize.md },
  lg: { fontSize: vars.fontSize.lg },
});
