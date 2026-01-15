"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a results-oriented software engineer with extensive expertise in
            frontend web development and native iOS application development.
            Throughout my career, I have architected and delivered scalable,
            enterprise-grade solutions using modern technologies including React,
            Next.js, SwiftUI, UIKit, and Objective-C, serving clients across
            startup and enterprise environments.
            <br />
            <br />
            My professional competencies encompass:
            <br />
            ▸ Architecting and implementing responsive, high-performance web
            applications utilizing React and Next.js frameworks
            <br />
            ▸ Developing native iOS applications with SwiftUI and UIKit,
            ensuring optimal performance and user experience
            <br />
            ▸ Designing and integrating RESTful APIs, optimizing application
            performance, and delivering seamless cross-platform user experiences
            <br />
            ▸ Leading cross-functional collaboration with design teams, product
            managers, and quality assurance to deliver production-ready features
            within established timelines
            <br />
            <br />
            I am dedicated to continuous professional development, staying
            current with industry best practices and emerging technologies in
            frontend and mobile development. My approach emphasizes writing
            clean, maintainable, and well-documented code while delivering
            solutions that drive measurable business value and exceptional user
            experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
