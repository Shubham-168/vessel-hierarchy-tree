import { Handle, Position } from "reactflow";

export default function PillNode({ data }: any) {
  return (
    <div
      className={`px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow
      ${data.color}
      ${data.faded ? "opacity-30" : ""}`}
    >
      {data.label}
      <button
        onClick={data.onClick}
        className="bg-white text-black rounded-full w-5 h-5 text-xs flex items-center justify-center"
      >
        {data.expanded ? "–" : "+"}
      </button>

      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
