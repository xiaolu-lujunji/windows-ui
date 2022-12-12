export interface TextCriteria {
  repeating: boolean
  keys: string[]
  previousKeyMatched: boolean
  lastTime: number
}

type TraversalFunction = (
  list: HTMLUListElement,
  item: HTMLUListElement | HTMLLIElement | null,
  options: {
    disableListWrap: boolean
  }
) => HTMLLIElement | null

export function textCriteriaMatches(el: HTMLElement, textCriteria: TextCriteria | null) {
  if (textCriteria === null) return true

  let text = el.innerText
  if (text === undefined) {
    // jsdom doesn't support innerText.
    text = el.textContent ?? ''
  }
  text = text.trim().toLowerCase()

  if (text.length === 0) return false

  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0]
  }

  return text.indexOf(textCriteria.keys.join('')) === 0
}

export const nextItem: TraversalFunction = (list, item, options) => {
  if (list === item) return list.firstChild as HTMLLIElement | null

  if (item && item.nextElementSibling) return item.nextElementSibling as HTMLLIElement

  const { disableListWrap } = options
  return disableListWrap ? null : (list.firstChild as HTMLLIElement | null)
}

export const previousItem: TraversalFunction = (list, item, options) => {
  const { disableListWrap } = options

  if (list === item)
    return (disableListWrap ? list.firstChild : list.lastChild) as HTMLLIElement | null

  if (item && item.previousElementSibling) return item.previousElementSibling as HTMLLIElement

  return disableListWrap ? null : (list.lastChild as HTMLLIElement | null)
}

export default function moveFocus(
  list: HTMLUListElement,
  currentFocus: HTMLLIElement | null,
  options: {
    disableListWrap: boolean
    disabledItemsFocusable: boolean
    traversalFunction: TraversalFunction
    textCriteria: TextCriteria | null
  }
) {
  const { disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria } = options

  let wrappedOnce = false
  let nextFocus = traversalFunction(list, currentFocus, {
    disableListWrap: currentFocus ? disableListWrap : false,
  })

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) return false
      wrappedOnce = true
    }

    const nextFocusDisabled = disabledItemsFocusable
      ? false
      : nextFocus.getAttribute('aria-disabled') === 'true'

    if (
      !nextFocus.hasAttribute('tabindex') ||
      !textCriteriaMatches(nextFocus, textCriteria) ||
      nextFocusDisabled
    ) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, {
        disableListWrap,
      })
    } else {
      nextFocus.focus()
      return true
    }
  }

  return false
}
