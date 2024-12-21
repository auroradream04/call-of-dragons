import Link from "next/link";

export default function Header() {
  return (
    <header className="py-8 h-20 mb-12">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ACME</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/characters">Characters</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

