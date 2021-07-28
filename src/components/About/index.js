import React from "react";
// import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  const contact = [
    {
      linkedin: "https://www.linkedin.com/in/matthew-crouse-9383381b2/",
      github: "https://github.com/Mcrouse42",
    },
  ];
  // return (
  //   <section className="my-5">
  //   {contact.map((contact) => (
  //     <h1 id="about">
  //       <u>About Me</u>
  //     </h1>
  //     <h4>
  //       <a href={contact.linkedin}>LinkedIn</a>
  //       <a href={contact.github}>Github</a>
  //     </h4>
  //     <div>
  //       Full stack web developer with years of experience in the service
  //       industry. Looking to use customer service skills to build more user
  //       friendly apps. Recently earned a certificate in full stack web
  //       development after an intensive 6 month course through the University of
  //       Pennsylvania. Leveraging years of service experience and understanding
  //       to drive cross-functional collaboration in teams. Most recent project
  //       was a team collaboration. Successfully developed a fully functioning,
  //       mobile responsive MERN application to track game play for a very popular
  //       immersive role playing game. Aiming to use previously acquired knowledge
  //       to enhance the user experience while learning new skills along the way.
  //     </div>
  //   ))}
  //   </section>
  // );
    return (
      <section className="my-5">
        {contact.map((contact) => (
          <div>
            <h1 id="about">
              <u>About Me</u>
            </h1>
            <h4>
              <a href={contact.linkedin}>LinkedIn</a>
              <div>
                -
              </div>
              <a href={contact.github}>Github</a>
            </h4>
            <div>
              Full stack web developer with years of experience in the
              service industry. Looking to use customer service skills to
              build more user friendly apps. Recently earned a certificate in
              full stack web development after an intensive 6 month course
              through the University of Pennsylvania. Leveraging years of
              service experience and understanding to drive cross-functional
              collaboration in teams. Most recent project was a team
              collaboration. Successfully developed a fully functioning,
              mobile responsive MERN application to track game play for a very
              popular immersive role playing game. Aiming to use previously
              acquired knowledge to enhance the user experience while
              learning new skills along the way. 
            </div>
          </div>
        ))}
      </section>
    );
}

export default About;
