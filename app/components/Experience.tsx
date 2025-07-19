"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import zoomi from '../assets/images/company/zoomi.jpeg'
import hithsa from '../assets/images/company/hithsa.jpeg'
import elegant from '../assets/images/company/elegant_media.png'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      year: "2022 January - Present",
      position: "Software Engineer",
      company: "ZOOMi Technologies Inc.",
      location: "Hybrid",
      description:
        "Working as a software engineer for ZOOMi Technologies Inc. Currently working on web development in Next.js, React, and app development in Swift, SwiftUI, UIKit.",
      technologies: [
        "Swift, Objective -C, SwiftUI, UIKit, React, Next.js,Axios, Tailwind CSS, N8N, HTML, CSS, Python, Django, Jira, Trello, Xcode, VSCode, Git",
      ],
      image: zoomi,
    },
    {
      year: "2023 May - Present",
      position: "Software Engineer - Freelance",
      company: "Hithsa Pty Ltd",
      location: "",
      description:
        "Working as a software engineer for Hithsa Pty Ltd. Currently working on Swift, SwiftUI, UIKit, Xcode, Git.",
      technologies: [
        "Swift, SwiftUI, UIKit, Xcode, Git",
      ],
      image: hithsa,
    },
    {
      year: "2021 January - 2021 July",
      position: "Software Engineer Intern",
      company: "Elegant Media Sri Lanka",
      location: "Remote",
      description:
        "Worked as a software engineer intern for Elegant Media Sri Lanka. Developed an apps for clients. Implemented the app using Swift(SwiftUI).",
      technologies: ["Swift, SwiftUI, Trello, Xcode, Git"],
      image: elegant,
    },
  ];

  return (
    <section className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary text-dark px-4 py-2 rounded-lg font-bold text-lg">
                  {exp.year}
                </div>
              </div>

              <div className="bg-dark p-6 rounded-lg ml-8 flex gap-4">
                {exp.image && (
                  <Image
                    src={exp.image}
                    alt={exp.company + " logo"}
                    className="w-12 h-12 object-contain mb-2 rounded-lg"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.position}
                  </h3>
                  <p className="text-primary font-semibold mb-1">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.location}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800 text-xs px-3 py-1 rounded-[20px] text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
