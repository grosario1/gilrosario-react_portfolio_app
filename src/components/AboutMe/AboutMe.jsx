import React, { useEffect, useState } from 'react';
import './AboutMe.css';

function AboutMe() {
  const [text, setText] = useState('');
  const experienceText = "An experienced IT Engineer and current Fullstack Web development student seeking software engineering role opportunities. I aspire to work in a dynamic environment as a Software Engineer where I can use my analytical skills, current technical skills, and creative thinking abilities to create robust solutions. I am looking to secure a position that allows me to leverage my current technical infrastructure experience, maximize operational efficiencies, and exceed expectations. I aim to integrate my abilities by collaborating with cross-functional teams to translate highly complex system analysis within a diverse and comprehensive business environment.";

  useEffect(() => {
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < experienceText.length) {
        setText(experienceText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mt-5">
      <h1 style={{ fontSize: '32px', paddingTop: '100px', textAlign: 'center' }}>About Me</h1>
      <div className="mx-auto my-5">
        <div className="d-flex">
          <div>
            <img
              src="/assets/gil-profile-pic.jpg"
              alt="Gil Rosario"
              className="img-fluid with-border-and-shadow"
              style={{ maxWidth: "130px" }}
            />
          </div>
          <div className="ml-4 text-left typing-text" style={{ fontSize: '18px', lineHeight: '1.5', padding: '40px' }}>
            <p className="chalkduster-text">
              Hello!... I am Gil Rosario
            </p>
            <br /> 
            <p className="experience-text">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;