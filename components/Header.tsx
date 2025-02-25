"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="top-0 left-0 w-full bg-white/10 dark:bg-transparent z-50">
      <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">

        <nav className="flex space-x-6 text-xl font-semibold">
          <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
        </nav>

        {/* Dark Mode Toggle */}
        {mounted && resolvedTheme && (
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-1.5 mx-2 rounded-full bg-gray-700 dark:bg-gray-600 transition-colors 
                       hover:bg-gray-500 dark:hover:bg-gray-700 ease-in-out duration-500 opacity-80"
          >
            {resolvedTheme === "dark" ? "☀️" : "🌙"}
          </button>
        )}
      </div>
    </header>
  );
}
