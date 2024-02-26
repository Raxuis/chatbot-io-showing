"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCardsCustom() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Chatbot IO revolutionized the way we interact with our users. With its intuitive interface and powerful AI capabilities, it has truly enhanced our customer service experience.",
    name: "Alice Johnson",
    title: "Lead Developer at Tech Innovations Inc.",
  },
  {
    quote:
      "As a seasoned programmer, I've seen my fair share of chatbots, but Chatbot IO stands out from the crowd. Its flexibility and extensive customization options make it a top choice for any development team.",
    name: "Bob Smith",
    title: "Senior Software Engineer at Digital Solutions Co.",
  },
  {
    quote: "Using Chatbot IO has been a game-changer for our business. It seamlessly integrates with our existing systems and has significantly reduced response times to customer inquiries.",
    name: "Emily Davis",
    title: "CEO of E-Commerce Ventures Ltd.",
  },
  {
    quote:
      "Raphaël Raclot and Benoît Parmentier have truly outdone themselves with Chatbot IO. It's evident that they've poured their expertise into creating a product that meets the needs of developers and businesses alike.",
    name: "John Anderson",
    title: "CTO at Tech Solutions Group",
  },
  {
    quote:
      "Chatbot IO exceeded all our expectations. Its natural language processing capabilities have enabled us to provide personalized assistance to our users, resulting in higher customer satisfaction rates.",
    name: "Sarah Miller",
    title: "Product Manager at Online Services Inc.",
  },
];
