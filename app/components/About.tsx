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
            I&#39;m a passionate and results-driven software engineer with
            hands-on experience in both web and iOS development. Over the past
            few years, I&#39;ve built and maintained scalable, user-centric
            applications using React, Next.js, SwiftUI, UIKit, and Objective-C,
            contributing to both startup and enterprise-level products.
            <br />
            <br />
            My core strengths lie in:
            <br />
            ▸ Designing and developing responsive web interfaces with React and
            Next.js
            <br />
            ▸ Building robust and intuitive iOS applications with SwiftUI and
            UIKit
            <br />
            ▸ Integrating APIs, optimizing app performance, and ensuring
            seamless user experiences across platforms
            <br />
            ▸ Collaborating cross-functionally with designers, product owners,
            and QA to ship quality features on time
            <br />
            <br />I enjoy taking on new challenges, continuously improving my
            skills, and staying up to date with the latest trends in frontend
            and mobile development. Whether it&#39;s creating a slick UI or
            solving complex logic under the hood, I&#39;m committed to
            delivering clean, maintainable code and impactful user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
