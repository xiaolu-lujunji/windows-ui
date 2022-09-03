import React from "react";
import clsx from "clsx";

const Bullet = () => (
  <div className="WinUI-bullet-root">
    <div className="WinUI-bullet" />
  </div>
);

export interface ListItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected?: boolean;
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant?: "standard" | "radio" | "check" | "cascading";
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * Used to align non selectable items in lists with selectable peer items.
   * @default false
   */
  indented?: boolean;
  /**
   * The hint text to use.
   */
  hintText?: string;
}

const ListItem = React.forwardRef<HTMLButtonElement, ListItemProps>(function (
  props,
  ref
) {
  const {
    variant = "standard",
    selected = false,
    startIcon,
    indented = false,
    hintText,
    className,
    children,
    ...other
  } = props;

  return (
    <button
      className={clsx("WinUI-list-item", variant, className, {
        "WinUI-selected": selected,
        indented:
          indented && (variant === "standard" || variant === "cascading"),
      })}
      ref={ref}
      {...other}
    >
      {variant === "radio" && <Bullet />}
      {variant === "check" && <span className="WinUI-icon Accept" />}
      {startIcon !== undefined && (
        <div className="WinUI-list-item-start-icon-root">{startIcon}</div>
      )}
      <div className="WinUI-list-item-content">{children}</div>
      {variant === "cascading" && (
        <span className="WinUI-icon ChevronRightMed" />
      )}
      {variant !== "cascading" && hintText !== undefined && (
        <span className="WinUI-list-item-hint-text">{hintText}</span>
      )}
    </button>
  );
});

export default ListItem;
