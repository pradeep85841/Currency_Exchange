import React from "react";

const Footer = () => {
  return (
    <div>
      <br></br>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-info">
                <h3>Currency Exchange</h3>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus. Scelerisque felis
                  imperdiet proin fermentum leo. Amet volutpat consequat mauris
                  nunc congue.
                </p>
              </div>
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a>Terms of service</a>
                  </li>
                  <li>
                    <a>Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br></br>
                  New York, NY 535022<br></br>
                  United States <br></br>
                  <strong>Phone:</strong> +1 5589 55488 55<br></br>
                  <strong>Email:</strong> info@example.com<br></br>
                </p>
                <div class="social-links">
                  <a class="twitter">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a class="facebook">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a class="instagram">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a class="linkedin">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna veniam enim veniam illum dolore legam minim
                  quorum culpa amet magna export quem marada parida nodela
                  caramase seza.
                </p>
                <form action="" method="post" />
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>currency exchange</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
