import React from "react";
import clsx from "clsx";

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}

const List = React.forwardRef<HTMLUListElement, ListProps>(function (
  props,
  ref
) {
  const { className, children, ...other } = props;

  return (
    <ul className={clsx("WinUI-list", className)} ref={ref} {...other}>
      {children}
    </ul>
  );
});

export default List;
