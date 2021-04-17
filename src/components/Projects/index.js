import React from "react";

import developer from "../../assets/images/developer.png";
import movers from "../../assets/images/movers.png";
import weather from "../../assets/images/weather.png";
import notetaker from "../../assets/images/notetaker.png";
import book from "../../assets/images/book.png";


function Projects() {
    
    const projectsArray =  [
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
                "An application that allows you to view earthquakes near in proximity to your location.",
            github: "https://github.com/Mcrouse42/movers-not-shakers",
            deployed: "https://jbeedle19.github.io/movers-not-shakers/",
        },
        {
            img: weather,
            title: "Weather Dashboard",
            description: "An app that allows you to track weather conditions.",
            github: "https://github.com/Mcrouse42/weather-dashboard",
            deployed: "https://mcrouse42.github.io/weather-dashboard/",
        },
        {
            img: notetaker,
            title: "Note taker",
            description: "An app that allows you to write and store notes.",
            github: "https://github.com/Mcrouse42/notetaker",
            deployed: "https://evening-basin-46543.herokuapp.com/",
        },
        {
            img: book,
            title: "Book search engine",
            description:
                "An app that allows you to search for any book and save them.",
            github: "https://github.com/Mcrouse42/book-search-engine",
            deployed: "https://secure-coast-66975.herokuapp.com/",
        },
    ];
    
    
    
    return (
      <div className="flex-row">
        {projectsArray.map((project) => (
          <div>
                <h1>{project.title}</h1>
                <h4>{project.description}</h4>
            <div className="flex-grid">
              <img src={project.img}></img>
            </div>
            <h5>
              <a href={project.github}>Github</a>
              <a href={project.deployed}>Deployed</a>
            </h5>
          </div>
          // <div>{projectsArray.title}</div>
          // <div>projectsArray.description}</div>
          // <div>{projectsArray.github}</div>
          // <div>{projectsArray.deployed}</div>
        ))}
      </div>
    );
}


export default Projects;
