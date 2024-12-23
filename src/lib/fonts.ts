import { Bricolage_Grotesque, Geist } from "next/font/google";

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
}); 