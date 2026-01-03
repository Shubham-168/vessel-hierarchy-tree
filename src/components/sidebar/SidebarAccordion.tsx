import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function SidebarAccordion({ title, icon }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={title}>
        <AccordionTrigger className="text-sm">
          {icon} {title}
        </AccordionTrigger>
        <AccordionContent className="pl-6 text-gray-500 space-y-1">
          <div className="pl-6 text-gray-500 space-y-1">History</div>
          <div className="pl-6 text-gray-500 space-y-1">Starred</div>
          <div className="pl-6 text-gray-500 space-y-1">Settings</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
