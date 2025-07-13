"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiSwift,
  SiGit,
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiTrello,
  SiJira,
  SiXcode,
  SiVisualstudiocode,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "SwiftUI", icon: SiSwift, color: "#FA7343" },
    { name: "UIKit", icon: SiSwift, color: "#FA7343" },
    { name: "Objective-C", icon: SiSwift, color: "#FA7343" },
    { name: "Firebase Crashlytics", icon: SiFirebase, color: "#FFCA28" },
    { name: "Locust (Python)", icon: FaPython, color: "#3776AB" },
    { name: "Git Source Control", icon: SiGit, color: "#F05032" },
    { name: "Next.js", icon: SiNextdotjs, color: "black" },
    { name: "React & CSS", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Trello", icon: SiTrello, color: "#0079BF" },
    { name: "Jira", icon: SiJira, color: "#0052CC" },
    { name: "Axios", icon: SiJavascript, color: "#5A29E4" },
    { name: "Xcode", icon: SiXcode, color: "#147EFB" },
    { name: "VSCode", icon: SiVisualstudiocode, color: "#007ACC" },
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
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-dark p-6 rounded-lg text-center hover:bg-gray-800 transition-all duration-300 group"
            >
              <skill.icon
                className="text-4xl mx-auto mb-3 group-hover:animate-bounce"
                style={{ color: skill.color }}
              />
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
