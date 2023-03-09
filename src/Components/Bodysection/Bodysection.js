import React from "react";
import "./Bodysection.css";
function Bodysection() {
  return (
    <div>
      <section id="hero">
        <div className="hero-container" data-aos="fade-up">
          <h1>Welcome to Currency Exchange</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-11">
                <div className="row justify-content-end">
                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box py-5">
                      <i className="bi bi-emoji-smile"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="65"
                        className="purecounter"
                      >
                        0
                      </span>
                      <p>Happy Clients</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box py-5">
                      <i className="bi bi-journal-richtext"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="85"
                        className="purecounter"
                      >
                        0
                      </span>
                      <p>Projects</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box pb-5 pt-0 pt-lg-5">
                      <i className="bi bi-clock"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="27"
                        className="purecounter"
                      >
                        0
                      </span>
                      <p>Years of experience</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box pb-5 pt-0 pt-lg-5">
                      <i className="bi bi-award"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="22"
                        className="purecounter"
                      >
                        0
                      </span>
                      <p>Awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 video-box align-self-baseline position-relative">
                <img src=" " className="img-fluid" alt=""></img>
              </div>

              <div className="col-lg-6 pt-3 pt-lg-0 content">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Bodysection;
