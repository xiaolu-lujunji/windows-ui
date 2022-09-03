import React from "react";
import clsx from "clsx";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(function (
  props,
  ref
) {
  const { className, children, ...other } = props;

  return (
    <div className={clsx("WinUI-divider", className)} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default Divider;
