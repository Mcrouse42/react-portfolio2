import React from "react";
// import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">
        <u>About Me</u>
      </h1>
      {/* <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      /> */}
      <div>
       Full stack web developer with years of experience in the service industry. 
       Looking to use customer service skills to build more user friendly apps. Recently 
       earned a certificate in full stack web development after an intensive 6 month course 
       through the University of Pennsylvania. Leveraging years of service experience and 
       understanding to drive cross-functional collaboration in teams. Most recent project was 
       a team collaboration. Successfully developed a fully functioning, mobile responsive MERN 
       application to track game play for a very popular immersive role playing game. Aiming to use 
       previously acquired knowledge to enhance the user experience while learning new skills along the way.   

      </div>
    </section>
  );
}

export default About;
