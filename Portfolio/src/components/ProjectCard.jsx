// src/components/ProjectCard.js
import React from "react";

const ProjectCard = ({ title, description, stack, frontend, backend, live }) => (
  <div className="bg-white shadow-md rounded p-4">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="mb-2">{description}</p>
    <p className="mb-2 font-medium">Tech Stack: {stack}</p>
    <div className="flex flex-col gap-2">
      <a href={frontend} className="text-blue-600 hover:underline" target="_blank">Frontend GitHub</a>
      <a href={backend} className="text-blue-600 hover:underline" target="_blank">Backend GitHub</a>
      <a href={live} className="text-green-600 hover:underline" target="_blank">Live Demo</a>
    </div>
  </div>
);

export default ProjectCard;
