import React from "react";

import resume from "../../assets/images/resume.png";

function Resume() {
  const resumeLink = [
    {
      img: resume,
      resumeLink: "https://docs.google.com/document/d/1rSuNPxZc0065E5DItrRHPXNGRFVSuB3R500E1_ZuTnU/edit?usp=sharing",
    },
  ];

    return (
      <div className="flex-row">
        {resumeLink.map((resume) => (
          <div>
            <h1>
              <u>Resume</u>
            </h1>
            <h4>
              <a href={resume.resumeLink}>Resume Link</a>
            </h4>
            <div className="flex-grid">
              <img src={resume.img}></img>
            </div>
          </div>
        ))}
      </div>
    );
}

export default Resume;
