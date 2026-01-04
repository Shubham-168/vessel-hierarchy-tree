export interface Node {
  id: string;
  name: string;
  parent?: string;
}

export const buildTree = (nodes: Node[]) => {
  const map: any = {};
  const roots: any[] = [];

  nodes.forEach(n => (map[n.id] = { ...n, children: [] }));

  nodes.forEach(n => {
    if (n.parent) map[n.parent]?.children.push(map[n.id]);
    else roots.push(map[n.id]);
  });

  return roots;
};
