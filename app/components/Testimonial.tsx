"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Testimonial = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Testimonial</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-darker p-8 rounded-lg relative"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Image
                  src="https://picsum.photos/200/300" // Add your profile image
                  alt="Profile"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="md:w-2/3">
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  Working with this developer was an absolute pleasure. Their
                  technical expertise, attention to detail, and ability to
                  deliver complex solutions on time exceeded our expectations.
                  The ERP system they developed has significantly improved our
                  business operations and efficiency.
                </p>

                <div>
                  <h4 className="text-xl font-bold text-white">John Sharma</h4>
                  <p className="text-primary">CEO, Tech Innovations Ltd</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
