import Image from "next/image";
import heroImage from "@/assets/images/hero.webp";
import { Button } from "../ui/button";
import Trust from "./Trust";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Hero() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">

      {/* Left */}
      <div className="flex flex-col justify-center">
        <h1 className={`${bricolage.className} text-4xl lg:text-7xl font-extrabold mb-8 tracking-tighter`}>
            Quitting? Get 
            <span className="text-primary block mt-4">your <span className="text-white bg-red-900 px-4">money back!</span></span>
        </h1>
        <p className="text-lg text-gray-500 max-w-lg mb-16">
          Refund your Call of Dragons purchases back to your bank account with our refund services.
        </p>
        
        <Button className="w-fit mb-8">Play Now</Button>
        <Trust />
      </div>

      {/* Right */}
      <div className="flex flex-col justify-center items-center">
        <Image src={heroImage} alt="Hero" className="w-full h-auto"/>
      </div>
    </div>
  );
}
