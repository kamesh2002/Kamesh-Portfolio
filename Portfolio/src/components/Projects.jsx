import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database } from 'lucide-react';
import twitterImage from '../assets/twitter-logo-2.svg';
import spotifyImage from "../assets/spotify-2.svg";
import chatImage from "../assets/logo_big.svg";

const Projects = () => {
  const projects = [
    {
      title: 'Twitter Clone',
      description:
        'A simplified clone of Twitter with functionality like posting tweets, liking, and responsive UI. Frontend only.',
      image: twitterImage,
      techStack: ['React', 'TailwindCSS'],
      githubFrontend: 'https://github.com/kamesh2002/Twitter-Clone',
      githubBackend: '',
      liveDemo: '#',
      featured: false,
    },
    {
      title: 'Chat Meet App',
      description:
        'A real-time video chat application using WebRTC and Socket.io with separate frontend and backend codebases.',
      image: chatImage,
      techStack: ['React', 'Node.js', 'Socket.io', 'WebRTC'],
      githubFrontend: 'https://github.com/kamesh2002/Chat-Meet/tree/master/client-1',
      githubBackend: 'https://github.com/kamesh2002/Chat-Meet/tree/master/server-1',
      liveDemo: '#',
      featured: false,
    },
    {
      title: 'Spotify Clone',
      description:
        'Frontend-only Spotify clone built using React and TailwindCSS with basic routing and responsive design.',
      image: spotifyImage,
      techStack: ['React', 'TailwindCSS'],
      githubFrontend: 'https://github.com/kamesh2002/FEND-45-Clone',
      githubBackend: '',
      liveDemo: 'https://fend-45-clone.vercel.app/',
      featured: false,
    },
    {
      title: 'Task Scheduler',
      description:
        'A simple todo/task management app allowing users to create, track and delete daily tasks. Built with React.',
      image:
        'https://images.pexels.com/photos/6801649/pexels-photo-6801649.jpeg?auto=compress&cs=tinysrgb&w=600',
      techStack: ['React'],
      githubFrontend: 'https://github.com/kamesh2002/FSD-Guvi/tree/master/Day-23/Todo',
      githubBackend: '',
      liveDemo: 'https://fsd-todo-hazel.vercel.app/',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
        <p className="text-gray-500">Here are some of the projects I’ve built recently.</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-sky-100 text-sky-600 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                {project.githubFrontend && (
                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black"
                  >
                    <Code className="w-5 h-5 inline-block mr-1" /> Frontend
                  </a>
                )}
                {project.githubBackend && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black"
                  >
                    <Database className="w-5 h-5 inline-block mr-1" /> Backend
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline ml-auto"
                  >
                    <ExternalLink className="w-4 h-4 inline-block mr-1" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
