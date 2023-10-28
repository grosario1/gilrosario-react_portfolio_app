import React from 'react';

function AboutMe() {
  return (
    <section className="container text-center mt-5">
      <h1>Full Stack Web Developer</h1>
      <div className="mx-auto my-5">
        <img
          src="./dist/assets/gil-profile-pic.jpg"
          alt="Gil Rosario"
          className="img-fluid"
          style={{ maxWidth: "130px" }}
        />
      </div>
      <p className="text-left">
        I am Gil Rosario, an experienced IT Engineer and current Fullstack Web development student seeking software engineering role opportunities. I aspire to work in a dynamic environment as a Software Engineer where I can use my analytical skills, current technical skills, and creative thinking abilities to create robust solutions. I am looking to secure a position that allows me to leverage my current technical infrastructure experience, maximize operational efficiencies, and exceed expectations. I aim to integrate my abilities by collaborating with cross-functional teams to translate highly complex system analysis within a diverse and comprehensive business environment.
      </p>
    </section>
  );
}

export default AboutMe;

