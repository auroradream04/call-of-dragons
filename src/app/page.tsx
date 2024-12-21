import Hero from "@/components/home/Hero";
import StatsCounter from "@/components/StatsCounter";
export default function Home() {
  return (
    <main className="min-h-screen container mx-auto px-4 lg:px-12 space-y-12 lg:space-y-20">
      <Hero />
      <StatsCounter />
    </main>
  );
}
