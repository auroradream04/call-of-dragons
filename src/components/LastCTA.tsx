import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LastCTA() {
  return (
    <section className="w-full py-16 text-center pb-32">
      <div className="max-w-3xl mx-auto">
        <h2 className={cn(
          "font-bricolage",
          "text-4xl md:text-5xl font-bold tracking-tight mb-6"
        )}>
          Long headline to turn your<br />visitors into users
        </h2>
        <Button 
          size="lg"
          className="text-base px-8 py-6"
        >
          Action
        </Button>
      </div>
    </section>
  );
} 