import { FC } from "react";
import { styles } from "./Button.css";

export type ButtonVariants = "primary" | "secondary" | "default";
export type ButtonSize = "lg" | "md" | "sm";
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
  const classes = styles({
    color: outline ? undefined : variant,
    outline: outline ? variant : undefined,
    size,
    disabled,
  });
  return (
    <button className={[classes, className].join(" ")} disabled={disabled}>
      {children}
    </button>
  );
};
