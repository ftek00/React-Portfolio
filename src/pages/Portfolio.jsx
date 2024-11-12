import React from "react";
import Cards from "../components/Cards";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      image: "/path/to/image.jpg",
      deployedLink: "https://project1.com",
      githubLink: "https://github.com/project1",
    },
    {
      title: "Project 2",
      image: "/path/to/image.jpg",
      deployedLink: "https://project2.com",
      githubLink: "https://github.com/project2",
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio">
        {projects.map((project, index) => (
          <Cards key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
