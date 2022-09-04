export interface TextCriteria {
  keys: string[];
  repeating: boolean;
  previousKeyMatched: boolean;
  lastTime: number | null;
}

export default function textCriteriaMatches(
  nextFocus: HTMLUListElement | HTMLButtonElement,
  textCriteria?: TextCriteria
) {
  if (textCriteria === undefined) {
    return true;
  }
  let text: string | null | undefined = nextFocus.innerText;
  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent;
  }
  text = (text ?? "").trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}
