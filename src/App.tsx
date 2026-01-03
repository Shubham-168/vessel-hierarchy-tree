import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Sidebar from "./components/sidebar/Sidebar";
import FlowTree from "./components/tree/FlowTree";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Breadcrumb />
        <div className="flex-1 overflow-hidden">
          <FlowTree />
        </div>
      </div>
    </div>
  );
}
