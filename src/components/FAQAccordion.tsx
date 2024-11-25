import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/types";

interface FAQProps {
  data: FAQ[];
}

export function FAQAccordion({ data }: FAQProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border-t border-gray-500/50"
    >
      {data.map((faq, i) => (
        <AccordionItem value={`item-${i}`} key={i}>
          <AccordionTrigger className="font-raleway text-lg text-start">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
