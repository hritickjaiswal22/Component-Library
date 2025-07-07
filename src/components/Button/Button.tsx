import React, { ReactNode } from "react";

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
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, loading, loadingChildren = "Loading...", onClick, ...props },
    ref
  ) => {
    const content = loading ? loadingChildren : children;
    const clickHandler =
      typeof onClick === "function" && !loading ? onClick : undefined;

    return (
      <button ref={ref} onClick={clickHandler} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
