import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Sidebar from "./components/sidebar/Sidebar";
import VesselTree from "./components/tree/VesselTree";

export default function App() {
  return (
    <div className="flex h-screen overflow-x-hidden bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Breadcrumb />
        <div className="flex-1">
          <VesselTree />
        </div>
      </div>
    </div>
  );
}
