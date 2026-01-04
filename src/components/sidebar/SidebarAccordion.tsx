import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function SidebarAccordion({ title, icon }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={title}>
        <AccordionTrigger className="flex justify-between text-sm px-1 hover:bg-black/10">
          <div className="flex gap-2"> {icon} {title} </div>
        </AccordionTrigger>
        <AccordionContent className="pl-6 text-gray-500 space-y-1">
          <div className="pl-6 text-gray-500 space-y-1 rounded cursor-pointer hover:bg-black/10">History</div>
          <div className="pl-6 text-gray-500 space-y-1 rounded cursor-pointer hover:bg-black/10">Starred</div>
          <div className="pl-6 text-gray-500 space-y-1 rounded cursor-pointer hover:bg-black/10">Settings</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
