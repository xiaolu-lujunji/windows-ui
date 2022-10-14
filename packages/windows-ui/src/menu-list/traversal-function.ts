export type TraversalFunction = (
  list: HTMLUListElement,
  currentFocus: HTMLUListElement | HTMLButtonElement | null,
  disableListWrap: boolean
) => HTMLButtonElement | null;

export const nextItem: TraversalFunction = (list, item, disableListWrap) => {
  if (list === item) {
    return list.firstElementChild as HTMLButtonElement | null;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling as HTMLButtonElement;
  }
  return disableListWrap
    ? null
    : (list.firstElementChild as HTMLButtonElement | null);
};

export const previousItem: TraversalFunction = (
  list,
  item,
  disableListWrap
) => {
  if (list === item) {
    return (
      disableListWrap ? list.firstElementChild : list.lastElementChild
    ) as HTMLButtonElement | null;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling as HTMLButtonElement;
  }
  return disableListWrap
    ? null
    : (list.lastElementChild as HTMLButtonElement | null);
};
