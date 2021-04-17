import React from "react";

import developer from "../../assets/images/developer.png";
import movers from "../../assets/images/movers.png";
import weather from "../../assets/images/weather.png";
import notetaker from "../../assets/images/notetaker.png";
import book from "../../assets/images/book.png";


function Projects() {
    
    const projectsArray = [
      {
        img: developer,
        title: "Developer Tracker",
        description:
          "A web application to track you progress as developer learning new tech",
        github: "https://github.com/Mcrouse42/developer-tracker-1",
        deployed: "https://floating-reaches-76130.herokuapp.com/",
      },
      {
        img: movers,
        title: "Movers Not Shakers",
        description:
          "An apllication that allows you to view earthquakes near by",
        github: "https://github.com/Mcrouse42/movers-not-shakers",
        deployed: "https://jbeedle19.github.io/movers-not-shakers/",
      },
      {
        img: weather,
        title: "Weather Dashboard",
        description: "An app that allows you to track weather conditions",
        github: "https://github.com/Mcrouse42/weather-dashboard",
        deployed: "https://mcrouse42.github.io/weather-dashboard/",
      },
      {
        img: notetaker,
        title: "Note taker",
        description: "An app that allows you to write and store notes",
        github: "https://github.com/Mcrouse42/notetaker",
        deployed: "https://evening-basin-46543.herokuapp.com/",
      },
      {
        img: book,
        title: "Book search engine",
        description:
          "An app that allows you to search for any book and save it",
        github: "https://github.com/Mcrouse42/book-search-engine",
        deployed: "https://secure-coast-66975.herokuapp.com/",
      },
    ];
    
    
    
    return (
      <div className="flex-row">
        {projectsArray.map(() => (
            <div
            Image = {projectsArray.img}
            Title = {projectsArray.title}
            Description={projectsArray.description}
            Github = {projectsArray.github}
            Deployed = {projectsArray.github}   
          />
        ))}
      </div>
    );
}


export default Projects;
