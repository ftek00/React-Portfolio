import React from "react";

const Cards = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  );
};

export default Cards;
