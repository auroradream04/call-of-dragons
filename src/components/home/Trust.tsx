import Image from "next/image";
import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Trust() {
  const { trustSection } = siteConfig;
  
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 justify-center md:justify-start">
      <div className="flex items-center">
        <div className="flex -space-x-4">
          {trustSection.avatars.map((avatar, index) => (
            <div
              key={index}
              className="w-10 h-10 relative rounded-full ring-4 ring-white"
            >
              <Image
                src={avatar.src}
                alt={avatar.alt}
                fill
                className="rounded-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">{trustSection.customerCount}+</span> happy customers
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">{trustSection.rating}</span> rating
        </p>
      </div>
    </div>
  );
} 