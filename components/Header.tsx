"use client";
// ...existing code...

export default function Header() {
  // ...existing code...

  return (
    <header className="top-0 left-0 w-full bg-white/10 dark:bg-transparent z-50">
      <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">

        <nav className="flex space-x-6 text-xl font-semibold">
          <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
        </nav>

        {/* ...existing code... */}
      </div>
    </header>
  );
}
