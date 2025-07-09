import React, { ReactNode } from "react";
import { CSSObject } from "styled-components";

import { StyledButton } from "./Button.styles";

export type ButtonVariant = "primary" | "secondary" | "outline";

export interface ButtonStyles extends CSSObject {
  // Add any custom style properties you want
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button click handler */
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /** Button content (text or JSX) */
  children: ReactNode;

  /** Shows loadingChildren instead of children and disables click */
  loading?: boolean;

  /** Content to show during loading */
  loadingChildren?: ReactNode;

  /** Button variants "primary" | "secondary" | "outline" */
  variant?: ButtonVariant;

  /** Custom styles */
  sx?: ButtonStyles & CSSObject;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      loading,
      loadingChildren = "Loading...",
      onClick,
      sx,
      variant,
      ...props
    },
    ref
  ) => {
    const content = loading ? loadingChildren : children;
    const clickHandler =
      typeof onClick === "function" && !loading ? onClick : undefined;

    return (
      <StyledButton
        ref={ref}
        onClick={clickHandler}
        variant={variant}
        sx={sx}
        loading={loading}
        disabled={loading || props.disabled}
        {...props}
      >
        {content}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
