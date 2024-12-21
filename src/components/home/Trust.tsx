import Image from "next/image";
import { Star } from "lucide-react";

const users = [
  { src: "/avatars/avatar1.png", alt: "Avatar 1" },
  { src: "/avatars/avatar2.webp", alt: "Avatar 2" },
  { src: "/avatars/avatar3.webp", alt: "Avatar 3" },
  { src: "/avatars/avatar4.png", alt: "Avatar 4" },
  { src: "/avatars/avatar5.jpeg", alt: "Avatar 5" },
];

export default function Trust() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex -space-x-2">
        {users.map(({ src, alt }) => (
          <div
            key={alt}
            className="w-9 h-9 rounded-full border-2 border-white overflow-hidden"
          >
            <Image
              src={src}
              alt={alt}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">500+</span> happy customers
        </p>
      </div>
    </div>
  );
} 