import { Handle, Position } from "reactflow";

export default function PillNode({ data }: any) {
  return (
    <div
      className={`relative px-8 py-2 rounded-lg  text-sm font-medium flex items-center gap-2 shadow
      ${data.color}
      ${data.faded ? "opacity-30" : ""}`}
    >
      {data.label}
      <button
        onClick={data.onClick}
        className="absolute top-3.5 right-1 bg-white text-black rounded-full w-4 h-4 text-lg hover:text-xl  hover:h-5 py-2 hover:w-5 flex items-center justify-center"
      >
        {data.expanded ? "–" : "+"}
      </button>

      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
