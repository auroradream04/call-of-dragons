import Hero from "@/components/home/Hero";
import StatsCounter from "@/components/StatsCounter";
import MediaTextSection from "@/components/MediaTextSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { siteConfig } from "@/config/site";

export default function Home() {
  // Split mediaSections into two parts
  const firstHalf = siteConfig.mediaSections.slice(0, 2);
  const secondHalf = siteConfig.mediaSections.slice(2);

  return (
    <main className="min-h-screen container mx-auto px-4 lg:px-12 space-y-8 lg:space-y-16">
      <Hero {...siteConfig.hero} />
      <StatsCounter />
      
      <div>
        {/* First two media sections */}
        {firstHalf.map((section, index) => (
          <MediaTextSection
            key={index}
            {...section}
            reversed={index % 2 !== 0}
          />
        ))}
        
        {/* Testimonials in the middle */}
        <Testimonials testimonials={siteConfig.testimonials} />
        
        {/* Last two media sections */}
        {secondHalf.map((section, index) => (
          <MediaTextSection
            key={index + firstHalf.length}
            {...section}
            reversed={index % 2 !== 0}
          />
        ))}

        {/* FAQ section */}
        <FAQ {...siteConfig.faq} />
      </div>
    </main>
  );
}
