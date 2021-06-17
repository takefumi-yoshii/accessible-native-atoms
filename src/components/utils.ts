export function mergeClassName(base: string, extend?: string) {
  if (!extend) return base;
  return `${base} ${extend}`;
}
