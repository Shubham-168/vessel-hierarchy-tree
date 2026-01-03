import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
import { nodes, edges } from "../../data/treeData";
import VesselNode from "./VesselNode";

const nodeTypes = { vessel: VesselNode };

export default function FlowTree() {
  return (
    <div className="h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background gap={20} />
      </ReactFlow>
    </div>
  );
}
