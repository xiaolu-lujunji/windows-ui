import React from "react";
import Button from "../button";

export interface ToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If `true`, the button is rendered in an active state.
   * @default false
   */
  selected?: boolean;
}

const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  function (props, ref) {
    const { selected = false, children, ...other } = props;
    const variant = selected ? "accent" : "standard";
    return (
      <Button variant={variant} ref={ref} {...other}>
        {children}
      </Button>
    );
  }
);

export default ToggleButton;
