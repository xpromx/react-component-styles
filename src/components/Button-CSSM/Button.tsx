import { FC } from "react";
import styles from "./Button.module.css";

export type ButtonVariants = "primary" | "secondary" | "default";
export type ButtonSize = "lg" | "md" | "sm";

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
  const buttonVariant = outline ? `${variant}--outline` : variant;
  const classes = [
    className,
    styles.button,
    styles[`button--${buttonVariant}`],
    styles[`button--size--${size}`],
    disabled ? styles["button--disabled"] : "",
    disabled ? styles[`button--${buttonVariant}--disabled`] : "",
  ];

  return <button className={classes.join(" ")}>{children}</button>;
};
