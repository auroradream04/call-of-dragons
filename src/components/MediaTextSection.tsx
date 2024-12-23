import Image from "next/image";
import { cn } from "@/lib/utils";

type MediaType = 'image' | 'video';

interface MediaTextSectionProps {
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: MediaType;
  mediaAlt: string;
  reversed?: boolean;
  className?: string;
}

function MediaContainer({ 
  mediaType, 
  mediaUrl, 
  mediaAlt 
}: { 
  mediaType: MediaType; 
  mediaUrl: string; 
  mediaAlt: string; 
}) {
  if (mediaType === 'video') {
    return (
      <video 
        src={mediaUrl}
        controls
        className="w-full h-full object-contain rounded-lg"
        aria-label={mediaAlt}
      />
    );
  }

  return (
    <Image
      src={mediaUrl}
      alt={mediaAlt}
      width={900}
      height={850}
      className="object-cover"
      priority
    />
  );
}

export default function MediaTextSection({
  title,
  description,
  mediaUrl,
  mediaType,
  mediaAlt,
  reversed = false,
  className,
}: MediaTextSectionProps) {
  return (
    <section className={cn(
      "w-full grid grid-cols-1 md:flex justify-center items-center",
      className
    )}>
      {/* Media Container */}
      <div className={cn(
        "w-full aspect-square relative",
        reversed ? "md:order-last" : "",
        mediaType === 'video' && "aspect-video"
      )}>
        <MediaContainer 
          mediaType={mediaType}
          mediaUrl={mediaUrl}
          mediaAlt={mediaAlt}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col space-y-6 w-full ">
        <h2 className={cn(
          "font-bricolage",
          "text-4xl md:text-5xl font-bold tracking-tight"
        )}>
          {title}
        </h2>
        <p className="text-gray-500 leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </section>
  );
} 