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

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
          >
            Hi, I'm <span className="text-sky-600">Kamesh J</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-xl mx-auto mb-6"
          >
            I'm a full-stack developer specializing in the MERN stack, passionate about building modern, responsive, and performant web applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 mt-6"
          >
            <a href="mailto:alex@example.com" className="text-sky-600 hover:text-sky-800">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/alexjohnson" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800">
              <Github className="w-6 h-6" />
            </a>
            <a href="/Kamesh.pdf" download className="text-sky-600 hover:text-sky-800">
              <Download className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;