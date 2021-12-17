import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const styles = recipe({
  base: {
    padding: `${vars.spacing[3]} ${vars.spacing[2]}`,
    borderRadius: "3px",
  },
  variants: {
    size: {
      sm: { fontSize: vars.fontSize.sm },
      md: { fontSize: vars.fontSize.md },
      lg: { fontSize: vars.fontSize.lg },
    },
    disabled: {
      true: { opacity: "50%", cursor: "not-allowed" },
    },
    color: {
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
        ":hover": {
          backgroundColor: vars.color.primaryDark,
        },
      },
      secondary: {
        backgroundColor: vars.color.secondary,
        color: vars.color.white,
        ":hover": {
          backgroundColor: vars.color.secondaryDark,
        },
      },
      default: {
        backgroundColor: vars.color.gray,
        color: vars.color.white,
        ":hover": {
          backgroundColor: vars.color.grayDark,
        },
      },
    },
    outline: {
      primary: {
        border: `1px ${vars.color.primary} solid`,
        color: vars.color.primary,
        ":hover": {
          borderColor: vars.color.primaryDark,
          color: vars.color.primaryDark,
        },
      },
      secondary: {
        border: `1px ${vars.color.secondary} solid`,
        color: vars.color.secondary,
        ":hover": {
          borderColor: vars.color.secondaryDark,
          color: vars.color.secondaryDark,
        },
      },
      default: {
        border: `1px ${vars.color.gray} solid`,
        color: vars.color.gray,
        ":hover": {
          borderColor: vars.color.grayDark,
          color: vars.color.grayDark,
        },
      },
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof styles>;
