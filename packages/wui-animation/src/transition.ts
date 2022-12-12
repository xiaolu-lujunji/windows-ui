function formatMs(milliseconds: number) {
  return `${Math.round(milliseconds)}ms`
}

export const create = (
  properties: string | string[] = ['all'],
  options: { delay: number | string; duration: number | string; easing: string }
): string => {
  const { duration: durationOption, easing: easingOption, delay } = options

  return (Array.isArray(properties) ? properties : [properties])
    .map(
      (property) =>
        `${property} ${
          typeof durationOption === 'string' ? durationOption : formatMs(durationOption)
        } ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`
    )
    .join(',')
}
