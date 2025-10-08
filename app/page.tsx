"use client";
import { useState, createContext, useContext, ReactNode, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Download, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Language Context
interface LanguageContextType {
  language: 'fi' | 'en';
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({ 
  language: 'fi', 
  toggleLanguage: () => {} 
});

const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'fi' | 'en'>('fi');
  const toggleLanguage = () => setLanguage(prev => prev === 'fi' ? 'en' : 'fi');
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Käännökset
const translations = {
  en: {
    welcome: "Welcome!",
    portfolioText: "to see my portfolio and journey as a developer.",
    about: "About Me",
    aboutText1: "I graduated as a software developer from Salo Vocational College in fall 2025. My programming experience comes from educational projects and my own business ventures. Currently, I'm deepening my expertise in applying AI to software development and teaching it through data. I'm motivated to continuously develop my skills. In my free time, I enjoy triathlon and music.",
    aboutText2: "My core expertise lies in full-stack web application development from design and testing to maintenance. I master programming languages and technologies such as JavaScript, TypeScript, PHP, Python, Node.js, React, Laravel, and C#. I've implemented projects with Next.js, Express.js, WebSockets, and Prisma, and built RESTful and GraphQL APIs.",
    aboutText3: "I have experience with both relational databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB). I understand performance optimization, SEO fundamentals, and key security practices (OWASP Top 10, encryption, JWT, OAuth). I work with cloud services like AWS, Vercel, Render, and Docker, applying DevOps principles and CI/CD pipelines.",
    aboutText4: "I also have knowledge of AI technologies including TensorFlow and PyTorch. I have a keen eye for UI/UX design and pay close attention to detail. My projects are well-documented and scalable.",
    skills: "Skills",
    frontendTech: "Frontend Technologies:",
    backendTech: "Backend Technologies:",
    databases: "Databases:",
    versionControl: "Version Control & Tools:",
    projectManagement: "Project Management & Collaboration:",
    graphicDesign: "Graphic Design:",
    projects: "Projects",
    contact: "Contact",
    contactText: "Interested in working together? Feel free to reach out!",
    sendMessage: "Send Message",
    viewButton: "View",
    nextButton: "Next",
    prevButton: "Previous",
    downloadCV: "Download CV",
    project1Title: "Quiz Master",
    project1Desc: "A school project and a quiz application built with Next.js and TypeScript. The application fetches quiz questions from a JSON file and providing responsive user experience. Hosted on Vercel.",
    project2Title: "Living a Healthy Life",
    project2Desc: "A client website built with React to showcase services offered by a wellness professional. The site features a responsive design and Hosted on Louhi.",
    project3Title: "Cleaning Service",
    project3Desc: "A professional cleaning service website built with modern web technologies. Features responsive design, service listings, and contact forms. Optimized for user experience and SEO.",
    project4Title: "Formula 1 Finland",
    project4Desc: "F1 Finland is a Formula 1 fan site featuring Finnish drivers, tracks, and race results. The site fetches real-time and historical data from the OpenF1 API.",
    project5Title: "Lakes of Finland",
    project5Desc: "A web application that displays a gallery of Finnish lakes. The project focuses on using JavaScript to create an interactive user experience, including image manipulation and dynamic content loading.",
    project6Title: "Weather App",
    project6Desc: "A web application that fetches real-time weather data using a third-party API. The app demonstrates the ability to handle API requests and dynamically display information to the user.",
    project7Title: "Todo app",
    project7Desc: "A task management application built with Next.js. This project showcases the ability to create, edit, and delete tasks, demonstrating fundamental CRUD operations.",
  },
  fi: {
    welcome: "Tervetuloa!",
    portfolioText: "nähdäksesi portfolioni ja matkani ohjelmisokehittäjänä.",
    about: "Tietoa minusta",
    aboutText1: "Olen syksyllä 2025 Salon ammattiopistosta valmistunut ohjelmistokehittäjä. Kokemusta ohjelmoinnista on kertynyt koulutuksen projekteista sekä oman yritystoiminnan kautta. Tällä hetkellä syvennän osaamistani tekoälyn soveltamisessa ohjelmistokehityksessä ja sen opettamisessa datan avulla. Olen motivoitunut kehittämään taitojani jatkuvasti. Harrastuksiini kuuluu triathlon ja musiikki.",
    aboutText2: "Erityisosaamistani on full-stack-verkkosovellusten kehittäminen suunnittelusta ja testauksesta ylläpitoon. Hallitsen ohjelmointikieliä ja teknologioita, kuten JavaScript, TypeScript, PHP, Python, Node.js, React, Laravel ja C#. Olen toteuttanut projekteja Next.js:llä, Express.js:llä, WebSocketsilla ja Prismalla, sekä rakentanut RESTful- ja GraphQL-rajapintoja.",
    aboutText3: "Kokemusta minulla on sekä relaatiotietokannoista (MySQL, PostgreSQL) että NoSQL-tietokannoista (MongoDB). Ymmärrän suorituskyvyn optimointia, SEO:n perusteita sekä tietoturvan keskeiset käytännöt (OWASP Top 10, salaus, JWT, OAuth). Työskentelen pilvipalvelujen kuten AWS:n, Vercelin, Renderin ja Dockerin parissa soveltaen DevOps-periaatteita ja CI/CD-putkia.",
    aboutText4: "Minulla on myös osaamista tekoälyteknologioista, kuten TensorFlow ja PyTorch. Minulla on tarkka silmä UI/UX-suunnitteluun ja kiinnitän huomiota yksityiskohtiin. Projektini ovat hyvin dokumentoituja ja skaalautuvia.",
    skills: "Taidot",
    frontendTech: "Frontend-teknologiat:",
    backendTech: "Backend-teknologiat:",
    databases: "Tietokannat:",
    versionControl: "Versionhallinta & Työkalut:",
    projectManagement: "Projektinhallinta & Yhteistyö:",
    graphicDesign: "Graafinen suunnittelu:",
    projects: "Projektit",
    contact: "Yhteystiedot",
    contactText: "Kiinnostunut yhteistyöstä? Ota rohkeasti yhteyttä!",
    sendMessage: "Lähetä viesti",
    viewButton: "Katso",
    nextButton: "Seuraava",
    prevButton: "Edellinen",
    downloadCV: "Lataa CV",
    project1Title: "Tietovisailumestari",
    project1Desc: "Kouluprojekti ja tietovisailusovellus rakennettu Next.js:llä ja TypeScriptillä. Sovellus hakee kysymykset JSON-tiedostosta tarjoten responsiivisen käyttökokemuksen. Isännöity Vercelissä.",
    project2Title: "Terveellinen elämä",
    project2Desc: "Asiakassivusto rakennettu Reactilla esittelemään hyvinvointiammattilaisen palveluita. Sivusto sisältää responsiivisen suunnittelun ja on isännöity Louhella.",
    project3Title: "Siivouspalvelu",
    project3Desc: "Ammattimainen siivouspalvelusivusto rakennettu moderneilla web-teknologioilla. Sisältää responsiivisen suunnittelun, palvelulistat ja yhteydenottolomakkeet. Optimoitu käyttökokemukselle ja SEO:lle.",
    project4Title: "Formula 1 Finland",
    project4Desc: "F1 Finland on Formula 1 -fanisivusto, mukana suomalaisia kuljettajia, Radat ja kilpailutulokset. Sivusto hakee reaaliaikaista ja historiallista dataa OpenF1-rajapinnasta",
    project5Title: "Suomen järvet",
    project5Desc: "Verkkosovellus, joka näyttää gallerian suomalaisista järvistä. Projekti keskittyy JavaScriptin käyttöön interaktiivisen käyttökokemuksen luomiseen, sisältäen kuvankäsittelyn ja dynaamisen sisällön lataamisen.",
    project6Title: "Sääsovellus",
    project6Desc: "Verkkosovellus, joka hakee reaaliaikaista säädataa kolmannen osapuolen API:sta. Sovellus osoittaa kykyä käsitellä API-pyyntöjä ja näyttää tietoa dynaamisesti käyttäjälle.",
    project7Title: "Tehtäväsovellus",
    project7Desc: "Tehtävienhallintasovellus rakennettu Next.js:llä. Tämä projekti esittelee kykyä luoda, muokata ja poistaa tehtäviä, osoittaen perus CRUD-operaatiot.",
  }
};

function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { language, toggleLanguage } = useLanguage();

  const t = translations[language];

  const projects = [
    { title: t.project1Title, description: t.project1Desc, image: "🎯", link: "https://taitaja.vercel.app/" },
    { title: t.project2Title, description: t.project2Desc, image: "🌿", link: "https://www.eevakoskela.fi/" },
    { title: t.project3Title, description: t.project3Desc, image: "🧹", link: "https://cleaning-sandy.vercel.app/" },
    { title: t.project4Title, description: t.project4Desc, image: "🏎️", link: "https://f1-finland.vercel.app/" },
    { title: t.project5Title, description: t.project5Desc, image: "🏞️", link: "https://moontags.github.io/Finnish_Lakes-_Gallery/" },
    { title: t.project6Title, description: t.project6Desc, image: "🌤️", link: "https://moontags.github.io/Weather_App/" },
    { title: t.project7Title, description: t.project7Desc, image: "✅", link: "https://todo-lake-nine-41.vercel.app/" },
  ];

  const sections = useMemo(() => ["hero", "about", "skills", "projects", "contact"], []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left - next project
      nextProject();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right - previous project
      prevProject();
    }
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Set light mode as default on mount
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="relative">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 -z-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      />

      <div className="flex flex-col items-center text-center text-gray-900 dark:text-white mx-1 transition-colors duration-300">
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-full px-8 py-4 shadow-lg">
          <div className="flex items-center gap-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-base font-medium transition-colors capitalize ${
                  activeSection === section 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {section === "hero" ? "Home" : section}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed top-4 left-4 z-50">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-lg"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="md:hidden fixed top-20 left-4 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-2xl p-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left text-lg font-medium transition-colors capitalize ${
                    activeSection === section 
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Header Controls */}
        <div className="fixed top-4 right-4 sm:right-10 z-50 flex items-center gap-3">
          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 sm:p-2.5 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-lg hover:bg-white/90 dark:hover:bg-black/50 transition-all"
            aria-label="Change language"
          >
            <span className="text-xl sm:text-2xl">
              {language === "en" ? "🇫🇮" : "🇬🇧"}
            </span>
          </motion.button>

          <motion.button
            onClick={() => {
              document.documentElement.classList.toggle('dark');
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 sm:p-2.5 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-lg hover:bg-white/90 dark:hover:bg-black/50 transition-all"
            aria-label="Toggle dark mode"
          >
            <span className="text-xl sm:text-2xl">
              <span className="dark:hidden">🌙</span>
              <span className="hidden dark:inline">☀️</span>
            </span>
          </motion.button>
        </div>

        {/* Section Indicators */}
        <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSection === section 
                  ? "bg-blue-600 dark:bg-blue-400 scale-125" 
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400"
              }`}
              aria-label={`Go to ${section}`}
            />
          ))}
        </div>

        {/* Hero Section */}
            <motion.section 
              id="hero" 
              className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h1
                initial={{ scale: 0.95, opacity: 0, y: 10 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
              >
                {t.welcome}
              </motion.h1>

              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 720, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Image 
                  src="/jari.jpg" 
                  alt="Profile" 
                  width={400}
                  height={400}
                  className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full mt-12 shadow-2xl object-cover" 
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-12 mx-4 max-w-2xl text-center"
              >
                {t.portfolioText}
              </motion.p>
            </motion.section>



        {/* About Section */}
        <motion.section 
          id="about" 
          className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-3xl text-left py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8"
          >
            {t.about}
          </motion.h2> 
     
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              <span>{t.aboutText1}</span>
              <br /><br />
              <span>{t.aboutText2}</span>
              <br /><br />
              <span>{t.aboutText3}</span>
              <br /><br />
              <span>{t.aboutText4}</span>
            </p>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-3xl text-left py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10"
          >
            {t.skills}
          </motion.h2>

          <motion.div 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">{t.frontendTech}</h3>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js"].map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm sm:text-base transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-left mt-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">{t.backendTech}</h3>
            <div className="flex flex-wrap gap-2">
              {["PHP", "C#", "Docker", "Python", "Node.js", "Drupal", "Laravel", "Express", "Flask"].map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm sm:text-base transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-left mt-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">{t.databases}</h3>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "MongoDB", "PostgreSQL", "Supabase"].map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm sm:text-base transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-left mt-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">{t.versionControl}</h3>
            <div className="flex flex-wrap gap-2">
              {["GitHub", "GitHub Actions", "GitLens", "Vercel", "Hostinger", "AWS", "Postman"].map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm sm:text-base transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-left mt-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">{t.projectManagement}</h3>
            <div className="flex flex-wrap gap-2">
              {["Scrum", "Trello", "Slack"].map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm sm:text-base transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-left mt-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">{t.graphicDesign}</h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Photoshop", "Premiere", "Illustrator", "Draw.io", "Canva"].map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm sm:text-base transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-4xl py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-8"
          >
            {t.projects}
          </motion.h2>

          <motion.div
            key={currentProject}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-center text-gray-600 dark:text-gray-400 p-6 sm:p-8 max-w-3xl w-full mx-auto text-center bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-3xl shadow-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex flex-col justify-center items-center gap-6 sm:gap-8">
              
              <div className="flex items-center justify-center w-48 h-32 sm:w-64 sm:h-40 lg:w-80 lg:h-52 overflow-hidden">
                <div className="text-6xl sm:text-7xl lg:text-9xl">{projects[currentProject].image}</div>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
                {projects[currentProject].title}
              </h3>
              
              <p className="text-sm sm:text-base lg:text-lg text-center max-w-2xl px-2 sm:px-4">
                {projects[currentProject].description}
              </p>

              {/* Project Navigation */}
                        <div className="flex items-center gap-4 w-full justify-center mt-4">
              {/* Vasemman nuolen nappi */}
              <motion.button
                onClick={prevProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 rounded-full bg-white/70 dark:bg-black/50 
                          backdrop-blur-sm shadow-md hover:bg-white/90 
                          dark:hover:bg-black/70 transition-all"
                aria-label={t.prevButton}
              >
                <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
              </motion.button>

              {/* Keskimmäinen "View" -nappi */}
              <div className="flex gap-4 sm:gap-6">
                <motion.a
                  href={projects[currentProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-3 
                            bg-white/70 dark:bg-black/50 backdrop-blur-sm
                            text-gray-800 dark:text-white rounded-full shadow-md
                            transition-all duration-300 ease-in-out 
                            hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 
                            hover:shadow-xl active:shadow-md"
                >
                  {t.viewButton}
                </motion.a>
              </div>

              {/* Oikean nuolen nappi */}
              <motion.button
                onClick={nextProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 rounded-full bg-white/70 dark:bg-black/50 
                          backdrop-blur-sm shadow-md hover:bg-white/90 
                          dark:hover:bg-black/70 transition-all"
                aria-label={t.nextButton}
              >
                <ChevronRight size={24} className="sm:w-7 sm:h-7" />
              </motion.button>
            </div>


              {/* Project Indicators */}
              <div className="flex gap-2 mt-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentProject 
                        ? "bg-blue-600 dark:bg-blue-400 w-8" 
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-2">
                {currentProject + 1} / {projects.length}
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-3xl text-center py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8"
          >
            {t.contact}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-12"
          >
            {t.contactText}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <motion.a
              href="https://github.com/moontags"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Github size={24} />
              <span className="font-medium">GitHub</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Linkedin size={24} />
              <span className="font-medium">LinkedIn</span>
            </motion.a>

            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Mail size={24} />
              <span className="font-medium">Email</span>
            </motion.a>
          </div>

          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-all font-semibold text-base sm:text-lg"
          >
            <Download size={24} />
            {t.downloadCV}
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700"
          >
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © 2025 Portfolio. Made with ❤️ using Next.js & Framer Motion
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}

export default function App() {
  // Set light mode as default on mount - BEFORE any rendering
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}