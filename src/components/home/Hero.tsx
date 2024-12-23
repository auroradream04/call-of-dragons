import Image from "next/image";
import Trust from "./Trust";
import CTA from "../CTA";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function Hero({ title, description, image, imageAlt }: HeroProps) {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col justify-center text-center md:text-left mb-12 md:mb-0">
          <h1 className="font-bricolage text-5xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tighter">
            {/* Split the title into parts for styling */}
            {title.split('!')[0]}
            <span className="text-primary block mt-4">
              your <span className="text-white bg-accent px-4">money back!</span>
            </span>
          </h1>
          <p className="text-sm lg:text-lg text-gray-500 max-w-lg mb-8 md:mb-16 mx-auto lg:mx-0">
            {description}
          </p>
          
          <CTA />
          <Trust />
        </div>

        {/* Right */}
        <div className="flex flex-col">
          <Image 
            src={image} 
            alt={imageAlt} 
            width={800}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </>
  );
}
