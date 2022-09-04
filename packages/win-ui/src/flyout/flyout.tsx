import React from "react";
import clsx from "clsx";

export interface FlyoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const Flyout = React.forwardRef<HTMLDivElement, FlyoutProps>(function (
  props,
  ref
) {
  const { className, children, ...other } = props;

  return (
    <div className={clsx("WinUI-flyout", className)} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default Flyout;
