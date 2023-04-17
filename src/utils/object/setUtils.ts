export function removeFromSet<T>(set: Set<T>, value: T) {
  const newSet = new Set(set);
  newSet.delete(value);
  return newSet;
}

export function addToSet<T>(set: Set<T>, value: T | T[]) {
  if (Array.isArray(value)) {
    const newSet = new Set(set);
    value.forEach((arrayValue) => newSet.add(arrayValue));
    return newSet;
  }
  return new Set(set.add(value));
}

export function removeEnumFromSet<T, E extends object>(
  set: Set<T | E[keyof E]>,
  enumObject: E
) {
  const newSet = new Set(set);
  Object.values(enumObject).map((value: E[keyof E]) => {
    newSet.delete(value);
  });
  return newSet;
}
