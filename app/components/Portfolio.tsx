"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import athinatha from '../assets/images/project/project_athinatha.png'
import find_a_mechanic from '../assets/images/project/project_find_a_mechanic.png'
import fixel_magic from '../assets/images/project/project_fixel_magic.png'
import jova_wallet from '../assets/images/project/project_jova.png'
import justmove from '../assets/images/project/project_justmove.jpeg'
import justmove_admin from '../assets/images/project/project_justmove_admin.jpg'
import luxtix from '../assets/images/project/project_luxtix.png'
import padm from '../assets/images/project/project_padm.png'
import r8er from '../assets/images/project/project_r8er.png'
import vemas from '../assets/images/project/project_vemas.png'
import cl from '../assets/images/company/cl.png'
import zoomi from '../assets/images/company/zoomi.jpeg'
import hithsa from '../assets/images/company/hithsa.jpeg'
import elegant from '../assets/images/company/elegant_media.png'
import { useState } from "react";


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
      description: "Administrative dashboard solution for PADM, a Canadian 3D printing enterprise. The platform facilitates internal operations and comprehensive product management. Led frontend development as the primary engineer, architecting and implementing the complete user interface and component system.",
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
      description: "Athinatha is a comprehensive matchmaking platform designed for marriage proposals in Sri Lanka, facilitating connections between compatible partners. Architected and developed approximately 75% of the frontend application infrastructure.",
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
      description: "An innovative autonomous retail solution powered by computer vision technology, enabling frictionless shopping experiences without traditional checkout processes. Engineered approximately 75% of the frontend user interface and interaction systems.",
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
      description: "Comprehensive administrative dashboard for the JustMove fitness mobile application, featuring advanced race tracking capabilities, user analytics, and content management systems. Independently architected and developed the complete frontend implementation.",
      technologies: ["React.js", "CSS", "JavaScript"],
      github: "#",
      live: "#",
      company: "Zoomi Technologies",
      companyLogo: zoomi,
    },
    {
      title: "Jova Wallet",
      category: "Mobile Application",
      image: jova_wallet,
      description: "Jova Wallet is a secure, multi-chain cryptocurrency wallet built for iOS. Developed the native iOS app using SwiftUI and MVVM, with secure storage for sensitive data (seed phrase, PIN) via Keychain and BIP39 wallet generation with TrustWalletCore. Implemented a full onboarding flow (passcode, biometrics, seed phrase backup), WalletConnect v2 for dApp connections, and integration with Jova Chain APIs for multi-chain balances, transactions, token swaps, and market data. Uses Lottie for splash animations, environment-based configuration (dev/staging/prod), and session security with biometric and PIN authentication.",
      technologies: ["Swift", "SwiftUI", "TrustWalletCore", "WalletConnect", "Keychain", "Lottie", "CocoaPods", "REST API" ],
      github: "#",
      live: "#",
      company: "CL.",
      companyLogo: cl,
    },
    {
      title: "JustMove",
      category: "Mobile Application",
      image: justmove,
      description: "Led iOS application development, designing and implementing user interface components and core functionality while integrating RESTful API services. Optimized codebase architecture for enhanced performance and stability. Managed complete application release lifecycle, including version control, dependency management, and App Store deployment processes. Resolved critical application bugs, ANR issues, and crash-related incidents. Conducted performance testing through API load simulation using Locust framework. Architected and maintained React-based administrative web platform and developed white-label configuration system for generating iOS application variants. Executed comprehensive end-to-end testing protocols to ensure application quality and reliability.",
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
      description: "VEMAS is an enterprise-grade automotive workshop management system designed for mechanical service facilities. The platform provides comprehensive functionality to streamline workshop operations, enhance operational efficiency, and drive intelligent business management. VEMAS facilitates digital transformation by replacing paper-based processes with modern digital workflows, resulting in improved customer satisfaction, operational efficiency, and profitability. The solution is engineered to promote long-term business sustainability and growth.",
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
      description: "Find A Mechanic is a native iOS application designed to facilitate connections between users and local automotive service providers. The platform enables users to browse comprehensive mechanic listings, access detailed service information, and submit inquiries directly through the application interface.",
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
      description: "A comprehensive entertainment rating application for movies and television series. Architected and developed the majority of the user interface utilizing SwiftUI framework and integrated RESTful API services for data management.",
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
      description: "A comprehensive event ticketing platform for managing and purchasing event tickets. Developed approximately 50% of the user interface utilizing SwiftUI framework and integrated API services for real-time data synchronization.",
      technologies: ["Swift", "SwiftUI"],
      github: "#",
      live: "#",
      company: "Elegant Media",
      companyLogo: elegant,
    },
  ];

  const [filter, setFilter] = useState("All");

  const webProjects = projects.filter((project) => project.category === "Web Application");
  const mobileProjects = projects.filter((project) => project.category === "Mobile Application");

  let filteredProjects = projects;
  if (filter === "Web") filteredProjects = webProjects;
  if (filter === "Mobile") filteredProjects = mobileProjects;

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
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-4">
            {['All', 'Web', 'Mobile'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2 rounded-full font-semibold border transition-colors duration-200 focus:outline-none ${
                  filter === type
                    ? 'bg-primary text-dark border-primary'
                    : 'bg-transparent text-gray-300 border-gray-600 hover:bg-gray-800'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Filtered Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
      </div>
    </section>
  );
};

export default Portfolio;
