'use client'

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import type { FAQItem as FAQItemType } from "@/config/site";
import { useState } from "react";

interface FAQProps {
  title: string;
  description: string;
  items: FAQItemType[];
}

function FAQItem({ question, answer }: FAQItemType) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer p-6 bg-white hover:bg-gray-50 rounded-lg border border-gray-100 transition-all"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">
          {question}
        </h3>
        <ChevronRight 
          className={cn(
            "w-5 h-5 text-gray-400 transition-transform duration-200",
            isOpen && "rotate-90"
          )} 
        />
      </div>
      <div 
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <p className="overflow-hidden text-gray-500 text-sm">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ({ title, description, items }: FAQProps) {
  return (
    <section className="w-full py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className={cn(
          "font-bricolage",
          "text-4xl md:text-5xl font-bold tracking-tight text-center mb-4"
        )}>
          {title}
        </h2>
        <p className="text-gray-500 text-center mb-12">{description}</p>

        <div className="space-y-4">
          {items.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
} 