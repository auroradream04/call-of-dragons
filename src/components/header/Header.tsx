import Link from "next/link";
import { NavItem } from "@/config/site";

interface HeaderProps {
  nav: NavItem[];
  brandLogo?: string;
  brandName: string;
}

export default function Header({ nav, brandName }: HeaderProps) {
  return (
    <header className="py-8 h-20 mb-12">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{brandName}</h1>
        <nav>
          <ul className="flex space-x-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

