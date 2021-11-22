import { FC } from "react";
import { Button as DefaultButton } from "@chakra-ui/react";

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
  const styles = {
    size,
    variant: outline ? "outline" : "solid",
    color: {
      primary: "green",
      secondary: "blue",
      default: "gray",
    },
  };

  return (
    <DefaultButton
      size={styles.size}
      colorScheme={styles.color[variant]}
      variant={styles.variant}
      isDisabled={disabled}
      className={className}
    >
      {children}
    </DefaultButton>
  );
};
