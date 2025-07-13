"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import athinatha from '../assets/images/project/project_athinatha.png'
import find_a_mechanic from '../assets/images/project/project_find_a_mechanic.png'
import fixel_magic from '../assets/images/project/project_fixel_magic.png'
import justmove from '../assets/images/project/project_justmove.jpeg'
import justmove_admin from '../assets/images/project/project_justmove_admin.jpg'
import luxtix from '../assets/images/project/project_luxtix.png'
import padm from '../assets/images/project/project_padm.png'
import r8er from '../assets/images/project/project_r8er.png'
import vemas from '../assets/images/project/project_vemas.png'
import zoomi from '../assets/images/company/zoomi.jpeg'
import hithsa from '../assets/images/company/hithsa.jpeg'
import elegant from '../assets/images/company/elegant_media.png'


const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: "PADM PRO",
      category: "Web Application",
      image: padm,
      description: "This is the admin dashboard for PADM, a Canadian 3D printing company. It supports internal operations and product management.I am the sole frontend developer on this project, responsible for implementing the entire frontend UI components.",
      technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "JavaScript"],
      github: "#",
      live: "#",
      company: "Zoomi Technologies",
      companyLogo: zoomi,
    },
    {
      title: "Athinatha.lk",
      category: "Web Application",
      image: athinatha,
      description: "Athinatha is a matchmaking application designed for marriage proposals in Sri Lanka, helping users find compatible partners.I developed around 75% of the front end.",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
      github: "#",
      live: "#",
      company: null,
      companyLogo: null,
    },
    {
      title: "Fixel Magic",
      category: "Web Application",
      image: fixel_magic,
      description: "A checkout-free autonomous store powered by computer vision, allowing users to shop without physical checkout counters.",
      technologies: ["React.js", "TypeScript", "CSS"],
      github: "#",
      live: "#",
      company: "Zoomi Technologies",
      companyLogo: zoomi,
    },
    {
      title: "JustMove Admin Dashboard",
      category: "Web Application",
      image: justmove_admin,
      description: "An admin dashboard for managing the JustMove fitness mobile application, including race tracking, user stats, and content management.",
      technologies: ["React.js", "CSS", "JavaScript"],
      github: "#",
      live: "#",
      company: "Zoomi Technologies",
      companyLogo: zoomi,
    },
    {
      title: "JustMove",
      category: "Mobile Application",
      image: justmove,
      description: "I developed iOS UI/UX and implemented core app functionalities while integrating RESTful APIs and optimizing the iOS codebase for performance and stability. I managed the app release cycle, including version upgrades, library updates, and App Store deployment, while actively resolving application bugs, ANRs, and crash-related issues. For performance testing, I simulated API load using Locust. In addition, I built and maintained a React-based web back-office system and developed a white-label setup for generating iOS app variants. I also conducted thorough end-to-end testing to ensure overall application quality and reliability.",
      technologies: ["Swift", "Objective -c", "UIKit", "SwiftUI", "Locust", "Firebase Crashlytics", ],
      github: "#",
      live: "#",
      company: "Zoomi Technologies",
      companyLogo: zoomi,
    },
    {
      title: "Vemas",
      category: "Mobile Application",
      image: vemas,
      description: "VEMAS is a modern automotive workshop software system designed for mechanical workshops. It has the necessary functionalities to manage your automobile workshop more efficiently and intelligently.VEMAS will help you move away from papers to a modern digital workplace and improve customer satisfaction, efficiency and profitability. More importatly ,VEMAS will make your business more sustainable.",
      technologies: ["Swift", "UIKit"],
      github: "#",
      live: "#",
      company: "Hithsa Pty Ltd",
      companyLogo: hithsa,
    },
    {
      title: "Find A Machanic",
      category: "Mobile Application",
      image: find_a_mechanic,
      description: "Find A Mechanic is an iOS application designed to help users find and connect with nearby mechanics. The app allows users to browse mechanic listings, view detailed information, and send inquiries directly through the app.",
      technologies: ["Swift", "UIKit"],
      github: "#",
      live: "#",
      company: "Hithsa Pty Ltd",
      companyLogo: hithsa,
    },
    {
      title: "R8ER",
      category: "Mobile Application",
      image: r8er,
      description: "This is an app for rating movies and TV series. In this app I developed almost all the UI using SwiftUI and API integration",
      technologies: ["Swift", "SwiftUI"],
      github: "#",
      live: "#",
      company: "Elegant Media",
      companyLogo: elegant,
    },
    {
      title: "Luxtix",
      category: "Mobile Application",
      image: luxtix,
      description: "This is an event ticketing app.In this app, I developed around 50% of the UI using SwiftUI and API integration ",
      technologies: ["Swift", "SwiftUI"],
      github: "#",
      live: "#",
      company: "Elegant Media",
      companyLogo: elegant,
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-darker rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="w-full h-48 object-fill group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-dark p-3 rounded-full hover:bg-orange-600 transition-colors"
                    >
                      <FiExternalLink />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-dark p-3 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <FiGithub />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {project.company && project.companyLogo && (
                  <div className="flex items-center mb-2">
                    <Image
                      src={project.companyLogo}
                      alt={project.company}
                      width={24}
                      height={24}
                      className="mr-2 rounded-full"
                    />
                    <span className="text-sm text-gray-400">{project.company}</span>
                  </div>
                )}
                <span className="text-primary text-sm font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800 text-xs px-3 py-1 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
            View More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
