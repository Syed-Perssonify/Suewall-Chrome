"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { params } from "@/commen/config/params";

export default function FAQ() {
  const { faq } = params;

  return (
    <section id="faq" className="py-16 md:py-24 -mt-24 scroll-mt-24">
      <div className="zlk-container max-w-3xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-plantin text-dark-green">
            {faq.title}
          </h2>
          <p className="text-muted-foreground mt-4 sm:mt-6 text-balance text-base sm:text-lg font-galano text-gray">
            {faq.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-8 sm:mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-primary w-full rounded-2xl border px-4 sm:px-8 py-3 ring-4"
          >
            {faq.items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer hover:text-primary text-sm sm:text-base  font-galano-medium text-dark-green">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm sm:text-base font-galano text-gray leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground text-center mt-6 sm:mt-8 font-galano text-gray">
            {faq.supportText}{" "}
            <Link
              href={faq.supportLinkHref}
              className="text-primary font-medium underline font-galano-medium"
            >
              {faq.supportLink}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
