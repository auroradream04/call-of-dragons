import Image from "next/image";
import { cn } from "@/lib/utils";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface ImageTextSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  className?: string;
}

export default function ImageTextSection({
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
  className,
}: ImageTextSectionProps) {
  return (
    <section className={cn(
      "w-full grid grid-cols-1 md:flex justify-center items-center",
      className
    )}>
      {/* Image Container */}
      <div className={cn(
        "w-full aspect-square relative",
        reversed ? "md:order-last" : ""
      )}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col space-y-6 w-full">
        <h2 className={cn(
          bricolage.className,
          "text-4xl md:text-5xl font-bold tracking-tight"
        )}>
          {title}
        </h2>
        <p className="text-gray-500 leading-relaxed text-lg md:pr-8">
          {description}
        </p>
      </div>
    </section>
  );
} 