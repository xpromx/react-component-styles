import { FC } from "react";
import classNames from "classnames";
import * as styles from "./Button.css";

export type ButtonVariants = keyof typeof styles.variants;
export type ButtonSize = keyof typeof styles.sizes;
interface ButtonProps {
  variant: ButtonVariants;
  size: ButtonSize;
  outline?: boolean;
  className?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "default",
  className = "",
  outline = false,
  size = "md",
  disabled = false,
}) => {
  const classes = classNames(className, styles.base, styles.sizes[size], {
    [styles.variants[variant]]: !outline,
    [styles.variantsOutline[variant]]: outline,
    [styles.variantsHover[variant]]: !outline && !disabled,
    [styles.variantsOutlineHover[variant]]: outline && !disabled,
    [styles.disabled]: disabled,
  });

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};
