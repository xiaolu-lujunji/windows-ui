import * as React from "react";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant to use.
   * @default 'accent'
   */
  variant?: "accent" | "standard";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function (
  props,
  ref
) {
  const {
    type = "button",
    variant = "accent",
    className,
    children,
    ...other
  } = props;
  return (
    <button
      type={type}
      className={clsx("WinUI-button", variant, className)}
      ref={ref}
      {...other}
    >
      {children}
    </button>
  );
});

export default Button;
