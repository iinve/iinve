
import { Accordion, AccordionItem } from "@heroui/react";
import { faqData } from "../../data/accordionData";


const AccordionContainer = () => {
  return (
    <div className="w-full text-xl" aria-label="faq">
      <Accordion>
        {faqData.map((data, i) => (
          <AccordionItem
            key={i}
            aria-label={data.question}
            title={data.question}
            className="w-full overflow-hidden "
          >
            <div className="text-text_gray">{data.answer}</div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionContainer;
