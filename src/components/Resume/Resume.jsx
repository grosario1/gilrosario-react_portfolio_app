import React from 'react';

function Resume() {
  return (
    <section className="container">
      <h1 className="mt-4">Resume</h1> {/* Use the "mt-4" class to add margin-top */}
      <p>View my LinkedIn profile <a href="https://www.linkedin.com/in/gilberto-rosario-8955868/">here</a></p>
      <embed src="/assets/Gilberto_Rosario_Professional_Resume.pdf" width="100%" height="600px" type="application/pdf" />
    </section>
  );
}

export default Resume;