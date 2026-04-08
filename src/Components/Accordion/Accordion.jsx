"use client";

import { Accordion } from "@heroui/react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    title: "What is iinve?",
    content:
      "iinve is your go-to platform for creating stunning, personalized digital invitations fast, elegant, and effortless.",
  },
  {
    title: "Is my data safe with iinve?",
    content:
      "Yes, we take data privacy seriously. All your personal information and event details are securely stored.",
  },
  {
    title: "Can I customize my invitations?",
    content:
      "Yes! You can personalize the text, images, colors, RSVP options, and more to match your event's style.",
  },
  {
    title: "What kind of events can I create invites for?",
    content:
      "Weddings, engagements, birthdays, baby showers, corporate events, housewarmings — you name it!",
  },
  {
    title: "Is iinve mobile-friendly?",
    content:
      "Yes, iinve pages are fully responsive and work well on all devices, including smartphones.",
  },
];

const AccordionContainer = () => {
  return (
    <Accordion className="w-full" hideSeparator defaultValue="item-1">
      {faqData.map((item, index) => (
        <Accordion.Item key={index}>
          <Accordion.Heading>
            <Accordion.Trigger className="w-full flex items-center justify-between gap-4 py-5 text-left text-white text-base md:text-lg font-medium cursor-pointer">
              {item.title}
              <Accordion.Indicator>
                <ChevronDown
                  className="text-[#898989] transition-transform duration-300"
                  size={20}
                />
              </Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body
              className="pb-5 text-sm md:text-base leading-relaxed"
              style={{ color: "var(--text-gray)" }}
            >
              {item.content}
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionContainer;
