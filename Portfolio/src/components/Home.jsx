import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-white">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-white p-2">
                  <img
                    src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Developer Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
          >
            Hi, I'm <span className="text-sky-600">Kamesh J</span>
          </motion.h1>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-xl mx-auto mb-6"
          >
            I'm a full-stack developer specializing in the MERN stack, passionate about building modern, responsive, and performant web applications.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            {/* Email */}
            <a
              href="mailto:kameshmaharajan2002@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-700 font-medium rounded-lg hover:bg-sky-200 transition"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kamesh-jayabalan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-700 font-medium rounded-lg hover:bg-sky-200 transition"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kamesh2002"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-700 font-medium rounded-lg hover:bg-sky-200 transition"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>

            {/* Resume Download */}
            <a
              href="/Kamesh.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-sky-600 text-white font-medium rounded-lg shadow hover:bg-sky-700 transition"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
