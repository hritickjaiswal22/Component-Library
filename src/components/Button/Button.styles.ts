import styled, { css, CSSObject } from "styled-components";
import { ButtonVariant, ButtonStyles } from "./Button";

interface StyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sx?: ButtonStyles & CSSObject;
  variant?: ButtonVariant;
  loading?: boolean;
}

const handleVariant = (p: StyledButtonProps) => {
  switch (p.variant) {
    case "primary":
      return css`
        background-color: #007bff;
        color: white;
        border: none;

        &:hover {
          background-color: #0056b3;
        }
      `;
    case "secondary":
      return css`
        background-color: #6c757d;
        color: white;
        border: none;

        &:hover {
          background-color: #545b62;
        }
      `;
    case "outline":
      return css`
        background-color: transparent;
        color: #007bff;
        border: 2px solid #007bff;

        &:hover {
          background-color: #007bff;
          color: white;
        }
      `;
    default:
      return css`
        background-color: #f8f9fa;
        color: #212529;
        border: 1px solid #dee2e6;

        &:hover {
          background-color: #e9ecef;
        }
      `;
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  /* Base styles */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  transition-property: background-color, border-color, color, transform;
  transition-timing-function: ease;
  transition-duration: 200ms;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 8px 16px;
  border-radius: 4px;

  /* Variant styles */
  ${handleVariant}

  /* Loading state */
  ${(p) =>
    p.loading &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
    `}

  /* Custom styles from sx prop - this will override everything above */
  ${(p) => p.sx && css(p.sx as any)}
  
  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Focus styles for accessibility */
  &:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;
