interface Node {
    id: string;
    name: string;
    parent?: string;
}

export const buildParentMap = (nodes: Node[]) => {
  const map: Record<string, string | null> = {};
  nodes.forEach(n => (map[n.id] = n.parent || null));
  return map;
};
