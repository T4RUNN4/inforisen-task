"use client";

import { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Is buying followers legal in Bangladesh?",
    answer:
      "Yes, buying followers or likes is not illegal in Bangladesh. It's considered a marketing strategy to improve social proof. Just make sure you don't violate any platform rules, and your account stays safe.",
  },
  {
    id: 2,
    question: "How long does delivery take?",
    answer:
      "Most orders start within 5–30 minutes after placement. Complete delivery time depends on the package size, but usually takes 24 to 48 hours for natural distribution.",
  },
  {
    id: 3,
    question: "Can I order daily?",
    answer:
      "Yes, you can place orders daily. We recommend pacing your orders to maintain organic-looking growth velocity.",
  },
  {
    id: 4,
    question: "Will engagement drop?",
    answer:
      "We provide high-retention services designed to minimize drop-off. If any drop occurs within the guarantee window, our automated refill system handles it.",
  },
  {
    id: 5,
    question: "What if service is not delivered?",
    answer:
      "If an order fails or cannot be fulfilled, the funds are automatically refunded back to your account balance immediately.",
  },
  {
    id: 6,
    question: "Is Drip feed safer?",
    answer:
      "Yes! Drip-feed gradually builds engagement over a set timeline rather than all at once, making it look 100% organic to platform algorithms.",
  },
  {
    id: 7,
    question: "Can agencies resell services?",
    answer:
      "Absolutely. We provide full API support so agency owners and freelancers can re-sell our services under their own brand.",
  },
  {
    id: 8,
    question: "Which platform is best for business in BD?",
    answer:
      "Facebook remains the dominant platform in Bangladesh for direct sales, followed closely by Instagram and YouTube for brand awareness.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const leftColumnFaqs = faqData.slice(0, 4);
  const rightColumnFaqs = faqData.slice(4, 8);

  const renderFaqItem = (item: FaqItem) => {
    const isOpen = openId === item.id;

    return (
      <div
        key={item.id}
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? "bg-linear-to-r from-orange-500 to-orange-600 border-transparent text-white shadow-md"
            : "bg-[#F8F9FA] border-gray-100/80 text-gray-800 hover:bg-gray-100"
        }`}
      >
        <button
          onClick={() => toggleFaq(item.id)}
          className="w-full px-6 py-4 text-left font-bold text-sm md:text-base flex items-center justify-between cursor-pointer focus:outline-none"
        >
          <span>{item.question}</span>
          <span className="ml-4 shrink-0 text-xs">
            {isOpen ? "▲" : "▼"}
          </span>
        </button>

        {isOpen && (
          <div className="px-6 pb-5 pt-1 text-xs md:text-sm leading-relaxed text-orange-50/90 border-t border-orange-400/30">
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center">
            <span className="text-xs font-bold tracking-wider text-orange-500 uppercase border-b-2 border-orange-500 pb-0.5">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
            Find clear and simple explanations to the most common questions about
            our services, payments, orders, and account management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          <div className="space-y-4">{leftColumnFaqs.map(renderFaqItem)}</div>
          <div className="space-y-4">{rightColumnFaqs.map(renderFaqItem)}</div>
        </div>
      </div>
    </section>
  );
}