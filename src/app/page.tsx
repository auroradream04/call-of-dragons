import Hero from "@/components/home/Hero";
import StatsCounter from "@/components/StatsCounter";
import ImageTextSection from "@/components/ImageTextSection";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto px-4 lg:px-12 space-y-8 lg:space-y-16">
      <Hero />
      <StatsCounter />
      
      <div>
        <ImageTextSection
          title="Experience the Adventure"
          description="Immerse yourself in an epic world of dragons and magic. Build your kingdom, train your dragons, and forge alliances with players from around the globe. With stunning graphics and engaging gameplay, every moment is an adventure waiting to happen."
          imageSrc="/chakcha.png"
          imageAlt="Dragon gameplay screenshot"
        />

        <ImageTextSection
          title="Strategic Gameplay"
          description="Master the art of warfare with deep strategic elements. Command powerful dragons, lead armies, and make crucial decisions that will shape the fate of your kingdom. Every choice matters in your journey to become the ultimate ruler."
          imageSrc="/bakhar.png"
          imageAlt="Strategic gameplay screenshot"
          reversed={true}
        />
        <ImageTextSection
          title="Join the Adventure"
          description="Embark on a journey of epic proportions. With a vast world to explore, a rich history to uncover, and a community of players to forge alliances with, every decision you make will shape the destiny of your kingdom. Are you ready to rise to the challenge?"
          imageSrc="/gwanwyn.png"
          imageAlt="Dragon gameplay screenshot"
        />
        <ImageTextSection
          title="Join the Adventure"
          description="Embark on a journey of epic proportions. With a vast world to explore, a rich history to uncover, and a community of players to forge alliances with, every decision you make will shape the destiny of your kingdom. Are you ready to rise to the challenge?"
          imageSrc="/waldyr.png"
          imageAlt="Dragon gameplay screenshot"
          reversed={true}
        />
      </div>
    </main>
  );
}
