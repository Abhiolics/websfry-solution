"use client";

import { MinusIcon, PlusIcon } from "@/icons/icons";
import { useState } from "react";

// Define the FAQ item type
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  // FAQ data
 const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What services does Websfry Solution provide?",
    answer:
      "Websfry Solution offers end-to-end digital services including web development, mobile app development, AI & automation, cybersecurity, UI/UX design, and digital marketing. We handle everything from idea to launch and scaling.",
  },
  {
    id: 2,
    question: "How much does a website or app development cost?",
    answer:
      "The cost depends on your project requirements, features, and complexity. We provide transparent pricing after understanding your needs, and we offer flexible packages for startups, businesses, and enterprises.",
  },
  {
    id: 3,
    question: "How long will it take to complete my project?",
    answer:
      "Project timelines vary based on scope and features. A basic website can take 1–2 weeks, while complex apps or platforms may take several weeks. We always share a clear timeline before starting.",
  },
  {
    id: 4,
    question: "Will I get support and maintenance after delivery?",
    answer:
      "Yes. We provide ongoing support, maintenance, and performance optimization after project delivery to ensure your product remains secure, updated, and scalable.",
  },
  {
    id: 5,
    question: "Can you redesign or improve my existing website or app?",
    answer:
      "Absolutely. We can redesign, optimize, or modernize your existing website or app to improve performance, UI/UX, security, and conversion rates.",
  },
  {
    id: 6,
    question: "Is my data and business idea secure with Websfry Solution?",
    answer:
      "Yes. We follow strict security practices and confidentiality standards. Your data, code, and business ideas are handled securely and can be protected with NDAs if required.",
  },
  {
    id: 7,
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with startups, small businesses, and enterprises. Our solutions are scalable, meaning we grow with your business at every stage.",
  },
  {
    id: 8,
    question: "Do you offer AI automation and cybersecurity services?",
    answer:
      "Yes. We help businesses automate processes using AI and ensure systems are protected through robust cybersecurity solutions tailored to your needs.",
  },
];


  const toggleItem = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <section id="faq" className="py-14 md:py-28 dark:bg-[#171f2e]">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
            Frequently Asked Questions
          </h2>
          <p className="max-w-md mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Answered all frequently asked questions, Still confused? feel free
            contact with us
          </p>
        </div>
        <div className="max-w-[600px] mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FAQItem({
  item,
  isActive,
  onToggle,
}: {
  item: FAQItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-lg font-medium text-gray-800 dark:text-white/90">
          {item.question}
        </span>
        <span className="flex-shrink-0 ml-6">
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isActive && (
        <div className="mt-5">
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}
