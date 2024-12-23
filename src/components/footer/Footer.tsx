import Link from "next/link";
import { FooterSection } from "@/config/site";
import SocialIcons from './SocialIcons';

interface FooterProps {
  sections: FooterSection[];
  copyright: string;
}

export default function Footer({ sections, copyright }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Call of Dragons</h3>
            <p className="text-gray-400 mb-6">
              An epic adventure awaits in this magical realm where legends are born and destinies are forged.
            </p>
            <SocialIcons />
          </div>

          {/* Navigation Columns */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-4 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
} 