"use client";

import { motion } from "framer-motion";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import Image from "next/image";
import profilePhoto from '../assets/images/profile_image.png'

const Hero = () => {

 const handleDownload = () => {
  const pdfUrl = "resumes/iOS_developer_rajitha.pdf";
  
  // First check if file exists
  fetch(pdfUrl)
    .then(response => {
      if (response.ok) {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.setAttribute("download", "Rajitha_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error('File not found');
        alert('Resume file not found');
      }
    })
    .catch(error => {
      console.error('Error accessing file:', error);
      alert('Error accessing resume file');
    });
};

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            I&apos;m <span className="text-primary">Rajitha Gayashan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-10"
          >
            iOS & Web Developer
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 mr-4"
          >
            Contact Me
          </motion.button>
          <button onClick={handleDownload}
          className="inline-block bg-transparent border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark transition-colors duration-300">
  Download Resume
</button>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary rounded-full opacity-20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-42 h-52 border-2 border-primary rounded-full opacity-10"
            />
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-transparent overflow-hidden">
              <Image
                src={profilePhoto}
                alt="Profile"
                width={200}
                height={200}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-4 z-10"
      >
        {[
          { icon: FiTwitter, href: "https://x.com/__Rajitha", label: "Twitter" },
          { icon: FiLinkedin, href: "https://www.linkedin.com/in/rajitha-gayashan/", label: "LinkedIn" },
          { icon: FiGithub, href: "https://github.com/rgayashan", label: "GitHub" },
        ].map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            whileHover={{ scale: 1.2, color: "#FFA500" }}
            className="block text-white hover:text-primary transition-colors duration-300 text-xl"
          >
            <social.icon />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
