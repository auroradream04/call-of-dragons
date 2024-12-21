import Image from "next/image";
import heroImage from "@/assets/images/hero.webp";
import { Button } from "../ui/button";
import Trust from "./Trust";

export default function Hero() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">

      {/* Left */}
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl lg:text-7xl font-bold mb-4">Call of Dragons</h1>
        <p className="text-lg text-gray-500 max-w-lg mb-12">
          An epic adventure awaits in this magical realm where legends are born and destinies are forged.
        </p>
        
        <Button className="w-fit mb-4">Play Now</Button>
        <Trust />
      </div>

      {/* Right */}
      <div className="flex flex-col justify-center items-center">
        <Image src={heroImage} alt="Hero" className="w-full h-auto"/>
      </div>
    </div>
  );
}
