import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 bg-gray-900 text-white">
      <nav className="container mx-auto flex w-full max-w-3xl items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/" className="text-emerald-500 font-bold">
          Jari Peltola
        </Link>

        {/* NAVIGATION LINKS */}
        <ul className="flex items-center gap-6 text-sm font-light text-amber-200">
          <li className="transition-colors hover:text-white">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="transition-colors hover:text-white">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="transition-colors hover:text-white">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* THEME TOGGLE */}
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
