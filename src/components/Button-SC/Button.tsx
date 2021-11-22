import styled, { css } from "styled-components";
import { theme } from "./theme";

export type ButtonVariants = "primary" | "secondary" | "default";
export type ButtonSize = "lg" | "md" | "sm";

interface ButtonProps {
  variant?: ButtonVariants;
  size?: ButtonSize;
  outline?: boolean;
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: ${theme.spacing["2"]} ${theme.spacing["3"]};
  border-radius: 3px;
  ${({ disabled = false }) =>
    disabled &&
    css`
      opacity: 50%;
      cursor: not-allowed;
    `}

  ${({ size = "md" }) =>
    css`
      font-size: ${theme.fontSize[size]};
    `}

  ${({ size = "md" }) =>
    css`
      font-size: ${theme.fontSize[size]};
    `}

    ${({ variant = "primary", outline = false, disabled }) => {
    if (outline) {
      return css`
        color: ${theme.colors[variant].default};
        border: 1px ${theme.colors[variant].default} solid;
        ${!disabled &&
        css`
          &:hover {
            color: ${theme.colors[variant].dark};
            border: 1px ${theme.colors[variant].dark} solid;
          }
        `}
      `;
    }

    return css`
      background: ${theme.colors[variant].default};
      ${!disabled &&
      css`
        &:hover {
          background: ${theme.colors[variant].dark};
        }
      `}
      color: ${theme.colors.white};
    `;
  }}
`;
