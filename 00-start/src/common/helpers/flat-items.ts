const isLast = <T>(items: T[], index: number) => items.length - 1 === index;

export const flatItems = <T>(items: T[], separator: string) =>
  items.reduce(
    (acc, item, index) =>
      !isLast(items, index) ? `${acc}${item} ${separator} ` : `${acc}${item}`,
    ''
  );
