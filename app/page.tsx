"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { title: "Taitaja", description: "Typescipt, Vercel", image: "/taitaja.png", link: "https://taitaja.vercel.app/" },
  { title: "Lakes of Finland", description: "HTML,CSS & JavaScript", image: "/jarvi.png", link: "https://moontags.github.io/Finnish_Lakes-_Gallery/" },
  { title: "Todo app", description: "Todo app next.js", image: "/todo1.png", link: "https://todo-lake-nine-41.vercel.app/" },
  { title: "Living a Healthy Life", description: "React & Tailwind", image: "/eeva.png", link: "https://www.eevakoskela.fi/" },
  { title: "Cleaning Made Easy", description: "HTML & CSS", image: "/siivousote.png", link: "https://moontags.github.io/siivousote/" },
  { title: "Weather App", description: "current weather API", image: "/w1.png", link: "https://moontags.github.io/Weather_App/" },


];

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="flex flex-col items-center text-center bg-background text-foreground mx-1">
      
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex flex-col justify-start items-center mt-36">

         
            <motion.h1
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold"
            >
              Welcome!
            </motion.h1>

            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: 0 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 720 }}
              transition={{ repeatType: "reverse", duration: 2, ease: "linear" }}
            >
              <Image src="/earth.png" alt="Rotating Earth" width={600} height={600} className="rounded-full" />
            </motion.div>

            <p className="text-lg text-gray-400 mt-4 mx-4">
              to see my portfolio and travel as a developer.
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
          About Me
        </motion.h2> 
     
        <p className="text-lg text-gray-400 mb-10">
        <span>
            I have been coding for about four years, focusing extensively on both frontend and backend development. I specialize in React, Next.js, and Tailwind CSS, and I have a command of modern web technologies, including Three.js and Framer Motion for animations. I can build responsive and visually impressive websites with a smooth user experience.
          </span>
          <br />
          <span>
            On the backend, I am proficient in PHP, Laravel, Node.js, and MongoDB, and I have developed several applications, such as a hotel reservation system and a task management tool. I have experience integrating services with databases and have a solid understanding of API development.
          </span>
          <br />
          <span>
            My projects demonstrate expertise in CI/CD pipelines, GitHub Actions, Prisma, and Supabase. I am also skilled in tools like Docker and AWS. I built the chat application, showcasing my interest in innovative concepts.
          </span>
          <br />
          <span>
            I have a keen eye for UI/UX design and pay close attention to detail. My projects are well-documented and scalable. I am a fast learner and continuously enhance my skill set!!
          </span>
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
          Skills
        </motion.h2>

          <div className="text-lg text-gray-400 text-left">
            <h3 className="text-foreground font-semibold mb-2">Frontend Technologies:</h3>
            <div className="flex flex-wrap gap-2">
              <span className="block">HTML</span>
              <span className="block">CSS</span>
              <span className="block">Tailwind CSS</span>
              <span className="block">JavaScript</span>
              <span className="block">TypeScript</span>
              <span className="block">React</span>
              <span className="block">Next.js</span>
              <span className="block">WordPress</span>
              <span className="block">AJAX</span>
            </div>
          </div>

          <div className="text-lg text-gray-400 text-left mt-6">
            <h3 className="text-foreground font-semibold mb-2">Backend Technologies:</h3>
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
            <h3 className="text-foreground font-semibold mb-2">Databases:</h3>
            <div className="flex flex-wrap gap-2">
              <span className="block">MySQL</span>
              <span className="block">MongoDB</span>
              <span className="block">PostgreSQL</span>
            </div>
          </div>

          <div className="text-lg text-gray-400 text-left mt-6">
            <h3 className="text-foreground font-semibold mb-2">Version Control & Tools:</h3>
            <div className="flex flex-wrap gap-2">
              <span className="block">GitHub</span>
              <span className="block">GitHub Actions</span>
              <span className="block">GitLens</span>
              <span className="block">Vercel</span>
              <span className="block">Hostinger</span>
              <span className="block">AWS</span>
              <span className="block">Heroku</span>
              <span className="block">Netlify</span>
              <span className="block">Postman</span>
            </div>
          </div>

          <div className="text-lg text-gray-400 text-left mt-6">
            <h3 className="text-foreground font-semibold mb-2">Project Management & Collaboration:</h3>
            <div className="flex flex-wrap gap-2">
              <span className="block">Scrum</span>
              <span className="block">Trello</span>
              <span className="block">Slack</span>
            </div>
          </div>

          <div className="text-lg text-gray-400 text-left mt-6">
            <h3 className="text-foreground font-semibold mb-2">Graphic Design:</h3>
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
          className="text-4xl font-bold mb-6"
        >
          Projects
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
                  View
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
                  Next
                </motion.button>

             </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}