import React from "react";
import ListItem from "../list-item";
import type { ListItemProps } from "../list-item";

export interface MenuItemProps extends ListItemProps {}

const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(function (
  props,
  ref
) {
  const {
    role = "menuitem",
    tabIndex: tabIndexProp,
    children,
    ...other
  } = props;

  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return (
    <ListItem role={role} tabIndex={tabIndex} ref={ref} {...other}>
      {children}
    </ListItem>
  );
});

export default MenuItem;
