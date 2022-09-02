import React from "react";
import clsx from "clsx";

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  function (props, ref) {
    const { href, disabled = false, className, children, ...other } = props;

    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        className={clsx("WinUI-link-button", className, {
          "WinUI-disabled": disabled,
        })}
        ref={ref}
        {...other}
      >
        {children}
      </a>
    );
  }
);

export default LinkButton;
