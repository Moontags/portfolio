"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const headerTranslations = {
  en: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
  },
  fi: {
    about: "Minä",
    skills: "Taidot",
    projects: "Projektit",
  }
};

export default function Header() {
  const { language } = useLanguage(); 
  const t = headerTranslations[language];

  return (
    <header className="top-0 left-0 w-full bg-white/10 dark:bg-transparent z-50">
      <div className="max-w-6xl mx-auto px-8 py-8 flex justify-between items-center">

        <nav className="flex space-x-3 sm:space-x-8 text-xl sm:text-2xl font-semibold">
          <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">
            {t.about}
          </a>
          <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400">
            {t.skills}
          </a>
          <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400">
            {t.projects}
          </a>
        </nav>

      </div>
    </header>
  );
}