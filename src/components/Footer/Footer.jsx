import React from 'react';

function Footer() {
    return (
      <footer className="bg-light text-center">
        <div className="container p-4">
          <section className="mb-4">
            <a className="btn btn-outline-dark btn-floating m-1" href="https://github.com/grosario1" role="button">
              GitHub
            </a>
            <a className="btn btn-outline-dark btn-floating m-1" href="https://www.linkedin.com/in/gilberto-rosario-8955868/" role="button">
              LinkedIn
            </a>
          </section>
          <div className="text-center p-3">
            © {new Date().getFullYear()}. Gil Rosario
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;