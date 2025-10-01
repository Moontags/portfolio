"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

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
    viewButton: "View",
    nextButton: "Next",
    project1Title: "Quiz Master",
    project1Desc: "A school project and a quiz application built with Next.js and TypeScript. The application fetches quiz questions from a JSON file and providing responsive user experience. Hosted on Vercel.",
    project2Title: "Living a Healthy Life",
    project2Desc: "A client website built with React to showcase services offered by a wellness professional. The site features a responsive design and Hosted on Louhi.",
    project3Title: "Cleaning Made Easy",
    project3Desc: "A static website for a cleaning service company. Technologies: HTML, CSS and hosted on Github pages",
    project4Title: "Lakes of Finland",
    project4Desc: "A web application that displays a gallery of Finnish lakes. The project focuses on using JavaScript to create an interactive user experience, including image manipulation and dynamic content loading.",
    project5Title: "Weather App",
    project5Desc: "A web application that fetches real-time weather data using a third-party API. The app demonstrates the ability to handle API requests and dynamically display information to the user.",
    project6Title: "Todo app",
    project6Desc: "A task management application built with Next.js. This project showcases the ability to create, edit, and delete tasks, demonstrating fundamental CRUD operations.",
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
    viewButton: "Katso",
    nextButton: "Seuraava",
    project1Title: "Tietovisailumestari",
    project1Desc: "Kouluprojekti ja tietovisailusovellus rakennettu Next.js:llä ja TypeScriptillä. Sovellus hakee kysymykset JSON-tiedostosta tarjoten responsiivisen käyttökokemuksen. Isännöity Vercelissä.",
    project2Title: "Terveellinen elämä",
    project2Desc: "Asiakassivusto rakennettu Reactilla esittelemään hyvinvointiammattilaisen palveluita. Sivusto sisältää responsiivisen suunnittelun ja on isännöity Louhella.",
    project3Title: "Siivous helpoksi",
    project3Desc: "Staattinen verkkosivusto siivouspalveluyritykselle. Teknologiat: HTML, CSS ja isännöity Github pagesissa.",
    project4Title: "Suomen järvet",
    project4Desc: "Verkkosovellus, joka näyttää gallerian suomalaisista järvistä. Projekti keskittyy JavaScriptin käyttöön interaktiivisen käyttökokemuksen luomiseen, sisältäen kuvankäsittelyn ja dynaamisen sisällön lataamisen.",
    project5Title: "Sääsovellus",
    project5Desc: "Verkkosovellus, joka hakee reaaliaikaista säädataa kolmannen osapuolen API:sta. Sovellus osoittaa kykyä käsitellä API-pyyntöjä ja näyttää tietoa dynaamisesti käyttäjälle.",
    project6Title: "Tehtäväsovellus",
    project6Desc: "Tehtävienhallintasovellus rakennettu Next.js:llä. Tämä projekti esittelee kykyä luoda, muokata ja poistaa tehtäviä, osoittaen perus CRUD-operaatiot.",
  }
};

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);
  const { language, toggleLanguage } = useLanguage(); 

  const t = translations[language];

  const projects = [
    { title: t.project1Title, description: t.project1Desc, image: "/taitaja.png", link: "https://taitaja.vercel.app/" },
    { title: t.project2Title, description: t.project2Desc, image: "/eeva.png", link: "https://www.eevakoskela.fi/" },
    { title: t.project3Title, description: t.project3Desc, image: "/siivousote.png", link: "https://moontags.github.io/siivousote/" },
    { title: t.project4Title, description: t.project4Desc, image: "/jarvi.png", link: "https://moontags.github.io/Finnish_Lakes-_Gallery/" },
    { title: t.project5Title, description: t.project5Desc, image: "/w1.png", link: "https://moontags.github.io/Weather_App/" },
    { title: t.project6Title, description: t.project6Desc, image: "/todo1.png", link: "https://todo-lake-nine-41.vercel.app/" },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="flex flex-col items-center text-center bg-background text-foreground mx-1">
      
     
      <div className="fixed top-4 right-4 sm:right-10 md:right-20 lg:right-40 z-50 flex items-center gap-4 sm:gap-6">
        
        <motion.button
          onClick={toggleLanguage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-1.5 sm:p-2 rounded-full bg-transparent dark:bg-black/10 backdrop-blur-sm shadow-md hover:bg-white/40 dark:hover:bg-black/50 transition-all"
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
          className="p-1.5 sm:p-2 rounded-full bg-transparent dark:bg-black/30 backdrop-blur-sm shadow-md hover:bg-white/40 dark:hover:bg-black/50 transition-all"
          aria-label="Toggle dark mode"
        >
          <span className="text-xl sm:text-2xl">
            <span className="dark:hidden">🌙</span>
            <span className="hidden dark:inline">☀️</span>
          </span>
        </motion.button>
        
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-start items-center mt-12 md:mt-56 sm:mt-36">
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold"
        >
          {t.welcome}
        </motion.h1>

        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 720 }}
          transition={{ repeatType: "reverse", duration: 1, ease: "linear" }}
        >
          <Image src="/me.png" alt="Profile" width={360} height={300} className="rounded-full mt-16" />
        </motion.div>

        <p className="text-lg text-gray-400 mt-12 mx-4">
          {t.portfolioText}
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-6 max-w-3xl text-left">
        <motion.h2
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl font-bold mb-8"
        >
          {t.about}
        </motion.h2> 
     
        <p className="text-lg text-gray-400 mb-10">
          <span>{t.aboutText1}</span>
          <br /><br />
          <span>{t.aboutText2}</span>
          <br /><br />
          <span>{t.aboutText3}</span>
          <br /><br />
          <span>{t.aboutText4}</span>
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex flex-col justify-center px-6 max-w-3xl text-left">
        <motion.h2
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl font-bold mb-10"
        >
          {t.skills}
        </motion.h2>

        <div className="text-lg text-gray-400 text-left">
          <h3 className="text-foreground font-semibold mb-2">{t.frontendTech}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="block">HTML</span>
            <span className="block">CSS</span>
            <span className="block">Tailwind CSS</span>
            <span className="block">JavaScript</span>
            <span className="block">TypeScript</span>
            <span className="block">React</span>
            <span className="block">Next.js</span>
          </div>
        </div>

        <div className="text-lg text-gray-400 text-left mt-6">
          <h3 className="text-foreground font-semibold mb-2">{t.backendTech}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="block">PHP</span>
            <span className="block">C#</span>
            <span className="block">Docker</span>
            <span className="block">Python</span>
            <span className="block">Node.js</span>
            <span className="block">Drupal</span>
            <span className="block">Laravel</span>
            <span className="block">Express</span>
            <span className="block">Flask</span>
          </div>
        </div>

        <div className="text-lg text-gray-400 text-left mt-6">
          <h3 className="text-foreground font-semibold mb-2">{t.databases}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="block">MySQL</span>
            <span className="block">MongoDB</span>
            <span className="block">PostgreSQL</span>
            <span className="block">Supabase</span>
          </div>
        </div>

        <div className="text-lg text-gray-400 text-left mt-6">
          <h3 className="text-foreground font-semibold mb-2">{t.versionControl}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="block">GitHub</span>
            <span className="block">GitHub Actions</span>
            <span className="block">GitLens</span>
            <span className="block">Vercel</span>
            <span className="block">Hostinger</span>
            <span className="block">AWS</span>
            <span className="block">Postman</span>
          </div>
        </div>

        <div className="text-lg text-gray-400 text-left mt-6">
          <h3 className="text-foreground font-semibold mb-2">{t.projectManagement}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="block">Scrum</span>
            <span className="block">Trello</span>
            <span className="block">Slack</span>
          </div>
        </div>

        <div className="text-lg text-gray-400 text-left mt-6">
          <h3 className="text-foreground font-semibold mb-2">{t.graphicDesign}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="block">Figma</span>
            <span className="block">Photoshop</span>
            <span className="block">Premiere</span>
            <span className="block">Illustrator</span>
            <span className="block">Draw.io</span>
            <span className="block">Canva</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl font-bold mt-10"
        >
          {t.projects}
        </motion.h2>

        <motion.div
          key={currentProject}
          initial={{ scale: 0.1, opacity: 0, rotate: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative flex flex-col items-center text-gray-400 p-8 sm:px-12 max-w-3xl w-full mx-auto text-center"
        >
          <div className="flex flex-col justify-center items-center gap-10">
            
            <div className="flex items-center justify-center w-60 h-40 sm:w-80 sm:h-52 lg:w-[420px] lg:h-[280px] overflow-hidden">
              <Image
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                width={420}
                height={280}
                className="object-contain w-full h-full rounded-bl-full rounded-tr-full"
              />
            </div>

            <h2 className="text-2xl lg:text-3xl font-semibold">{projects[currentProject].title}</h2>
            <p className="text-md lg:text-lg text-center max-w-2xl px-4">
              {projects[currentProject].description}
            </p>

            <div className="flex gap-8 w-full justify-center">
              <motion.a
                href={projects[currentProject].link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-lg px-6 py-2 
                          bg-white/20 dark:bg-black/30 backdrop-blur-sm
                          text-gray-500 dark:text-white rounded-full shadow-md
                          transition-all duration-300 ease-in-out 
                          hover:bg-white/40 dark:hover:bg-black/10 
                          hover:shadow-xl hover:brightness-125 
                          active:shadow-md"
              >
                {t.viewButton}
              </motion.a>

              <motion.button
                onClick={nextProject}
                whileHover={{ scale: 1.05 }}
                className="text-lg px-6 py-2 
                          bg-white/20 dark:bg-black/30 backdrop-blur-sm
                          text-gray-500 dark:text-white rounded-full shadow-md
                          transition-all duration-300 ease-in-out 
                          hover:bg-white/40 dark:hover:bg-black/10 
                          hover:shadow-xl hover:brightness-125 
                          active:shadow-md"
              >
                {t.nextButton}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}