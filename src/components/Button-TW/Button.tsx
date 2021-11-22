import classNames from "classnames";
import { FC } from "react";

export type ButtonVariants = "primary" | "secondary" | "default";
export type ButtonSize = "lg" | "md" | "sm";
interface VariantProps {
  default: string;
  hover: string;
}
interface ButtonStyles {
  base: string;
  disabled: string;
  sizes: Record<ButtonSize, string>;
  variants: Record<ButtonVariants, { bg: VariantProps; outline: VariantProps }>;
}

const styles: ButtonStyles = {
  base: "p-2 rounded",
  disabled: "opacity-50 cursor-not-allowed",
  sizes: {
    lg: "px-3 py-2 text-lg",
    md: "px-3 py-2  text-base",
    sm: "px-3 py-2 text-sm",
  },
  variants: {
    primary: {
      bg: {
        default: "bg-green-600 text-white",
        hover: "hover:bg-green-800",
      },
      outline: {
        default: "border border-green-600  text-green-600",
        hover: "hover:border-green-800 hover:text-green-800",
      },
    },
    secondary: {
      bg: {
        default: "bg-blue-600 text-white",
        hover: "hover:bg-blue-800",
      },
      outline: {
        default: "border border-blue-600 text-blue-600",
        hover: "hover:border-blue-800 hover:text-blue-800",
      },
    },
    default: {
      bg: {
        default: "bg-gray-600 text-white",
        hover: "hover:bg-gray-800",
      },
      outline: {
        default: "border border-gray-600  text-gray-600",
        hover: "hover:border-gray-800 hover:text-gray-800",
      },
    },
  },
};

interface ButtonProps {
  variant?: ButtonVariants;
  size?: ButtonSize;
  outline?: boolean;
  className?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  outline = false,
  className = "",
  disabled = false,
}) => {
  const style = outline ? "outline" : "bg";
  const classes = classNames(
    styles.base,
    styles.variants[variant][style]["default"],
    styles.sizes[size],
    {
      [styles.disabled]: disabled,
      [styles.variants[variant][style]["hover"]]: !disabled,
    },
    className
  );
  return <button className={classes}>{children}</button>;
};
