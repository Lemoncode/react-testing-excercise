export const mapToCollection = <A, B>(
  list: A[],
  mapToEntityFn: (A) => B
): B[] => (Array.isArray(list) ? list.map(mapToEntityFn) : []);
