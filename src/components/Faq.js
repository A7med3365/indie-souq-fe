import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import AccIndicator from './AccIndicator';

export default function Faq({ content }) {
  return (
    <div>
      <Accordion variant="splitted">
        {content.map((acc, i) => {
          return (
            <AccordionItem
              key={i}
              indicator={<AccIndicator />}
              aria-label={acc.label}
              title={
                <div className="text-gray1 text-[1.6rem] font-medium pl-8">
                  {acc.label}
                </div>
              }
            >
              <div className="text-gray2 text-lg font-normal px-8 pb-8">
                {acc.text}
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
