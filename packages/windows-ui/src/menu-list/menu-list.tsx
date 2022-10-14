import React from "react";
import List from "../list";
import useForkRef from "../utils/use-fork-ref";
import moveFocus from "./move-focus";
import { nextItem, previousItem } from "./traversal-function";
import textCriteriaMatches from "./text-criteria";
import type { TextCriteria } from "./text-criteria";
import type { ListProps } from "../list";
import type { MenuItemProps } from "../menu-item";

export interface MenuListProps extends ListProps {
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus?: boolean;
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem?: boolean;
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable?: boolean;
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap?: boolean;
}

const MenuList = React.forwardRef<HTMLUListElement, MenuListProps>(function (
  props,
  ref
) {
  const {
    autoFocus = false,
    autoFocusItem = false,
    disabledItemsFocusable = false,
    disableListWrap = false,
    onKeyDown,
    children,
    ...other
  } = props;

  const listRef = React.useRef<HTMLUListElement>(null);
  const handleRef = useForkRef(listRef, ref);
  const textCriteriaRef = React.useRef<TextCriteria>({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null,
  });

  React.useEffect(() => {
    if (autoFocus) {
      listRef.current?.focus();
    }
  }, [autoFocus]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (
    event
  ) => {
    const list = listRef.current!;
    const key = event.key;
    /**
     * currentFocus will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */
    const currentFocus = (list.ownerDocument ?? document)
      .activeElement! as HTMLButtonElement;

    if (key === "ArrowDown") {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(
        list,
        currentFocus,
        disableListWrap,
        disabledItemsFocusable,
        nextItem
      );
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(
        list,
        currentFocus,
        disableListWrap,
        disabledItemsFocusable,
        previousItem
      );
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(
        list,
        null,
        disableListWrap,
        disabledItemsFocusable,
        previousItem
      );
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime! > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent =
        currentFocus &&
        !criteria.repeating &&
        textCriteriaMatches(currentFocus, criteria);
      if (
        criteria.previousKeyMatched &&
        (keepFocusOnCurrent ||
          moveFocus(
            list,
            currentFocus,
            false,
            disabledItemsFocusable,
            nextItem,
            criteria
          ))
      ) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */
  let activeItemIndex = -1;
  // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback
  React.Children.forEach(
    children,
    (child: React.ReactElement<MenuItemProps>, index) => {
      if (!React.isValidElement(child)) {
        return;
      }

      if (!child.props.disabled) {
        if (child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }
    }
  );

  const items = React.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps: MenuItemProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === undefined) {
        newChildProps.tabIndex = 0;
      }

      return React.cloneElement(child, newChildProps);
    }

    return child;
  });

  return (
    <List
      role="menu"
      ref={handleRef}
      onKeyDown={handleKeyDown}
      tabIndex={autoFocus ? 0 : -1}
      {...other}
    >
      {items}
    </List>
  );
});

export default MenuList;
