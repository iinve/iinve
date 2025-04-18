

import { Accordion, AccordionItem } from "@heroui/react";

const faqData = [
  {
    id: 1,
    question: "What is iinve?",
    answer:
      "iinve is your go-to platform for creating stunning, personalized digital invitations fast, elegant, and effortless.",
  },
  {
    id: 2,
    question: "Is my data safe with iinve?",
    answer:
      "Yes, we take data privacy seriously. All your personal information and event details are securely stored.",
  },
  {
    id: 3,
    question: "Can I customize my invitations?",
    answer:
      "Yes! You can personalize the text, images, colors, RSVP options, and more to match your event’s style.",
  },
  {
    id: 4,
    question: "What kind of events can I create invites for?",
    answer: "Weddings, engagements, birthdays, baby showers, corporate events, housewarmings — you name it! iinve supports all kinds of celebrations.",
  },
  {
    id: 5,
    question: "Is iinve mobile-friendly?",
    answer:
      "Yes, iinve pages are fully responsive and work well on all devices, including smartphones.",
  },
];


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
