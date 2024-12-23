import type { Metadata } from "next";
import { bricolage, geist } from "@/lib/fonts";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { siteConfig } from "@/config/site";

export const metadata = siteConfig.metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${geist.variable}`}>
      <body className={`${geist.className} antialiased`}>
        <Header 
          nav={siteConfig.header.nav} 
          brandLogo={siteConfig.brandLogo}
          brandName={siteConfig.name}
        />
        {children}
        <Footer 
          sections={siteConfig.footer.sections} 
          copyright={siteConfig.footer.copyright} 
        />
      </body>
    </html>
  );
}
