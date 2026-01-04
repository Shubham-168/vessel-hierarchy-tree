export const buildOpenPath = (
  targetId: string,
  parentMap: Record<string, string | null>
) => {
  const path: string[] = [];
  let current: string | null = targetId;

  while (current) {
    path.unshift(current);
    current = parentMap[current];
  }

  const expanded: Record<number, string> = {};
  path.forEach((id, i) => (expanded[i] = id));
  return expanded;
};
