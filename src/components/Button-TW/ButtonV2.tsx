import { FC } from "react";

export type ButtonVariants = "primary" | "secondary" | "default";
export type ButtonSize = "lg" | "md" | "sm";

interface ButtonProps {
  variant?: ButtonVariants;
  size?: ButtonSize;
  outline?: boolean;
  className?: string;
  disabled?: boolean;
}

const theme = {
  colors: {
    primary: "green",
    secondary: "blue",
    default: "gray",
  },
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  outline = false,
  className = "",
  disabled = false,
}) => {
  const classes: string[] = ["p-2 rounded"];
  if (disabled) {
    classes.push("opacity-50 cursor-not-allowed");
  }

  const color = theme.colors[variant];
  classes.push(`px-3 py-2 text-${size}`);

  if (!outline) {
    classes.push(`bg-${color}-600 text-white`);

    if (!disabled) {
      classes.push(`hover:bg-${color}-800`);
    }
  }

  if (outline) {
    classes.push(`border border-${color}-600 text-${color}-600`);

    if (!disabled) {
      classes.push(`hover:border-${color}-800 hover:text-${color}-800`);
    }
  }

  return <button className={classes.join(" ")}>{children}</button>;
};
