import type { TraversalFunction } from "./traversal-function";
import type { TextCriteria } from "./text-criteria";
import textCriteriaMatches from "./text-criteria";

export default function moveFocus(
  list: HTMLUListElement,
  currentFocus: HTMLUListElement | HTMLButtonElement | null,
  disableListWrap: boolean,
  disabledItemsFocusable: boolean,
  traversalFunction: TraversalFunction,
  textCriteria?: TextCriteria
) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(
    list,
    currentFocus,
    currentFocus ? disableListWrap : false
  );

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }

    // Same logic as useAutocomplete.js
    const nextFocusDisabled = disabledItemsFocusable
      ? false
      : nextFocus.disabled ||
        nextFocus.getAttribute("aria-disabled") === "true";

    if (
      !nextFocus.hasAttribute("tabindex") ||
      !textCriteriaMatches(nextFocus, textCriteria) ||
      nextFocusDisabled
    ) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}
