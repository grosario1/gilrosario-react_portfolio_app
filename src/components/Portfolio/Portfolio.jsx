import React from 'react';

function Portfolio() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="text-center">Work</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src="./public/assets/surf-report-image.jpeg" alt="surf-report-img" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://github.com/grosario1/gil-rosario-professional-site">Surf Report</a>
                </h5>
                <p className="card-text">MERN-Stack</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img src="./public/assets/gr-project-2.jpg" alt="led-wall-img" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://rhythm-reviews-8a43a75413f9.herokuapp.com/">Rhythm Reviews</a>
                </h5>
                <p className="card-text">Node/IoT</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src="./public/assets/calc-img.jpeg" alt="calc-img" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://github.com/grosario1?tab=repositories">Calculator</a>
                </h5>
                <p className="card-text">React/JavaScript/CSS</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img src="./public/assets/pastel-puzzels-img.jpeg" alt="pastel-puzzels-img" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://github.com/grosario1?tab=repositories">Pastel Puzzels</a>
                </h5>
                <p className="card-text">MERN Stack</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src="./public/assets/gr-project-1.jpg" alt="run-buddy-img" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://gr-uconn-coding-bootcamp-projects.github.io/Top-Major-Airline-Tracking-App_Group2/">Top Major Airline Tracker</a>
                </h5>
                <p className="card-text">HTML/CSS</p>
              </div>
            </div>
          </div> _redirects with no extension. 
        </div>
      </div>
    </section>
  );
}

export default Portfolio;