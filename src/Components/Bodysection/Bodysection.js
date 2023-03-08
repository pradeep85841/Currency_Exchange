import React from "react";
import "./Bodysection.css";
const Bodysection = () => {
  return (
    <div>
      <section id="hero">
        <div class="hero-container" data-aos="fade-up">
          <h1>Welcome to Serenity</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
        </div>
      </section>

      {/*<main id="main"></main>*/}

      <section id="about" class="about">
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-lg-11">
              <div class="row justify-content-end">
                <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div class="count-box py-5">
                    <i class="bi bi-emoji-smile"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="65"
                      class="purecounter"
                    >
                      0
                    </span>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div class="count-box py-5">
                    <i class="bi bi-journal-richtext"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="85"
                      class="purecounter"
                    >
                      0
                    </span>
                    <p>Projects</p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div class="count-box pb-5 pt-0 pt-lg-5">
                    <i class="bi bi-clock"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="27"
                      class="purecounter"
                    >
                      0
                    </span>
                    <p>Years of experience</p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div class="count-box pb-5 pt-0 pt-lg-5">
                    <i class="bi bi-award"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="22"
                      class="purecounter"
                    >
                      0
                    </span>
                    <p>Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 video-box align-self-baseline position-relative">
              <img src="assets/img/about.jpg" class="img-fluid" alt=""></img>
            </div>

            <div class="col-lg-6 pt-3 pt-lg-0 content">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i class="bx bx-check-double"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i class="bx bx-check-double"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="bx bx-check-double"></i> Voluptate repellendus
                  pariatur reprehenderit corporis sint.
                </li>
                <li>
                  <i class="bx bx-check-double"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bodysection;
