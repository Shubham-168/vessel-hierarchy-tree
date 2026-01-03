import SidebarAccordion from "./SidebarAccordion";
import { LayoutGrid, Calendar, Database, Clock, Settings, LineChart, Ship, } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white border- px-4 py-6 space-y-2">
            <div className="text-4xl border-b pb-4 border-slate-300 flex font-bold mb-6">
                <span className="text-blue-400">3<span className="text-green-400">S</span></span>
                <span className="text-black/60 pl-4 text-xl">Smart Ship Solutions</span> 
            </div>

            <SidebarAccordion icon={<LayoutGrid size={18} />} title="Dashboard" />
            <SidebarAccordion icon={<Calendar size={18} />} title="Planned Maintenance" />
            <SidebarAccordion icon={<Database size={18} />} title="Spares Inventory" />
            <SidebarAccordion icon={<Clock size={18} />} title="Machinery Running Hrs" />

            <div className="bg-blue-50 text-blue-600 rounded-lg px-2 py-1 font-semibold">
                <SidebarAccordion icon={<Ship size={18} />} title="Fleet Management" />
            </div>


            <SidebarAccordion icon={<LineChart size={18} />} title="Reports" />
            <SidebarAccordion icon={<Settings size={18} />} title="Settings" />
        </aside>
    );
}
