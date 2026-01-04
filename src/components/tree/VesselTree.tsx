import { useState, useMemo } from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
import { buildTree } from "../../utils/buildTree";
import { nodes as rawNodes } from "../../data/treeData";
import PillNode from "./PillNode";
import { levelColors } from "../../utils/colors";
import SearchBar from "../search/SearchBar";

const nodeTypes = { pill: PillNode };

export default function VesselTree() {
    const tree = useMemo(() => buildTree(rawNodes), []);
    const [expanded, setExpanded] = useState<Record<number, string>>({});


    const flow = { nodes: [], edges: [] } as any;
    let yMap: any = {};

    const build = (node: any, level = 0, parent?: string) => {

        yMap[level] = yMap[level] || 0;

        flow.nodes.push({
            id: node.id,
            type: "pill",
            position: { x: level * 260, y: yMap[level] * 70 },
            data: {
                label: node.name,
                color: levelColors[level],
                faded: expanded[level] && expanded[level] !== node.id,
                expanded: expanded[level] === node.id,
                onClick: () =>
                    setExpanded((prev: any) => ({
                        ...prev,
                        [level]: prev[level] === node.id ? null : node.id
                    }))
            }
        });

        yMap[level]++;

        if (parent)
            flow.edges.push({
                id: parent + "-" + node.id,
                source: parent,
                target: node.id,
                type: "smoothstep"
            });

        if (expanded[level] === node.id)
            node.children?.forEach((c: any) => build(c, level + 1, node.id));
    };

    build(tree[0]);

    return (
        <>
            <div className=" h-[615px] rounded-2xl border border-slate-200 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                <div className="mt-3 ml-3">
                    <SearchBar setExpanded={setExpanded} />
                </div>
                <ReactFlow nodes={flow.nodes} edges={flow.edges} nodeTypes={nodeTypes}>
                    <Background gap={16} />
                </ReactFlow>
            </div>
            <div className="bg-white text-right text-[12px] text-slate-500 px-4 py-2"> <span className=" font-bold text-blue-300">3S</span> Smart Ship Solutions © 2025 </div>
        </>
    );
}
