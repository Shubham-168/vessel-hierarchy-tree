import { Handle, Position } from "reactflow";
import clsx from "clsx";

const colorMap = {
  root: "bg-blue-500",
  engine: "bg-blue-600",
  red: "bg-red-500",
  gray: "bg-gray-500",
  green: "bg-green-600"
};

export default function VesselNode({ data }) {
  return (
    <div className={clsx("px-4 py-1 rounded-lg text-white shadow-md text-xl flex items-center gap-2", colorMap[data.type])}>
      {data.label}
      <span className="bg-white text-black rounded-full px-1 text-[10px]">+</span>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
