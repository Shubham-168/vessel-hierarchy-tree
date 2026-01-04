import SidebarAccordion from "./SidebarAccordion";
import { LayoutGrid, Calendar, Database, Clock, Settings, LineChart, Ship, User } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="flex flex-col justify-between ">
            <aside className="w-64 bg-white flex-1 px-4 py-2 space-y-2">
                <div className="text-4xl border-b pb-4 cursor-pointer border-slate-300 flex font-bold mb-6">
                    <span className="text-blue-400">3<span className="text-green-400">S</span></span>
                    <span className="text-black/60 pl-4 text-xl">Smart Ship Solutions</span>
                </div>

                <SidebarAccordion icon={<LayoutGrid size={18} />} title="Dashboard" />
                <SidebarAccordion icon={<Calendar size={18} />} title="Planned Maintenance" />
                <SidebarAccordion icon={<Database size={18} />} title="Spares Inventory" />
                <SidebarAccordion icon={<Clock size={18} />} title="Machinery Running Hrs" />

                <div className="bg-blue-50 text-blue-600 flex gap-2 items-center py-4 cursor-pointer hover:shadow rounded-lg px-2 py-1 font-semibold">
                    <Ship size={18} />  Fleet Management
                </div>


                <SidebarAccordion icon={<LineChart size={18} />} title="Reports" />
                <SidebarAccordion icon={<Settings size={18} />} title="Settings" />
            </aside>

            <div className="w-64 px-4 py-3 bg-white flex gap-2 items-center ">
                <User />
                <div className="cursor-pointer">
                    <span className="text-md font-semibold text-black/60"> Shubham Saini </span>
                    <hr className="text-slate-300 " />
                    <span className="text-sm font-semibold text-red-600/70"> Super Admin </span>
                </div>
            </div>
        </div>
    );
}