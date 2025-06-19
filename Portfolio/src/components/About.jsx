import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="mx-auto text-blue-600 h-10 w-10 mb-4" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices',
    },
    {
      icon: <Database className="mx-auto text-blue-600 h-10 w-10 mb-4" />,
      title: 'Database Design',
      description: 'Efficient database architecture and optimization',
    },
    {
      icon: <Globe className="mx-auto text-blue-600 h-10 w-10 mb-4" />,
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices',
    },
    {
      icon: <Rocket className="mx-auto text-blue-600 h-10 w-10 mb-4" />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-sky-100 to-sky-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          I'm a MERN Stack Developer focused on clean architecture, performance, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;