import React from "react";

import developer from "../../assets/images/developer.png";
import movers from "../../assets/images/movers.png";
import dungeon from "../../assets/images/dungeon.png";



function Projects() {
    
    const projectsArray = [
      {
        img: dungeon,
        title: "Dungeon Master's Guide",
        description:
          "A website that allows you to track initiatives, players and monsters while you interact as a Dungeon Master for the popular game Dungeons and Dragons.",
        github: "https://github.com/Mcrouse42/initiate-dnd",
        deployed: "https://dungeon-masters-guide.herokuapp.com/",
      },
      {
        img: developer,
        title: "Developer Tracker",
        description:
          "A web application to track your progress as developer learning new technology.",
        github: "https://github.com/Mcrouse42/developer-tracker-1",
        deployed: "https://floating-reaches-76130.herokuapp.com/",
      },
      {
        img: movers,
        title: "Movers Not Shakers",
        description:
          "An application that allows you to view earthquakes in proximity to your location.",
        github: "https://github.com/Mcrouse42/movers-not-shakers",
        deployed: "https://jbeedle19.github.io/movers-not-shakers/",
      },
    ];
    
    
    return (
      <div className="flex-grid">
        {projectsArray.map((project) => (
          <div className="flex-grid">
            <div>
              <h1>{project.title}</h1>
              <h4>{project.description}</h4>

              <h5>
                <img src={project.img}></img>
              </h5>
            </div>
            <h4>
              <a href={project.github}>Github</a>
              <a href={project.deployed}>Deployed</a>
            </h4>
          </div>
        ))}
      </div>
    );
}


export default Projects;
