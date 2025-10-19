import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const FAQ_CONTENT = [
  [
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Is it customizable?",
      answer: "Yes. You can customize the component to fit your needs.",
    },
    {
      question: "Is it mobile-friendly?",
      answer: "Yes. It is optimized for mobile devices.",
    },
  ],
  [
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Is it customizable?",
      answer: "Yes. You can customize the component to fit your needs.",
    },
    {
      question: "Is it mobile-friendly?",
      answer: "Yes. It is optimized for mobile devices.",
    },
  ],
];

export function AccordionFAQ() {
  return (
    <div className="flex w-full gap-x-6 md:flex-row flex-col items-start justify-center container">
      {FAQ_CONTENT.map((column, columnIndex) => (
        <Accordion type="single" collapsible className="w-lg" key={columnIndex}>
          {column.map(({ question, answer }, itemIndex) => (
            <AccordionItem
              value={`item-${columnIndex}-${itemIndex}`}
              key={itemIndex}
            >
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ))}
    </div>
  );
}
