import Image from "next/image";
import { cn } from "@/lib/utils";
import { Bricolage_Grotesque } from "next/font/google";
import { FaDiscord } from "react-icons/fa6";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface TestimonialCardProps {
  name: string;
  description: string;
  avatar: string;
}

function TestimonialCard({ name, description, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 flex flex-col shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
      <p className="text-base text-gray-600 mb-8 leading-relaxed">{description}</p>
      <div className="mt-auto flex items-center gap-4">
        <div className="w-12 h-12 relative rounded-full ring-4 ring-white shadow-sm">
          <Image
            src={avatar}
            alt={`${name}'s avatar`}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">Customer</p>
        </div>
        <FaDiscord className="w-5 h-5 text-[#5865F2] opacity-75 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      description: "All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet.",
      avatar: "/avatars/avatar1.png"
    },
    {
      name: "Michael Chen",
      description: "All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet.",
      avatar: "/avatars/avatar2.webp"
    },
    {
      name: "Emma Thompson",
      description: "All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet.",
      avatar: "/avatars/avatar3.webp"
    }
  ];

  return (
    <section className="w-full py-16">
      <div className="flex flex-col items-center mb-16">
        <h2 className={cn(
          bricolage.className,
          "text-4xl md:text-5xl font-bold tracking-tight text-center mb-4"
        )}>
          More Social Proof
        </h2>
        <div className="w-20 h-1 bg-primary rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
          />
        ))}
      </div>
    </section>
  );
} 