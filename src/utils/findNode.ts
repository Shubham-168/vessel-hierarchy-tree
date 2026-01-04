interface Node {
    id: string;
    name: string;
    parent?: string;
}

export const findNodeByName = (nodes: Node[], value: string) =>
  nodes.find(n => n.name.toLowerCase().includes(value.toLowerCase()));