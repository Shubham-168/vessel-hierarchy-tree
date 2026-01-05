import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Sidebar from "./components/sidebar/Sidebar";
import VesselTree from "./components/tree/VesselTree";

export default function App() {
  return (
    <div className="flex h-screen overflow-x-hidden bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Breadcrumb />
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <VesselTree />
          </div>
          <div className="bg-white text-right text-[12px] text-slate-500 px-4 py-2">
            <span className="font-bold text-blue-300">3S</span> Smart Ship Solutions © 2025
          </div>
        </div>

      </div>
    </div>
  );
}
