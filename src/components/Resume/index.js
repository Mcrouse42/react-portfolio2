import React from "react";

import resume from "../../assets/images/resume.png";

function Resume() {
  const resumeLink = [
    {
      title: "Resume",
      img: resume,
      resumeLink: "https://docs.google.com/document/d/1rSuNPxZc0065E5DItrRHPXNGRFVSuB3R500E1_ZuTnU/edit?usp=sharing",
    },
  ];

    return (
      <div className="flex-row">
        {resumeLink.map((resume) => (
          <div>
                <h1>{resume.title}</h1>
            <div className="flex-grid">
              <img src={resume.img}></img>
            </div>
            <h5>
              <a href={resume.resumeLink}>Resume Link</a>
            </h5>
          </div>
        ))}
      </div>
    );
}

export default Resume;
