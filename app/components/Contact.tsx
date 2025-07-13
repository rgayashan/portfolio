"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "contact.gayashan@gmail.com",
      href: "mailto:contact.gayashan@gmail.com",
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "(070) 138 7572",
      href: "tel:+94701387572",
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Matara, Sri Lanka",
      href: "https://www.google.com/maps/place/Matara,+Sri+Lanka/@6.0000000,80.5000000,15z/data=!3m1!4b1!4m6!3m5!1s0x3ae1682c7ed6688b:0x239d63554fa77a0!8m2!3d5.9574965!4d80.533723!16s%2Fg%2F11c400zqtk?entry=ttu&g_ep=EgoyMDI1MDIyMi4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className=" md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-300 text-lg">
                I&apos;m always open to discussing new opportunities,
                interesting projects, or just having a conversation about
                technology. Feel free to reach out!
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                target={info.title === "Email" || info.title === "Location" ? "_blank" : undefined}
                rel={info.title === "Email" || info.title === "Location" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 p-4 bg-dark rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <div className="bg-primary text-dark p-3 rounded-full group-hover:scale-110 transition-transform">
                  <info.icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{info.title}</h4>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
